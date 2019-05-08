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
    movieIndex: 1
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
      title: 'Cavaleiro das Trevas - Nolan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
