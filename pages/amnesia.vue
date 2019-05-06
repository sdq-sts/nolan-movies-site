<template>
  <MoviePage :movie="$store.getters.getMovie(0)"/>
</template>

<script>
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

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
