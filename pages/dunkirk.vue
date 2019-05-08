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
    movieIndex: 2
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
      title: 'Dunkirk - Nolan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
