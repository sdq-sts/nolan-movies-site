<template>
  <div class="movie-page">
    <article class="post">
      <PostHeader
        class="post__header"
        :title="currentMovie.title"
        :originalTitle="currentMovie.originalTitle"
        :year="currentMovie.year"
        :image="currentMovie.images.postHeader"
      />

      <PostCast
        class="post__cast"
        :castList="currentMovie.cast"
      />

      <div class="post__big-image big-image">
        <img
          class="big-image__img"
          :src="currentMovie.images.postBigImage"
          :alt="currentMovie.title"
        />
      </div>

      <PostAbout
        class="post__about-movie"
        :text="currentMovie.about"
        :firstImage="currentMovie.images.firstAboutImage"
        :secondImage="currentMovie.images.secondAboutImage"
      />

      <PostPlot
        class="post__plot"
        :plot="currentMovie.plot"
        :smallImageSrc="currentMovie.images.plotSmallImg"
        :bigImageSrc="currentMovie.images.plotBigImg"
        :imdbLink="currentMovie.imdbLink"
      />
    </article>

    <RelatedMovies
      class="movie-page__related-movies"
      :movieIndex="movieIndex"
      :movieList="movieList"
    />
  </div>
</template>

<script>
import PostHeader from '@/components/Pages/PostHeader'
import PostCast from '@/components/Pages/PostCast'
import PostAbout from '@/components/Pages/PostAbout'
import PostPlot from '@/components/Pages/PostPlot'
import RelatedMovies from '@/components/Pages/RelatedMovies'

export default {
  computed: {
    movieList () {
      return this.$store.getters.movies
    },

    movieIndex () {
      return this.$store.getters.currentMovie !== null ? this.$store.getters.currentMovie : 0
    },

    currentMovie () {
      return this.$store.getters.getMovie(this.movieIndex)
    }
  },

  components: { PostHeader, PostCast, PostAbout, PostPlot, RelatedMovies }
}
</script>

<style lang="scss">
.movie-page {
  &__related-movies {
    width: var(--site-width);
    max-width: var(--site-max-width);
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: calc(var(--gutter) * 2) auto;
  }
}

.post {
  &__header,
  &__cast,
  &__about-movie,
  &__plot {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: 0 auto;
  }

  &__about-movie,
  &__big-image,
  &__plot {
    margin-top: var(--gutter);
  }
}

.big-image {
  &__img {
    width: 100%;
  }
}
</style>
