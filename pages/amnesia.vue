<template>
  <div class="movie-page">
    <article class="post">
      <PostHeader
        class="post__header"
        :title="currentMovie.title"
        :originalTitle="currentMovie.originalTitle"
        :year="currentMovie.year"
        :image="currentMovie.images.postHeader"
      />
    </article>
  </div>
</template>

<script>
import PostHeader from '@/components/Pages/PostHeader'

export default {
  computed: {
    currentMovie () {
      const movieIndex = this.$store.getters.currentMovie !== null
        ? this.$store.getters.currentMovie
        : 0

      return this.$store.getters.getMovie(movieIndex)
    }
  },

  components: { PostHeader }
}
</script>

<style lang="scss">
.post {
  &__header {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: 0 auto;
  }
}
</style>
