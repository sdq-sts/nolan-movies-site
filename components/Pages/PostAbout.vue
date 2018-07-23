<template>
  <div class="about-movie">
    <div class="about-movie__text about-text">
      <div
        class="about-text__section text-section"
        v-for="(section, index) in splitSections"
        :key="index"
      >
        <p
          class="text-section__paragraph"
          v-for="(paragraph, i) in splitParagraphs(index)"
          :key="i"
        >{{ paragraph }}</p>
      </div>
    </div>

    <div class="about-movie__imgs about-imgs">
      <div class="about-imgs__img"><img :src="firstImage"></div>

      <div class="about-imgs__img"><img :src="secondImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },

    firstImage: {
      type: String,
      required: true
    },

    secondImage: {
      type: String,
      required: true
    },
  },

  computed: {
    splitSections () {
      return this.text.split('\n\n')
    }
  },

  methods: {
    splitParagraphs (i) {
      return this.splitSections.map(text => text.split('\n'))[i]
    }
  }
}
</script>

<style lang="scss">
.about-movie {
  color: var(--white);
}

.about-text {
  display: flex;
  justify-content: space-between;
  font-family: var(--text-font);

  &__section {
    width: calc(50% - 1em);
    text-align: justify;
  }
}

.text-section {
  &__paragraph {
    margin-bottom: 1.5em;
    line-height: 1.2;
  }
}

.about-imgs {
  display: flex;
  justify-content: space-between;
  margin-top: 3em;

  &__img {
    width: calc(50% - 1em);

    > img {
      display: block;
      width: 100%;
    }
  }
}
</style>
