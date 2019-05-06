<template>
  <MoviePage :movie="$store.getters.getMovie(2)"/>
</template>

<script>
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

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
