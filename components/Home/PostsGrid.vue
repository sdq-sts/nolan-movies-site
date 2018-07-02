<template>
  <div class="posts-grid">
    <PostsGridCard
      class="posts-grid__card"
      v-for="(post, i) in posts" :key="i"
      :post="post"
    />
  </div>
</template>

<script>
import PostsGridCard from './PostsGridCard'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  components: {
    PostsGridCard
  }
}
</script>

<style lang="scss">
.posts-grid {
  width: var(--site-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5%;

  &__card {
    width: 50%;
    margin-bottom: 3em;

    &:first-child {
      margin-left: 50%;
    }
  }
}
</style>
