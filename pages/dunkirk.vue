<template>
  <div class="movie-page">
    <Post/>

    <RelatedMovies
      class="movie-page__related-movies"
      :movieIndex="movieIndex"
      :movieList="movieList"
    />
  </div>
</template>

<script>
import Post from '@/components/Pages/Post'
import RelatedMovies from '@/components/Pages/RelatedMovies'

export default {
  computed: {
    movieList () {
      return this.$store.getters.movies
    },

    movieIndex () {
      return this.$store.getters.currentMovie !== null ? this.$store.getters.currentMovie : 0
    }
  },

  components: { Post, RelatedMovies }
}
</script>

<style lang="scss">
.movie-page {
  &__related-movies {
    width: var(--site-width);
    max-width: var(--site-max-width);
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: calc(var(--gutter) * 2) auto;
  }
}
</style>
