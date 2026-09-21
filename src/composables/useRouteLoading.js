import { ref, watch, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const MIN_HOLD_MS = 220
const MAX_HOLD_MS = 700
const REDUCED_MAX_MS = 120

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function decodeImage(img) {
  if (img.complete && img.naturalWidth > 0) {
    return Promise.resolve()
  }
  if (typeof img.decode === 'function') {
    return img.decode().catch(() => {
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', resolve, { once: true })
      })
    })
  }
  return new Promise((resolve) => {
    img.addEventListener('load', resolve, { once: true })
    img.addEventListener('error', resolve, { once: true })
  })
}

async function waitForImages(root) {
  if (!root) return
  const images = Array.from(root.querySelectorAll('img'))
  if (!images.length) return

  await Promise.all(
    images.map((img) => Promise.race([decodeImage(img), wait(MAX_HOLD_MS)])),
  )
}

export function useRouteLoading(mainRef) {
  const route = useRoute()
  const loading = ref(true)
  let generation = 0

  async function settle(path) {
    generation += 1
    const current = generation
    loading.value = true

    const reduced = prefersReducedMotion()
    const minHold = reduced ? 0 : MIN_HOLD_MS
    const maxHold = reduced ? REDUCED_MAX_MS : MAX_HOLD_MS
    const hardDeadline = maxHold + 80

    const work = (async () => {
      await nextTick()
      await nextTick()

      if (current !== generation || route.fullPath !== path) return

      const root = mainRef?.value || null
      try {
        await Promise.race([
          Promise.all([waitForImages(root), wait(minHold)]),
          wait(maxHold),
        ])
      } catch {
        // ignore
      }
    })()

    await Promise.race([work, wait(hardDeadline)])

    if (current !== generation || route.fullPath !== path) return
    loading.value = false
  }

  watch(
    () => route.fullPath,
    (path) => {
      settle(path)
    },
    { immediate: true },
  )

  onUnmounted(() => {
    generation += 1
  })

  return { loading }
}
