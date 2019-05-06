<template>
  <MoviePage :movie="$store.getters.getMovie(1)"/>
</template>

<script>
import MoviePage from '@/components/Pages/MoviePage'

export default {
  components: { MoviePage },

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
