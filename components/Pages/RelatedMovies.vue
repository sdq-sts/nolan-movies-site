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
    font-size: 2vw;
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
    font-size: var(--text-font-size);
    letter-spacing: 1px;
    margin-top: calc(var(--gutter) / 4);
    text-align: center;
    cursor: pointer;
  }
}

// Media queries
@media all and (max-width: 960px) {
  .related-movies {
    &__title {
      transform: translateX(-100%) translateY(-1.25em) rotate(-90deg);
      padding-bottom: calc(var(--gutter) / 10);
    }
  }
}

@media all and (max-width: 768px) {
  .related-movies {
    &__title {
      display: none;
    }
  }
}

@media all and (max-width: 480px) {
  .related-movies {
    flex-wrap: wrap;

    &__movie {
      width: calc(50% - #{var(--gutter) / 1.25});
      margin-bottom: var(--gutter);
    }
  }
}
</style>
