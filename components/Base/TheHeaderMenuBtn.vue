<template>
  <span
    class="menu-icon"
    ref="menu"
    @click="handleMenuAnimations"
  >
    <transition :name="firstLineAnimation">
      <span class="menu-icon__first-line animate__first-line" v-if="animateFirstLine && animateMenuBtn"></span>
    </transition>

    <transition :name="secondLineAnimation">
      <span class="menu-icon__second-line animate__first-line" v-if="animateSecondLine && animateMenuBtn"></span>
    </transition>

    <transition :name="thirdLineAnimation">
      <span class="menu-icon__third-line animate__first-line" v-if="animateThirdLine && animateMenuBtn"></span>
    </transition>
  </span>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    animateMenuBtn: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      firstLineAnimation: 'grow',
      secondLineAnimation: 'grow',
      thirdLineAnimation: 'grow'
    }
  },

  computed: {
    animateFirstLine () {
      if (!this.isLoading && this.isMenuOpen) {
        this.setAnimationsForOpenMenu()
        return true
      }
      return !this.isLoading
    },

    animateSecondLine () {
      return !this.isLoading && this.isMenuOpen ? false : !this.isLoading
    },

    animateThirdLine () {
      return !this.isLoading
    }
  },

  methods: {
    setAnimationsForOpenMenu () {
      this.firstLineAnimation = 'rotate',
      this.thirdLineAnimation = 'rotate'
    },

    setAnimationsforClosedMenu () {

    },

    afterLoading () {

    },

    handleMenuAnimations () {

    }
  }
}
</script>

<style lang="scss">
.menu-icon {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 70px;
  height: 25px;
  cursor: pointer;

  &__first-line,
  &__second-line,
  &__third-line {
    background: var(--gray);
    height: 1px;
    width: 100%;
  }

  &__second-line {
    width: 60%;
  }
}

// Transitions
.grow-enter-active, .grow-leave-active {
  transition: width .5s;
}
.grow-enter, .grow-leave-to {
  width: 0;
}

.rotate-enter-active, .rotate-leave-active {
  transform: rotate(45deg) .5s;
}
.rotate-enter, .rotate-leave-to {
  transform: rotate(45deg) .5s;
}


// Media queries
@media screen and (max-width: 580px) {
  .menu-icon {
    width: 50px;

    &__second-line {
      margin: .5em 0;
    }
  }
}
</style>
