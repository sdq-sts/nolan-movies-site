<template>
  <div class="site-header">
    <h2 class="site-header__subtitle subtitle">
      <span
        v-for="(word, i) in theSubtitle"
        :key="i"
        :class="{ 'subtitle__line': true , 'show': !isLoading }"
        :style="customStyle(i)"
      >{{ word }}<br/></span>
    </h2>

    <header class="header">
      <h1 class="header__title title">
        <span
          v-for="(word, i) in theTitle"
          :key="i"
          :class="{ 'title__line': true , 'show': !isLoading }"
          :style="customStyle(i)"
          v-on="{ transitionend: handleTransitionEnd(i) }"
        ><a @click="goToHomePage">{{ word }}</a><br/></span>
      </h1>

      <TheHeaderMenu
        class="header__menu"
        :menuItems="menuItems"
        :isMenuOpen="isMenuOpen"
        :isLoading="isLoading"
        :animateMenu="animateMenu"
        @handleMenuState="handleMenuState"
      />
    </header>
  </div>
</template>

<script>
import TheHeaderMenu from './TheHeaderMenu'

export default {
  components: { TheHeaderMenu },

  props: {
    title: {
      type: Array,
      required: true
    },
    subtitle: {
      type: Array,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    isMenuOpen: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    animateMenu: false
  }),

  computed: {
    theTitle () {
      return this.title
    },
    theSubtitle () {
      return this.subtitle ? this.subtitle : this.title
    },

  },

  methods: {
    handleMenuState () {
      this.$emit('handleMenuState', !this.isMenuOpen)
    },
    goToHomePage () {
      this.$router.push('/')
    },
    handleTransitionEnd (i) {
      return i === (this.theTitle.length - 1)
        ? this.listenTransitionEnd
        : () => {}
    },
    customStyle (i) {
      return { 'transition-delay': `${(i * 0.01) * 30}s` }
    },
    listenTransitionEnd () {
      this.animateMenu = true
    }
  }
}
</script>

<style lang="scss">
.site-header {
  font-family: var(--main-font);

  &__subtitle {
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;
    color: var(--dark-gray);
    font-size: 14vw;
    font-weight: normal;
    line-height: .8;
    letter-spacing: 5px;
    margin-top: 20px;
  }
}

.header {
  width: 100%;
  position: relative;

  &__title {
    font-size: 6vw;
    font-weight: normal;
    letter-spacing: 4px;
    position: relative;
    line-height: .9;
    color: var(--white);
    z-index: 50;
    margin: 0;

    a {
      cursor: pointer;
    }
  }

  &__menu {
    position: absolute;
    z-index: 50;
    top: 0;
    right: 0;
  }
}

.title {
  &__line {
    display: block;
    transition: all 0s ease-in-out;
    transform: translateY(20px);
    opacity: 0;

    &.show {
      transition: all 1s ease-in-out;
      transform: translateY(0px);
      opacity: 1;
    }
  }
}

.subtitle {
  &__line {
    display: block;
    transition: all 0s ease-in-out;
    transform: translateX(80px);
    opacity: 0;

    &.show {
      transition: all 1s ease-in-out;
      transform: translateX(0px);
      opacity: 1;
    }
  }
}

// Media queries
@media screen and (max-width: 960px) {
  .header {
    &__title {
      font-size: 8vw;
    }
  }
}

@media screen and (max-width: 480px) {
  .site-header {
    &__subtitle {
      font-size: 24vw;
    }
  }

  .header {
    &__title {
      font-size: 14vw;
    }
  }
}
</style>
