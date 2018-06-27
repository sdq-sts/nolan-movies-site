<template>
  <div class="site container">
    <TheHeader
      class="site__header"
      :title="['The', 'Dream is', 'Real.']"
      :subtitle="['The', 'Dream is', 'Real.']"
    />

    <TheSocialIcons
      class="site__social-icons"
      description="Uma pequena seleção dos meus filmes favoritos do Christopher Nolan"
      facebook="http://facebook.com/profile.php?=73322363"
      instagram="https://www.instagram.com/"
      twitter="https://twitter.com/"
      pinterest="https://www.pinterest.com"
      email="#"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/Base/TheHeader'
import TheSocialIcons from '~/components/Base/TheSocialIcons'

export default {
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

  &__social-icons {
    margin-left: calc((100% - var(--site-width)) / 2);
  }
}
</style>
