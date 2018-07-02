<template>
  <div class="grid-card">
    <div class="grid-card__thumb">
      <img :src="post.thumb" :alt="post.title">
    </div>

    <div class="grid-card__meta meta">
      <h2 class="meta__title">{{ post.title }}</h2>
      <span class="meta__year">{{ post.year }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.grid-card {
  position: relative;

  &__thumb {
    width: 80%;
    margin-left: auto;

    img {
      width: 100%;
      display: block;
    }
  }

  &__meta {
    position: absolute;
    bottom: 0;
    left: 4em;
  }
}

.meta {
  &__title {
    font-family: var(--main-font);
    font-size: 2.5em;
    letter-spacing: 1px;
    font-weight: normal;
    color: var(--text-color);
  }

  &__year {
    font-family: var(--text-font);
    display: block;
    letter-spacing: 1px;
    font-size: .65em;
    padding-left: 3px;
    color: var(--gray);
  }
}
</style>
