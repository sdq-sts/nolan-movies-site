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
  font-size: var(--text-font-size);

  &__paragraph {
    margin-bottom: calc(var(--gutter) / 2);
    line-height: var(--text-line-height);
  }
}

.about-imgs {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: var(--gutter);

  &__img {
    width: calc(50% - 1em);

    > img {
      display: block;
      width: 100%;
    }
  }
}

// Media queries

@media all and (max-width: 768px) {
  .about-text {
    flex-wrap: wrap;

    &__section {
      width: 100%;
    }
  }

  .about-imgs {
    flex-wrap: wrap;

    &__img {
      margin-top: var(--gutter);
      width: 100%;
    }
  }
}
</style>
