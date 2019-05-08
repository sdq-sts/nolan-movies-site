<template>
  <div class="page-container home">
    <PostsGrid
      class="home__posts-grid"
      :posts="movies"
    />

    <AuthorBio
      class="home__author-bio"
      :authorName="authorName"
      :images="authorImages"
      :bio="authorBio"
    />
  </div>
</template>

<script>
import ScrollTrigger from 'scrolltrigger-classes'
import PostsGrid from '~/components/Home/PostsGrid'
import AuthorBio from '~/components/Home/AuthorBio'

export default {
  components: { PostsGrid, AuthorBio },

  computed: {
    authorName () {
      return this.$store.getters.authorName
    },

    authorBio () {
      return this.$store.getters.authorBio
    },

    authorImages () {
      return this.$store.getters.authorImages
    },

    movies () {
      return this.$store.getters.movies
    }
  },

  mounted () {
    const trigger = new ScrollTrigger({
      toggle: {
        visible: 'visible-class',
        hidden: 'hidden-class'
      },
      offset: { x: 0, y: 20 },
      addHeight: true,
      once: false
    }, document.body, window)
  },

  head () {
    return {
      title: 'The dream is real.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Uma pequena seleção dos meus filmes favoritos do Christopher Nolan.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-container {
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.home {
  &__posts-grid {
    width: var(--site-width);
    max-width: var(--site-max-width);
  }

  &__author-bio {
    margin-top: calc(var(--gutter) * 2);
    margin-bottom: calc(var(--gutter) * 2);
  }
}
</style>
