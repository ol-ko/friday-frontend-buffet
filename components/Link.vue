<template>
  <div>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p>{{ details }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    details: String
  }
}
</script>
