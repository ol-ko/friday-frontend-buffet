<template>
  <div>
    <div class="type" title="Article">🗒</div>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p>⏳ {{ duration }}</p>
    <p v-if="author">😀 {{ author }}</p>
    <p>{{ details }}</p>
  </div>
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
