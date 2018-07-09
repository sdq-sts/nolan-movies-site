<template>
  <div class="author-bio">
    <h2 class="author-bio__title">{{ authorName }}</h2>

    <div class="author-bio__details details">
      <div class="details__gallery bio-gallery">
        <div class="bio-gallery__main">
          <img :src="images[0]" :alt="authorName">
        </div>
        <div class="bio-gallery__side gallery-sidebar">
          <p class="gallery-sidebar__title">{{ title }}</p>
          <div class="gallery-sidebar__img"> <img :src="images[1]" :alt="authorName"> </div>
          <div class="gallery-sidebar__img"> <img :src="images[2]" :alt="authorName"> </div>
          <div class="gallery-sidebar__img"> <img :src="images[3]" :alt="authorName"> </div>
        </div>
      </div>

      <div class="details__text bio-text">
        <h3 class="bio-text__title">{{ authorName }}</h3>
        <div class="bio-text__text">
          <p v-for="(paragraph, i) in fmtdBio" :key="i">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Biografia'
    },

    authorName: {
      type: String,
      required: true
    },

    images: {
      type: Array,
      required: true
    },

    bio: {
      type: String,
      required: true
    }
  },

  computed: {
    fmtdBio () {
      return this.bio.split('\n\n')
    }
  }
}
</script>

<style lang="scss">
.author-bio {
  position: relative;

  &__title {
    position: absolute;
    top: 0;
    font-family: var(--main-font);
    font-size: 10em;
    font-weight: normal;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    user-select: none;
    z-index: -5;
    color: var(--dark-gray);
  }

  img {
    width: 100%;
  }
}

.details {
  width: var(--site-width);
  margin: 0 auto;
  display: flex;
  align-items: flex-start;

  &__gallery,
  &__text {
    width: 50%;

    p {
      font-size: 1em;
    }

    img {
      max-width: 100%;
      display: block;
    }
  }
}

.bio-gallery {
  display: flex;

  &__main {
    width: 78%;
  }

  &__side {
    margin-left: .5em;
    width: 22%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.gallery-sidebar {
  &__title {
    font-family: var(--main-font);
    font-size: 1.2em;
    color: var(--white);
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 1px;
    transform: rotate(90deg) translateX(-1.2em);
    transform-origin: left bottom;
  }

  &__img {
    margin-top: .5em;
  }
}

.bio-text {
  &__title {
    color: var(--white);
    font-family: var(--main-font);
    font-weight: normal;
    font-size: 3em;
  }

  &__text {
    color: var(--white);
    margin-left: 20%;
    margin-top: 3em;
    line-height: 1.5em;
    font-size: .8em;

    > p {
      margin-bottom: 3em;
    }
  }
}
</style>
