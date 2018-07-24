<template>
  <div class="movie-page">
    <Post :currentMovie="currentMovie"/>

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

    currentMovie () {
      return this.$store.getters.getMovie(this.movieIndex)
    },

    movieIndex () {
      return  this.$store.getters.movies.findIndex(elm => elm.link === this.$nuxt.$route.path)
    }
  },

  beforeMount() {
    this.$store.commit('SET_CURRENT_MOVIE', this.movieIndex)
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
