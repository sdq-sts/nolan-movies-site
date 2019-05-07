<template>
  <MoviePage :movie="$store.getters.getMovie(4)"/>
</template>

<script>
import ScrollTrigger from 'scrolltrigger-classes'
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

  mounted () {
    const trigger = new ScrollTrigger({
      toggle: {
        visible: 'visible-class',
        hidden: 'hidden-class'
      },
      offset: { x: 0, y: 20 },
      addHeight: false,
      once: false
    }, document.body, window)
  },

  head () {
    return {
      title: 'Interstellar - Nolan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
