<template>
  <section>
    <div class="type" title="Article">🗒</div>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p>⏳ {{ duration }}</p>
    <p>{{ details }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    details: String,
    duration: String
  }
}
</script>
