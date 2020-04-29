<template>
  <section class="editions">
    <span>
      <nuxt-link v-if="prev" :to="prev">⏪ Previous edition</nuxt-link>
    </span>
    <span>
      <nuxt-link v-if="next" :to="next">Next edition ⏩</nuxt-link>
    </span>
  </section>
</template>

<script>
export default {
  props: {
    prev: String,
    next: String
  }
}
</script>
