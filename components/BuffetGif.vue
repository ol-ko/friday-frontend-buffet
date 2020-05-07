<template>
  <section class="gif">
    <div ref="elementAnchor">
      <a name="gif"></a>
      <h2>THE GIF</h2>
      <img :src="link" :alt="alt" v-if="hasBeenInViewportAtLeastOnce" />
      <h1 v-else="hasBeenInViewportAtLeastOnce">⏳</h1>
      <p>Thanks <a href="https://giphy.com/">Giphy</a></p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    link: String,
    alt: String
  },
  data() {
    return {
      hasBeenInViewportAtLeastOnce: false,
      observer: undefined
    }
  },
  mounted() {
    const element = this.$refs.elementAnchor

    if (
      typeof IntersectionObserver === 'undefined' ||
      !element ||
      this.observer
    ) {
      return
    }

    const callback = (entries) => {
      this.hasBeenInViewportAtLeastOnce = entries[0].isIntersecting
      if (this.hasBeenInViewportAtLeastOnce) {
        this.observer.disconnect()
      }
    }

    this.observer = new IntersectionObserver(callback)

    this.observer.observe(element)
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>
