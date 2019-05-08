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
    movieIndex: 3
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
      title: 'A Origem - Nolan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
