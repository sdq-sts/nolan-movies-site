<template>
  <MoviePage ref="pageContainer" :movie="$store.getters.getMovie(3)"/>
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
