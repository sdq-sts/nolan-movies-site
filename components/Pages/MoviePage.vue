<template>
  <div class="movie-page">
    <Post :currentMovie="movie"/>

    <RelatedMovies
      class="movie-page__related-movies"
      :movieIndex="movieIndex"
      :movies="movies"
    />
  </div>
</template>

<script>
import Post from './Post'
import RelatedMovies from './RelatedMovies'

export default {
  components: { Post, RelatedMovies },

  props: {
    movieList: {
      type: Array
    },
    movieIndex: {
      type: Number
    },
    movie: {
      type: Object
    }
  },

  computed: {
    // movieIndex () {
    //   return  this.$store.getters.movies.findIndex(elm => elm.link === this.$nuxt.$route.path)
    // },
    movies () {
      return this.movieList.filter((m, i) => i !== this.movieIndex)
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
