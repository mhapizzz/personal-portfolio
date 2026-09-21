<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => route.name || 'home')
</script>

<template>
  <div class="page-skeleton" :class="`sk-layout-${layout}`" aria-hidden="true">
    <!-- Home: poster -->
    <div v-if="layout === 'home'" class="sk-home">
      <div class="sk-home-stage">
        <div class="sk-bone sk-home-frame"></div>
      </div>
      <div class="sk-home-heading">
        <div class="sk-bone sk-home-name"></div>
        <div class="sk-bone sk-home-title"></div>
      </div>
      <div class="sk-bone sk-home-meta"></div>
    </div>

    <!-- Projects index -->
    <div v-else-if="layout === 'projects'" class="sk-projects">
      <div class="sk-projects-intro">
        <div class="sk-bone sk-eyebrow"></div>
        <div class="sk-bone sk-heading"></div>
      </div>
      <div class="sk-project-grid">
        <div v-for="n in 6" :key="n" class="sk-project-card">
          <div class="sk-project-card-copy">
            <div class="sk-bone sk-card-cat"></div>
            <div class="sk-bone sk-card-blurb"></div>
            <div class="sk-bone sk-card-blurb sk-card-blurb-short"></div>
          </div>
          <div class="sk-bone sk-card-media"></div>
        </div>
      </div>
    </div>

    <!-- Project detail -->
    <div v-else-if="layout === 'project-detail'" class="sk-detail">
      <div class="sk-bone sk-back"></div>
      <div class="sk-bone sk-detail-title"></div>
      <div class="sk-bone sk-detail-lead"></div>
      <div class="sk-bone sk-detail-lead sk-detail-lead-short"></div>
      <div class="sk-bone sk-detail-cover"></div>
      <div class="sk-stills">
        <div v-for="n in 3" :key="n" class="sk-bone sk-still"></div>
      </div>
      <div class="sk-bone sk-cta"></div>
    </div>

    <!-- About -->
    <div v-else-if="layout === 'about'" class="sk-about">
      <div class="sk-about-hero">
        <div class="sk-bone sk-eyebrow"></div>
        <div class="sk-bone sk-about-title"></div>
        <div class="sk-bone sk-about-roles"></div>
        <div class="sk-bone sk-about-meta"></div>
      </div>
      <div class="sk-about-block">
        <div class="sk-bone sk-block-heading"></div>
        <div class="sk-bone sk-copy"></div>
        <div class="sk-bone sk-copy"></div>
        <div class="sk-bone sk-copy sk-copy-short"></div>
      </div>
      <div class="sk-about-block">
        <div class="sk-bone sk-block-heading"></div>
        <div class="sk-skill-cols">
          <div v-for="n in 3" :key="n" class="sk-skill-col">
            <div class="sk-bone sk-skill-title"></div>
            <div class="sk-bone sk-skill-item"></div>
            <div class="sk-bone sk-skill-item"></div>
            <div class="sk-bone sk-skill-item"></div>
          </div>
        </div>
      </div>
      <div class="sk-about-block">
        <div class="sk-bone sk-block-heading"></div>
        <div v-for="n in 4" :key="n" class="sk-stack-row">
          <div class="sk-bone sk-stack-dt"></div>
          <div class="sk-bone sk-stack-dd"></div>
        </div>
      </div>
      <div class="sk-about-cta">
        <div class="sk-bone sk-cta"></div>
        <div class="sk-bone sk-cta sk-cta-ghost"></div>
        <div class="sk-bone sk-cta sk-cta-ghost"></div>
      </div>
    </div>

    <!-- Contact -->
    <div v-else class="sk-contact">
      <div class="sk-bone sk-contact-title"></div>
      <div class="sk-bone sk-contact-lead"></div>
      <div class="sk-bone sk-contact-lead sk-contact-lead-short"></div>
      <div class="sk-bone sk-cta sk-cta-lg"></div>
      <div class="sk-bone sk-contact-email"></div>
    </div>
  </div>
</template>
