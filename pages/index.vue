<template>
  <div class="page-container">
    <PostsGrid :posts="posts"/>
  </div>
</template>

<script>
import PostsGrid from '~/components/Home/PostsGrid'

export default {
  data () {
    return {
      posts: [
        { title: 'Inception', year: '2017', thumb: require('@/assets/Nolan/images/inception/thumb.jpg') },
        { title: 'Batman', year: '2008', thumb: require('@/assets/Nolan/images/dark-knight/thumb.jpg') },
        { title: 'Interstellar', year: '2011', thumb: require('@/assets/Nolan/images/interstellar/thumb.jpg') },
        { title: 'Memento', year: '2004', thumb: require('@/assets/Nolan/images/memento/thumb.jpg') },
        { title: 'Dunkirk', year: '2017', thumb: require('@/assets/Nolan/images/dunkirk/thumb.jpg') }
      ]
    }
  },

  components: {
    PostsGrid
  }
}
</script>

<style lang="scss">
.page-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
