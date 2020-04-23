<template>
  <div class="gif">
    <div>
      <a name="gif"></a>
      <h2>THE GIF</h2>
      <img :src="link" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    alt: String
  }
}
</script>
