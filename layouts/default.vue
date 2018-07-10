<template>
  <div class="site container">
    <TheHeader
      class="site__header"
      :title="siteTitle"
      :subtitle="siteSubtitle"
    />

    <div class="page">
      <TheSocialIcons
        class="page__social-icons"
        :description="siteDescription"
        :facebook="social.facebook"
        :instagram="social.instagram"
        :twitter="social.twitter"
        :pinterest="social.pinterest"
        :email="social.email"
      />
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/Base/TheHeader'
import TheSocialIcons from '~/components/Base/TheSocialIcons'

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

    social () {
      return this.$store.getters.socialLinks
    }
  },

  components: {
    TheHeader,
    TheSocialIcons
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Barlow', sans-serif;
  overflow-y: scroll;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
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
    margin: 6em auto 0;
  }
}

.page {
  position: relative;

  &__social-icons {
    width: calc(var(--site-width) / 2);
    margin-left: calc((100% - var(--site-width)) / 2);
    z-index: 50;
  }
}
</style>
