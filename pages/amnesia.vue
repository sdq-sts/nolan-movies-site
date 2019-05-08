<template>
  <MoviePage
    :movieList="movieList"
    :movie="getMovie(movieIndex)"
    :movieIndex="movieIndex"
  />
</template>

<script>
import ScrollTrigger from 'scrolltrigger-classes'
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

  data: () => ({
    movieIndex: 0
  }),

  computed: {
    movieList () {
      return this.$store.getters.movies
    },
    getMovie () {
      return this.$store.getters.getMovie
    }
  },

  mounted () {
    const trigger = new ScrollTrigger({
      toggle: {
        visible: 'visible-class',
        hidden: 'hidden-class'
      },
      offset: { x: 0, y: 20 },
      addHeight: true,
      once: false
    }, document.body, window)
  },

  head () {
    return {
      title: 'Amnésia - Nolan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A man with short-term memory loss attempts to track down his wife\'s murderer.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
