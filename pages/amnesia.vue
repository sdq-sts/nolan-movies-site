<template>
  <MoviePage :movie="$store.getters.getMovie(0)"/>
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
