<template>
  <div class="site container" ref="siteContainer">
    <Loading ref="loading"/>

    <TheHeader
      class="site__header"
      :title="siteTitle"
      :subtitle="siteSubtitle"
      :menuItems="menuItems"
      :isLoading="isLoading"
      :isMenuOpen="isMenuOpen"
      @handleMenuState="handleMenuState"
    />

    <div class="site__page page">
      <TheSocialIcons
        :class="{ 'page__social-icons': true, 'movie-page': !isHomePage }"
        :description="siteDescription"
        :facebook="social.facebook"
        :instagram="social.instagram"
        :twitter="social.twitter"
        :pinterest="social.pinterest"
        :email="social.email"
      />

      <transition name="fade">
        <nuxt/>
      </transition>
    </div>

    <TheFooter
      class="site__footer"
      toTopMsg="voltar para o topo"
      :footerMsg="siteSubtitle.join(' ')"
    />
  </div>
</template>

<script>
import ScrollTrigger from 'scrolltrigger-classes'
import TheHeader from '~/components/Base/TheHeader'
import TheSocialIcons from '~/components/Base/TheSocialIcons'
import TheFooter from '~/components/Base/TheFooter'
import Loading from '~/components/Base/Loading'
import imagesLoaded from 'imagesloaded'

export default {
  computed: {
    siteTitle () {
      return this.$store.getters.siteTitle
    },

    siteSubtitle () {
      return this.$store.getters.siteSubtitle
    },

    siteDescription () {
      return this.$store.getters.siteDescription
    },

    isMenuOpen () {
      return this.$store.getters.isMenuOpen
    },

    menuItems () {
      return this.$store.getters.siteMenu
    },

    social () {
      return this.$store.getters.socialLinks
    },

    isHomePage () {
      return this.$nuxt.$route.path === '/'
    },

    isLoading () {
      return this.$store.getters.isLoading
    }
  },

  methods: {
    handleMenuState (e) {
      this.$store.commit('IS_MENU_OPEN', e)
    }
  },

  mounted () {
    imagesLoaded(this.$refs.siteContainer, (instance) => {
      const htmlElement = document.querySelector('html')

      this.$store.commit('SET_IS_LOADING', false)
      htmlElement.style.position = 'relative'
    })
  },

  components: {
    TheHeader,
    TheSocialIcons,
    TheFooter,
    Loading
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Barlow', sans-serif;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  transform: translate3d(0,0,0);
  box-sizing: border-box;
  background: var(--main-bg-color);
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.site {
  &__header {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: calc(var(--gutter) * 3) auto 0;
  }

  &__page {
    position: relative;
  }

  &__footer {
    width: var(--site-width);
    max-width: var(--site-max-width);
    margin: 8em auto 4em;
  }
}

.page {
  &__social-icons {
    width: calc(var(--site-width) / 2);
    max-width: calc(var(--site-max-width) / 2);
    position: absolute;
    right: 50%;
    top: calc(var(--gutter) / 2);
    z-index: 50;
  }
}

// Media queries
@media screen and (max-width: 960px) {
  .site{
    &__header {
      margin: calc(var(--gutter) * 2) auto 0;
    }
  }
}

@media screen and (max-width: 580px) {
  .site{
    &__header {
      margin: calc(var(--gutter) * 2) auto 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .site {
    &__header {
      margin: calc(var(--gutter) * 3) auto 0;
    }
  }

  .page {
    margin-top: calc(var(--gutter) * 2);

    &__social-icons {
      width: var(--site-width);
      max-width: calc(var(--site-max-width) / 2);
      position: relative;
      right: 0;
      margin: 0 auto calc(var(--gutter) * 3);
    }
  }
}
</style>
