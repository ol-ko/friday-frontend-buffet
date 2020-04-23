<template>
  <section>
    <span class="type" title="Talk">📽</span>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p>⏳ {{ duration }}</p>
    <p>😀 {{ speaker }}</p>
    <p>{{ topic }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    speaker: String,
    topic: String,
    tip: String,
    duration: String
  }
}
</script>
