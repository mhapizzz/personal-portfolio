<script setup>
import { RouterLink } from 'vue-router'
import {
  about,
  CV_FILENAME,
  CV_URL,
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../data/projects'
</script>

<template>
  <section class="about-page">
    <header class="about-hero">
      <p class="about-eyebrow">About</p>
      <h1 class="page-title">{{ about.name }}</h1>
      <p class="about-roles">{{ about.roles.join(' · ') }}</p>
      <p class="about-meta muted">
        <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        <span aria-hidden="true"> · </span>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener">{{ PHONE_DISPLAY }}</a>
      </p>
    </header>

    <section class="about-block">
      <h2 class="about-heading">Profile</h2>
      <p v-for="(para, i) in about.profile" :key="i" class="about-copy">{{ para }}</p>
    </section>

    <section class="about-block">
      <h2 class="about-heading">Skills</h2>
      <div class="skill-columns">
        <div v-for="group in about.skillGroups" :key="group.title" class="skill-col">
          <h3 class="skill-col-title">{{ group.title }}</h3>
          <ul class="skill-items">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <section class="about-block">
      <h2 class="about-heading">Experience</h2>
      <article v-for="job in about.experience" :key="job.company" class="experience-item">
        <div class="experience-head">
          <h3 class="experience-role">{{ job.role }}</h3>
          <p class="experience-period">{{ job.period }}</p>
        </div>
        <p class="experience-company">{{ job.company }}</p>
        <ul class="experience-points">
          <li v-for="point in job.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </section>

    <section class="about-block">
      <h2 class="about-heading">Education</h2>
      <p class="experience-role">{{ about.education.degree }}</p>
      <p class="experience-company">{{ about.education.school }}</p>
      <p class="experience-period">{{ about.education.period }}</p>
    </section> -->

    <section class="about-block">
      <h2 class="about-heading">Stack</h2>
      <dl class="stack-list">
        <div v-for="(value, key) in about.stack" :key="key" class="stack-row">
          <dt>{{ key }}</dt>
          <dd>{{ value }}</dd>
        </div>
      </dl>
    </section>

    <div class="about-cta actions">
      <a class="btn btn-primary" :href="WHATSAPP_URL" target="_blank" rel="noopener">Chat on WhatsApp</a>
      <a class="btn btn-ghost" :href="CV_URL" :download="CV_FILENAME">Download CV</a>
      <RouterLink class="btn btn-ghost" to="/projects">See projects</RouterLink>
    </div>
  </section>
</template>
