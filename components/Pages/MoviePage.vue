<template>
  <div class="movie-page">
    <Post :currentMovie="movie"/>

    <RelatedMovies
      class="movie-page__related-movies"
      :movieIndex="movieIndex"
      :movieList="movieList"
    />
  </div>
</template>

<script>
import Post from './Post'
import RelatedMovies from './RelatedMovies'

export default {
  components: { Post, RelatedMovies },

  props: {
    movie: {
      type: Object
    }
  },

  computed: {
    movieList () {
      return this.$store.getters.movies
    },

    movieIndex () {
      return  this.$store.getters.movies.findIndex(elm => elm.link === this.$nuxt.$route.path)
    }
  }
}
</script>

<style lang="scss">
.movie-page {
  &__related-movies {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: calc(var(--gutter) * 3) auto 0;
  }
}
</style>
