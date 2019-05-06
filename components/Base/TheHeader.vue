<template>
  <div class="site-header">
    <h2 class="site-header__subtitle">
      <span v-for="(word, i) in theSubtitle" :key="i">{{ word }}<br/></span>
    </h2>

    <header class="header">
      <h1 class="header__title" >
        <span
          v-for="(word, i) in theTitle"
          :key="i"
          @click="goToHomePage"
        >{{ word }}<br/></span>
      </h1>

      <TheHeaderMenu
        class="header__menu"
        :menuItems="menuItems"
        :isLoading="isLoading"
      />
    </header>
  </div>
</template>

<script>
import TheHeaderMenu from './TheHeaderMenu'

export default {
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

  methods: {
    goToHomePage () {
      this.$router.push('/')
    }
  },

  components: { TheHeaderMenu }
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

    > span {
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
