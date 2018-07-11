<template>
  <div class="site container">
    <TheHeader
      class="site__header"
      :title="siteTitle"
      :subtitle="siteSubtitle"
    />

    <div class="site__page">
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

    <TheFooter
      class="site__footer"
      toTopMsg="voltar para o topo"
      :footerMsg="siteSubtitle.join(' ')"
    />
  </div>
</template>

<script>
import TheHeader from '~/components/Base/TheHeader'
import TheSocialIcons from '~/components/Base/TheSocialIcons'
import TheFooter from '~/components/Base/TheFooter'

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
    TheSocialIcons,
    TheFooter
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

  &__page {
    position: relative;
  }

  &__footer {
    width: var(--site-width);
    margin: 8em auto 4em;
  }
}

.page {
  &__social-icons {
    width: calc(var(--site-width) / 2);
    margin-left: calc((100% - var(--site-width)) / 2);
    position: absolute;
    z-index: 50;
  }
}
</style>
