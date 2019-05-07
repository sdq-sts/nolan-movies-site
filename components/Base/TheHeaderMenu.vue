<template>
  <div class="site-menu">
    <TheHeaderMenuBtn
      class="site-menu__btn"
      :isMenuOpen="isMenuOpen"
      :isLoading="isLoading"
      @click.native="handleMenuState"
    />

    <nav class="site-menu__navigation site-navigation" v-if="isMenuOpen">
      <ul class="site-navigation__list navigation-list">
        <li
          class="navigation-list__item list-item"
          v-for="(item, i) in menuItems"
          :key="i">
          <a
            class="list-item__link"
            :href="item.link"
            target="_blank">{{ item.name }}
          </a>
          <span class="list-item__line"></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TheHeaderMenuBtn from './TheHeaderMenuBtn'

export default {
  props: {
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

  methods: {
    handleMenuState () {
      this.$emit('handleMenuState')
    }
  },

  components: { TheHeaderMenuBtn }
}
</script>

<style lang="scss">
.site-menu {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;

  &__btn {
    position: relative;
    z-index: 50;
    top: 0;
    right: 0;
  }

  &__navigation {
    display: block;
  }
}

.navigation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: calc(var(--gutter) / 2);
  margin-bottom: calc(var(--gutter) / 2);

  &__link {
    text-decoration: none;
    color: var(--white);
    font-size: calc(var(--text-font-size) * 2);
  }

  &__line {
    background: var(--white);
    height: 1px;
    width: 50px;
    display: block;
    margin-left: calc(var(--gutter) / 2);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 480px) {
  .site-menu {
    display: none;
  }
}
</style>
