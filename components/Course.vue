<template>
  <section>
    <div class="type" title="Course">🎓</div>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p>⏳ {{ duration }}</p>
    <p>😀 {{ trainer }}</p>
    <p>{{ details }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    trainer: String,
    trainerWebsite: String,
    details: String,
    duration: String,
    recommendedBy: String
  }
}
</script>
