<template>
  <section class="gif">
    <div>
      <a name="gif"></a>
      <h2>THE GIF</h2>
      <img :src="link" :alt="alt" />
      <p>Thanks <a href="https://giphy.com/">Giphy</a></p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    link: String,
    alt: String
  }
}
</script>
