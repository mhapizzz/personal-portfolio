<script setup>
import { WHATSAPP_URL, EMAIL } from '../data/projects'
</script>

<template>
  <section class="contact-page">
    <h1 class="page-title">Contact</h1>
    <p class="lead">Have a project in mind? Message me on WhatsApp - fastest way to start.</p>

    <div class="actions">
      <a class="btn btn-primary btn-lg" :href="WHATSAPP_URL" target="_blank" rel="noopener">Chat on WhatsApp</a>
    </div>

    <p class="muted email-line">
      Or email
      <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
    </p>
  </section>
</template>
