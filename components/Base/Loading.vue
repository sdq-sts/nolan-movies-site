<template>
  <div :class="{ 'loading': true, 'loading--show': isLoading, 'loading--hide': !isLoading }">
    <div class="spinner">
      <div class="circle"></div>
      <div class="half-circle-smaller"></div>
      <div class="half-circle-bigger"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollBarWidth: null
    }
  },

  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style lang="scss">
$border-width: 2px;
$spinner-size: 75px;
$spinner-offset: 15px;

.loading {
  background: var(--main-bg-color);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  &--show {
    display: block;
  }

  &--hide {
    animation-name: fade-out;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }
}

.spinner {
  transform: translateY(-50%);
  position: relative;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: $spinner-size;
  height: $spinner-size;
  border: $border-width solid var(--gray);
  border-radius: 50%;
  position: relative;
}

.half-circle-smaller {
  width: $spinner-size - $spinner-offset;
  height: $spinner-size - $spinner-offset;
  border: $border-width solid var(--gray);
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  position: absolute;
  animation-name: spin-around;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: reverse;
}

.half-circle-bigger {
  width: $spinner-size + $spinner-offset;
  height: $spinner-size + $spinner-offset;
  border: $border-width solid var(--gray);
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  position: absolute;
  animation-name: spin-around;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
