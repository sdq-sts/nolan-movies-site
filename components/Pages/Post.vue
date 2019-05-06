<template>
  <article class="post">
    <PostHeader
      class="post__header"
      :title="currentMovie.title"
      :originalTitle="currentMovie.originalTitle"
      :year="currentMovie.year"
      :image="((currentMovie || {}).images || {}).postHeader"
    />

    <PostCast
      class="post__cast"
      :castList="currentMovie.cast"
    />

    <div class="post__big-image big-image">
      <img
        class="big-image__img"
        :src="((currentMovie || {}).images || {}).postBigImage"
        :alt="currentMovie.title"
      />
    </div>

    <PostAbout
      class="post__about-movie"
      :text="currentMovie.about"
      :firstImage="((currentMovie || {}).images || {}).firstAboutImage"
      :secondImage="((currentMovie || {}).images || {}).secondAboutImage"
    />

    <PostPlot
      class="post__plot"
      :plot="currentMovie.plot"
      :smallImageSrc="((currentMovie || {}).images || {}).plotSmallImg"
      :bigImageSrc="((currentMovie || {}).images || {}).plotBigImg"
      :imdbLink="currentMovie.imdbLink"
    />
  </article>
</template>

<script>
import PostHeader from '@/components/Pages/PostHeader'
import PostCast from '@/components/Pages/PostCast'
import PostAbout from '@/components/Pages/PostAbout'
import PostPlot from '@/components/Pages/PostPlot'

export default {
  props: {
    currentMovie: {
      type: Object,
      required: true
    }
  },

  components: { PostHeader, PostCast, PostAbout, PostPlot }
}
</script>

<style lang="scss">
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
  &__cast,
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
