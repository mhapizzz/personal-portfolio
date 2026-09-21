<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
</script>

<template>
  <section class="projects-page">
    <header class="projects-intro">
      <p class="projects-eyebrow">Projects</p>
      <h1 class="projects-heading">Latest Project</h1>
    </header>

    <div class="project-grid">
      <RouterLink
        v-for="(project, i) in projects"
        :key="project.slug"
        class="project-card"
        :style="{ '--card-i': i }"
        :to="`/projects/${project.slug}`"
      >
        <div class="project-card-copy">
          <h2 class="project-card-category">{{ project.category }}</h2>
          <p class="project-card-blurb">{{ project.blurb }}</p>
        </div>
        <div class="project-card-media">
          <img :src="project.cover" :alt="project.title" width="560" height="420" />
        </div>
      </RouterLink>
    </div>
  </section>
</template>
