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

      <PostCast class="post__cast" :castList="currentMovie.cast"/>

      <div class="post__big-image big-image">
        <img
          class="big-image__img"
          :src="currentMovie.images.postBigImage"
          :alt="currentMovie.title"
        />
      </div>
    </article>
  </div>
</template>

<script>
import PostHeader from '@/components/Pages/PostHeader'
import PostCast from '@/components/Pages/PostCast'

export default {
  computed: {
    currentMovie () {
      const movieIndex = this.$store.getters.currentMovie !== null
        ? this.$store.getters.currentMovie
        : 0

      return this.$store.getters.getMovie(movieIndex)
    }
  },

  components: { PostHeader, PostCast }
}
</script>

<style lang="scss">
.post {
  &__header {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: 0 auto;
  }

  &__cast {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: 0 auto;
  }
}

.big-image {
  margin-top: 4em;

  &__img {
    width: 100%;
  }
}
</style>
