<template>
  <div v-if="edition">
    <Link
      v-for="link in edition.links"
      :key="link.title"
      :type="link.type"
      :level="link.level"
      :title="link.title"
      :link="link.link"
      :author="link.author"
      :duration="link.duration"
      :description="link.description"
    >
    </Link>

    <BuffetGif
      :link="edition.gif"
      alt="Nomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnom"
    ></BuffetGif>

    <EditionsNav :prev="prev" :next="next"></EditionsNav>
  </div>
</template>

<script>
import Link from '@/components/Link.vue'
import BuffetGif from '@/components/BuffetGif.vue'
import EditionsNav from '@/components/EditionsNav.vue'

import editions from '@/data/editions.js'

export default {
  data() {
    return {
      editions,
      currentDate: undefined
    }
  },
  components: {
    Link,
    BuffetGif,
    EditionsNav
  },
  created() {
    this.currentDate = this.$route.params.date
  },
  computed: {
    edition() {
      return editions.find((edition) => this.isCurrentEdition(edition))
    },
    currentEditionIndex() {
      return editions.findIndex((edition) => this.isCurrentEdition(edition))
    },
    next() {
      const index = this.currentEditionIndex - 1
      return index < 0 ? undefined : `/${editions[index].date}`
    },
    prev() {
      const index = this.currentEditionIndex + 1
      return index >= editions.length ? undefined : `/${editions[index].date}`
    }
  },
  methods: {
    isCurrentEdition(edition) {
      return edition.date === this.currentDate
    }
  },
  watch: {
    $route(to) {
      this.currentDate = to.params.date
    }
  }
}
</script>
