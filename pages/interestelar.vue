<template>
  <MoviePage :movie="$store.getters.getMovie(4)"/>
</template>

<script>
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

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
