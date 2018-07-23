<template>
  <div class="post-plot">
    <div class="post-plot__first-section first-section">
      <div class="first-section__header section-header">
        <span class="section-header__line" aria-hidden="true"></span>
        <h2 class="section-header__title">Enredo</h2>
      </div>

      <div class="first-section__text">
        <p v-for="(paragraphs, i) in firstSectionText" :key="i">{{ paragraphs }}</p>
      </div>
    </div>

    <div class="post-plot__second-section second-section">
      <div class="second-section__header section-header">
        <img class="section-header__img" :src="smallImageSrc">
      </div>

      <div class="second-section__text">
        <p v-for="(paragraphs, i) in secondSectionText" :key="i">{{ paragraphs }}</p>
      </div>
    </div>

    <div class="post-plot__big-img big-img">
      <img :src="bigImageSrc">
    </div>

    <div class="post-plot__imdb imdb">
      <span class="imdb__line"></span>
      <a class="imdb__link" :href="imdbLink" target="_blank">Ver filme no IMDB</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plot: {
      type: String,
      required: true
    },

    smallImageSrc: {
      type: String,
      required: true
    },

    bigImageSrc: {
      type: String,
      required: true
    },

    imdbLink: {
      type: String,
      required: true
    }
  },

  computed: {
    splitSectionText () {
      return this.plot.split('\n\n')
    },

    firstSectionText () {
      return this.splitSectionText[0].split('\n')
    },

    secondSectionText () {
      return this.splitSectionText[1].split('\n')
    }
  }
}
</script>

<style lang="scss">
.post-plot {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--white);
  font-family: var(--text-font);
  line-height: var(--text-line-height);
}

.section-header {
  &__line {
    height: 1px;
    width: 100px;
    margin-right: calc(var(--gutter) / 2);
    background: var(--white);
  }

  &__title {
    font-family: var(--main-font);
    font-weight: normal;
    font-size: 3em;
  }
}

.first-section {
  width: calc(30% - calc(var(--gutter) / 2));
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: var(--gutter) 0;
  }

  &__text {
    width: 100%;
    text-align: justify;

    > p {
      margin-bottom: calc(var(--gutter) / 2);
    }
  }
}

.second-section {
  width: calc(70% - 1.5em);

  &__header {
    padding: 0;
    margin-bottom: var(--gutter);

    > img {
      width: 100%;
      display: block;
    }
  }

  &__text {
    width: 100%;
    text-align: justify;

    > p {
      margin-bottom: calc(var(--gutter) / 2);
    }
  }
}

.big-img {
  width: 100%;
  margin-top: calc(var(--gutter) / 2);

  > img {
    display: block;
    width: 100%;
  }
}

.imdb {
  display: flex;
  align-items: center;
  margin-top: var(--gutter);

  &__line {
    height: 1px;
    display: block;
    width: 100px;
    margin-right: calc(var(--gutter) / 2);
    background: var(--white);
  }

  &__link {
    font-family: var(--main-font);
    font-size: 2.5em;
    text-decoration: none;
    color: var(--white);
  }
}
</style>
