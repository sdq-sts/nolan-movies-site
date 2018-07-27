<template>
  <div class="grid-card">
    <div class="grid-card__thumb" @click="showPost">
      <img :src="post.thumb" :alt="post.title">
    </div>

    <div class="grid-card__meta meta" @click="showPost">
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
    },

    movieIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    showPost () {
      const route = this.post.link

      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss">
.grid-card {
  position: relative;

  &__thumb {
    width: 100%;
    margin-left: auto;

    img {
      width: 100%;
      display: block;
      cursor: pointer;
    }
  }

  &__meta {
    position: absolute;
    bottom: 0;
    margin-left: calc(var(--gutter) * -1);
  }
}

.meta {
  &__title {
    font-family: var(--main-font);
    font-size: 2.5em;
    letter-spacing: 1px;
    font-weight: normal;
    color: var(--text-color);
    cursor: pointer;
  }

  &__year {
    font-family: var(--text-font);
    display: block;
    letter-spacing: 1px;
    font-size: .75em;
    padding-left: 3px;
    color: var(--gray);
  }
}

@media screen and (max-width: 768px) {
.meta {
  &__title {
    font-size: 2em;
  }

  &__year {
    font-size: .65em;
  }
}
}

@media screen and (max-width: 480px) {
  .grid-card {
    &__meta {
      position: absolute;
      bottom: 0;
      margin-left: calc(var(--gutter) * -2);
    }
  }
}
</style>
