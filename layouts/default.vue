<template>
  <div>
    <TheHeader
      :title="['The', 'Dream is', 'Real.']"
      :subtitle="['The', 'Dream is', 'Real.']"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/Base/TheHeader'

export default {
  components: { TheHeader }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #181818;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
