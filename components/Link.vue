<template>
  <section>
    <span class="type" :title="types[type].title">{{ types[type].icon }}</span>
    <h2>{{ title }}</h2>
    <a :href="link">{{ link }}</a>
    <p class="link-stats">
      <span v-if="author"
        >😀 <strong>{{ author }}</strong></span
      >
      <span v-if="duration">⏳ {{ duration }}</span>
      <span>{{ levels[level].icon }} {{ levels[level].title }}</span>
    </p>
    <div v-html="description"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      levels: {
        s: {
          title: 'Light',
          icon: '🌱'
        },
        m: {
          title: 'Medium',
          icon: '🌿'
        },
        l: {
          title: 'Nerd',
          icon: '🌳'
        }
      },
      types: {
        talk: {
          title: 'Talk',
          icon: '📽'
        },
        course: {
          title: 'Course',
          icon: '🎓'
        },
        article: {
          title: 'Article',
          icon: '🗒'
        },
        game: {
          title: 'Game',
          icon: '🎮'
        }
      }
    }
  },
  props: {
    type: String,
    title: String,
    link: String,
    author: String,
    duration: String,
    level: String,
    description: String
  }
}
</script>
