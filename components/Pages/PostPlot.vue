<template>
  <div class="post-plot">
    <div class="post-plot__first-section first-section">
      <div class="first-section__header section-header">
        <span class="section-header__line" aria-hidden="true" data-scroll="offset(0, 100px)"></span>
        <h2 class="section-header__title" data-scroll="offset(0, 100px)">{{ plotTitle }}</h2>
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
      <span class="imdb__line" aria-hidden="true"></span>
      <a class="imdb__link" :href="imdbLink" target="_blank">{{ imdbLinkText }}</a>
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

    plotTitle: {
      type: String,
      default: 'Enredo'
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
    },

    imdbLinkText: {
      type: String,
      default: 'Ver filme no IMDB'
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

    &.hidden-class {
      transition: all 0s ease-in-out;
      width: 0;
    }

    &.visible-class {
      transition: all .5s ease;
      width: 100px;
    }
  }

  &__title {
    font-family: var(--main-font);
    font-weight: normal;
    font-size: calc(var(--text-font-size) * 3);

    &.hidden-class {
      transition: all 0s ease-in-out;
      transform: translateX(-20px);
      opacity: 0;
    }

    &.visible-class {
      transition: all .5s ease-in-out;
      transition-delay: .15s;
      transform: translateX(0px);
      opacity: 1;
    }
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
      font-size: var(--text-font-size);
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
      font-size: var(--text-font-size);
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
    font-size: calc(var(--text-font-size) * 2);
    text-decoration: none;
    color: var(--white);
  }
}

// Media queries
@media all and (max-width: 768px) {
  .first-section,
  .second-section {
    width: 100%;
  }
}

@media all and (max-width: 480px) {
  .section-header {
    &__title {
      font-size: calc(var(--text-font-size) * 2.5);
    }
  }

  .imdb {
    &__link {
      font-size: calc(var(--text-font-size) * 1.5);
    }
  }
}
</style>
