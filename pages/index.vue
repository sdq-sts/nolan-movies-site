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
import PostsGrid from '~/components/Home/PostsGrid'
import AuthorBio from '~/components/Home/AuthorBio'

export default {
  data () {
    return {

    }
  },

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

  components: {
    PostsGrid,
    AuthorBio
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
  &__author-bio {
    margin-bottom: 5em;
  }
}
</style>
