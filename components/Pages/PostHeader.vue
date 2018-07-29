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
    padding-left: calc(var(--gutter) * 3);
    margin-top: .75em;

    > h3 {
      font-family: var(--main-font);
      letter-spacing: 1px;
      font-size: calc(var(--text-font-size) * 1.5);
      color: var(--gray);
      font-weight: normal;
    }
  }
}

.post-main {
  display: flex;

  &__title {
    color: var(--white);
    width: 40%;
    align-self: flex-end;
    text-align: right;
    transform: translateY(20%);
    margin-right: calc(var(--gutter) / 3);
    line-height: 1;
    font-family: var(--main-font);
    letter-spacing: 2px;
    font-size: 5vw;
    font-weight: normal;
  }

  &__image {
    width: 60%;

    > img {
      width: 100%;
      display: block;
    }
  }
}

// Media queries
@media all and (max-width: 480px) {
  .post-main {
    &__title {
      width: 30%;
      font-size: 7vw;
    }

    &__image {
      width: 70%;
    }
  }

  .post-header {
    &__meta {
      > h3 {
        font-size: calc(var(--text-font-size) * 1);
      }
    }
  }
}
</style>
