<template>
  <div class="related-movies">
    <h3 class="related-movies__title">{{ componentTitle }}</h3>
    <div
      class="related-movies__movie movie"
      v-for="(movie, i) in movies"
      :key="i"
      @click="goToPage(i)">
      <div class="movie__thumb thumb">
        <img class="thumb__img" :src="movie.thumb" :alt="movie.title">
      </div>
      <p class="movie__title">{{ movie.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentTitle: {
      type: String,
      default: 'Veja Também'
    },

    movieIndex: {
      type: Number,
      required: true
    },

    movieList: {
      type: Array,
      required: true
    }
  },

  computed: {
    movies () {
      return this.movieList.filter((m, i) => i !== this.movieIndex)
    }
  },

  methods: {
    goToPage (i) {
      const clickedMovie = this.movieList.findIndex(elm => elm.link === this.movies[i].link)

      this.$store.commit('SET_CURRENT_MOVIE', clickedMovie)
      this.$router.push(this.movies[i].link)
    }
  }
}
</script>

<style lang="scss">
.related-movies {
  color: var(--white);
  display: flex;
  justify-content: space-between;
  position: relative;

  &__title {
    font-family: var(--main-font);
    font-size: 2em;
    font-weight: normal;
    position: absolute;
    transform: translateX(-100%) translateY(-1.75em) rotate(-90deg);
    transform-origin: bottom right;
    padding-bottom: calc(var(--gutter) / 5);
  }

  &__movie {
    width: calc(25% - #{var(--gutter) / 1.25});

    img {
      width: 100%;
      display: block;
      cursor: pointer;
    }
  }
}

.movie {
  &__title {
    font-family: var(--text-font);
    font-size: 1.2em;
    letter-spacing: 1px;
    margin-top: calc(var(--gutter) / 4);
    text-align: center;
    cursor: pointer;
  }
}
</style>
