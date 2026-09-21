<script setup>
import { ref, computed, provide, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { EMAIL } from './data/projects'

const route = useRoute()
const menuOpen = ref(false)

function openMenu() {
  menuOpen.value = true
}

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function onKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

provide('menu', { openMenu, closeMenu, toggleMenu, menuOpen })

const isHome = computed(() => route.name === 'home')

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="shell" :class="{ 'is-home': isHome }">
    <div class="paper-texture" aria-hidden="true"></div>

    <header class="top">
      <RouterLink class="brand" to="/" aria-label="Peace Labs home">
        <img
          class="brand-logo"
          src="/images/logo-peace-labs.png"
          alt="Peace Labs"
          width="40"
          height="40"
        />
      </RouterLink>

      <div class="top-right">
        <nav class="nav-links" aria-label="Primary">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </nav>

        <RouterLink class="nav-cta" to="/contact">
          Get in touch
          <span class="nav-cta-icon" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6h7M6.5 3l3 3-3 3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </RouterLink>

        <button type="button" class="nav-about nav-menu-btn" @click="openMenu">
          Menu
        </button>
      </div>
    </header>

    <main class="main">
      <div class="main-inner" :class="{ 'is-home': isHome }">
        <RouterView />
      </div>
    </main>

    <footer v-if="!isHome" class="foot">
      <p>&copy; {{ new Date().getFullYear() }} M. Hapiz</p>
      <p>
        <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
      </p>
    </footer>

    <div class="menu-overlay" :class="{ 'is-open': menuOpen }" role="dialog" aria-modal="true" aria-label="Site menu">
      <button type="button" class="menu-close" @click="closeMenu">Close</button>
      <nav class="menu-panel" aria-label="Menu">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
      </nav>
    </div>
  </div>
</template>
