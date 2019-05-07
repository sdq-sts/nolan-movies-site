<template>
  <MoviePage :movie="$store.getters.getMovie(2)"/>
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
