<template>
  <header class="post-header">
    <div class="post-header__main post-main">
      <h2 class="post-main__title">{{ title }}</h2>
      <div class="post-main__image">
        <img :src="image" :alt="title">
      </div>
    </div>

    <div class="post-header__meta">
      <h3>({{ originalTitle }}, {{ year }})</h3>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    originalTitle: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss">
.post-header {
  &__meta {
    padding-left: 20%;
    margin-top: .75em;

    > h3 {
    font-family: var(--main-font);
    letter-spacing: 1px;
    font-size: 1.5em;
    color: var(--gray);
    font-weight: normal;
    }
  }
}

.post-main {
  display: flex;

  &__title {
    color: var(--white);
    width: 30%;
    align-self: flex-end;
    text-align: right;
    transform: translateY(20%);
    margin-right: 1em;
    line-height: 1;
    font-family: var(--main-font);
    letter-spacing: 2px;
    font-size: 4em;
    font-weight: normal;
  }

  &__image {
    width: 70%;

    > img {
      width: 100%;
      display: block;
    }
  }
}
</style>
