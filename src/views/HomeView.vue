<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { about } from "../data/projects";

const PHRASES = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 2200;
const GAP_MS = 400;
const START_DELAY_MS = 1000;

const typed = ref("");
const isHolding = ref(false);
const reduceMotion = ref(false);

let phraseIndex = 0;
let charIndex = 0;
let timerId = null;
let cancelled = false;

function wait(ms) {
  return new Promise((resolve) => {
    timerId = setTimeout(resolve, ms);
  });
}

async function runTypewriter() {
  while (!cancelled) {
    const phrase = PHRASES[phraseIndex];

    isHolding.value = false;
    while (charIndex < phrase.length && !cancelled) {
      charIndex += 1;
      typed.value = phrase.slice(0, charIndex);
      await wait(TYPE_MS);
    }

    if (cancelled) return;

    isHolding.value = true;
    await wait(HOLD_MS);
    if (cancelled) return;

    isHolding.value = false;
    while (charIndex > 0 && !cancelled) {
      charIndex -= 1;
      typed.value = phrase.slice(0, charIndex);
      await wait(DELETE_MS);
    }

    if (cancelled) return;

    await wait(GAP_MS);
    phraseIndex = (phraseIndex + 1) % PHRASES.length;
  }
}

onMounted(() => {
  reduceMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion.value) {
    typed.value = PHRASES[0];
    return;
  }

  wait(START_DELAY_MS).then(() => {
    if (!cancelled) runTypewriter();
  });
});

onUnmounted(() => {
  cancelled = true;
  if (timerId != null) clearTimeout(timerId);
});
</script>

<template>
  <section class="poster">
    <div class="poster-bg-glyphs" aria-hidden="true">
      <span class="g-y">Y</span>
      <span class="g-p">P</span>
    </div>

    <div class="poster-stage">
      <span class="poster-num">02</span>
      <div class="poster-frame">
        <img
          src="/images/poster-hero.jpg"
          alt="Moody twilight plaza with bicycles"
          width="800"
          height="800"
        />
      </div>
    </div>

    <div class="poster-heading">
      <p class="poster-name">{{ about.name }}</p>
      <h1 class="poster-title">
        <span class="sr-only">
          Fullstack Developer, Frontend Developer, and Backend Developer
        </span>
        <span class="poster-title-sizer" aria-hidden="true">Fullstack Developer</span>
        <span class="poster-title-typed" aria-hidden="true">
          {{ typed }}<span
            v-if="!reduceMotion"
            class="poster-caret"
            :class="{ 'is-holding': isHolding }"
          ></span>
        </span>
      </h1>
    </div>

    <p class="poster-meta">
      Software Developer<br />
      2026
    </p>
  </section>
</template>
