<template>
  <div class="posts-grid">
    <PostsGridCard
      class="posts-grid__card"
      v-for="(post, i) in posts" :key="i"
      :post="post"
      :movieIndex="i"
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

  components: { PostsGridCard }
}
</script>

<style lang="scss">
.posts-grid {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: calc(var(--gutter) * 3);

  &__card {
    width: calc(50% - var(--gutter));
    margin-bottom: calc(var(--gutter) * 2);

    &:first-child {
      margin-left: calc(50% + var(--gutter));
    }
  }
}

@media screen and (max-width: 480px) {
  .posts-grid {
    &__card {
      width: 100%;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
