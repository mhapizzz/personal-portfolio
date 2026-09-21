<script setup>
import { computed, ref, watch, watchEffect, nextTick, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { getProject, WHATSAPP_URL } from '../data/projects'

const props = defineProps({
  slug: { type: String, required: true },
})

const router = useRouter()
const project = computed(() => getProject(props.slug))

watchEffect(() => {
  if (!project.value) router.replace('/projects')
})

const ctaHref = computed(() => project.value?.demoUrl || WHATSAPP_URL)
const ctaLabel = computed(() => (project.value?.demoUrl ? 'Open live demo' : 'DM for demo'))

const gallery = computed(() => {
  if (!project.value) return []
  const stills = project.value.stills || []
  return [project.value.cover, ...stills]
})

const lightboxIndex = ref(null)
const lightboxOpen = computed(() => lightboxIndex.value !== null)
const activeImage = computed(() =>
  lightboxOpen.value ? gallery.value[lightboxIndex.value] : null,
)
const lightboxCounter = computed(() => {
  if (!lightboxOpen.value || !gallery.value.length) return ''
  return `${lightboxIndex.value + 1} / ${gallery.value.length}`
})

const triggerEls = ref([])
let lastTrigger = null

function setTriggerRef(el, i) {
  if (el) triggerEls.value[i] = el
}

function openLightbox(index, event) {
  lastTrigger = event?.currentTarget || triggerEls.value[index] || null
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
  nextTick(() => {
    lastTrigger?.focus?.()
    lastTrigger = null
  })
}

function showPrev() {
  if (!gallery.value.length) return
  const len = gallery.value.length
  lightboxIndex.value = (lightboxIndex.value - 1 + len) % len
}

function showNext() {
  if (!gallery.value.length) return
  const len = gallery.value.length
  lightboxIndex.value = (lightboxIndex.value + 1) % len
}

function onLightboxKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') {
    e.preventDefault()
    closeLightbox()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    showPrev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    showNext()
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) closeLightbox()
}

watch(lightboxOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    window.addEventListener('keydown', onLightboxKeydown)
    nextTick(() => {
      document.querySelector('.lightbox-close')?.focus()
    })
  } else {
    window.removeEventListener('keydown', onLightboxKeydown)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onLightboxKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section v-if="project" class="detail">
    <RouterLink class="back" to="/projects">&larr; All projects</RouterLink>
    <h1 class="page-title">{{ project.title }}</h1>
    <p class="lead">{{ project.description }}</p>

    <button
      type="button"
      class="detail-cover"
      :ref="(el) => setTriggerRef(el, 0)"
      :aria-label="`View ${project.title} cover larger`"
      @click="openLightbox(0, $event)"
    >
      <img :src="project.cover" :alt="`${project.title} cover`" width="1120" height="630" />
    </button>

    <div v-if="project.stills?.length" class="stills">
      <button
        v-for="(still, i) in project.stills"
        :key="still"
        type="button"
        class="still"
        :ref="(el) => setTriggerRef(el, i + 1)"
        :aria-label="`View ${project.title} photo ${i + 1} larger`"
        @click="openLightbox(i + 1, $event)"
      >
        <img :src="still" :alt="`${project.title} still ${i + 1}`" width="560" height="420" />
      </button>
    </div>

    <div class="actions detail-cta">
      <a class="btn btn-primary" :href="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxOpen && activeImage"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`${project.title} photo ${lightboxCounter}`"
        @click="onBackdropClick"
      >
        <div class="lightbox-chrome">
          <span class="lightbox-counter" aria-live="polite">{{ lightboxCounter }}</span>
          <button type="button" class="lightbox-close" aria-label="Close photo" @click="closeLightbox">
            Close
          </button>
        </div>

        <figure class="lightbox-figure" @click.stop>
          <img
            :src="activeImage"
            :alt="`${project.title} photo ${lightboxIndex + 1}`"
            class="lightbox-img"
          />
        </figure>

        <div class="lightbox-navs">
          <button
            type="button"
            class="lightbox-nav lightbox-prev"
            aria-label="Previous photo"
            @click.stop="showPrev"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            class="lightbox-nav lightbox-next"
            aria-label="Next photo"
            @click.stop="showNext"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>
