<template>
  <div class="site-header">
    <h2 class="site-header__subtitle">
      <span v-for="(word, i) in theSubtitle" :key="i">{{ word }}<br/></span>
    </h2>

    <header class="header">
      <h1 class="header__title">
        <span v-for="(word, i) in theTitle" :key="i">{{ word }}<br/></span>
      </h1>

      <MenuIcon class="header__menu-icon"/>
    </header>
  </div>
</template>

<script>
import MenuIcon from './TheHeaderMenuBtn'

export default {
  props: {
    title: {
      type: Array,
      required: true
    },
    subtitle: {
      type: Array
    }
  },

  computed: {
    theTitle () {
      return this.title
    },

    theSubtitle () {
      return this.subtitle ? this.subtitle : this.title
    }
  },

  components: { MenuIcon }
}
</script>

<style lang="scss">
$white: #fff;
$darkGrey: #121212;

.site-header {
  font-family: 'Bellefair', serif;

  &__subtitle {
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;
    color: $darkGrey;
    font-size: 9em;
    font-weight: normal;
    line-height: 1;
  }
}

.header {
  width: 100%;
  position: relative;

  &__title {
    font-size: 4em;
    font-weight: normal;
    letter-spacing: 5px;
    position: relative;
    line-height: 1;
    color: $white;
    z-index: 50;
    margin: 0;
  }

  &__menu-icon {
    position: absolute;
    z-index: 50;
    top: 0;
    right: 0;
  }
}
</style>
