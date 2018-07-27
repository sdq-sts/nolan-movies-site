<template>
  <footer class="site-footer">
    <span class="site-footer__to-top to-top">
      <span class="to-top__line" aria-hidden="true"></span>
      <span class="to-top__msg" aria-hidden="true">{{ toTopMsg }}</span>
    </span>

    <span class="site-footer__msg footer-msg">
      <span class="footer-msg__text">{{ fmtdFooterMsg }}</span>
      <span class="footer-msg__line" aria-hidden="true"></span>
      <span class="footer-msg__year">{{ currentYear }}</span>
    </span>
  </footer>
</template>

<script>
export default {
  props: {
    toTopMsg: {
      type: String
    },

    footerMsg: {
      type: String
    }
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    },

    fmtdFooterMsg () {
      return this.footerMsg.replace('.', '')
    }
  }
}
</script>

<style lang="scss">
.site-footer {
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  font-family: var(--main-font);
  position: relative;
}

.to-top {
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg) translateY(-1em);

  &__line {
    width: 150%;
    height: 1px;
    display: inline-block;
    margin-bottom: .5em;
    background: var(--gray);
  }

  &__msg {
    width: 75px;
  }
}

.footer-msg {
  display: flex;
  align-items: center;

  &__text, &__line, &__year {
    display: inline-block;
    font-size: 1em;
  }

  &__line {
    background: var(--gray);
    height: 1px;
    width: 5em;
    margin: auto .75em;
  }
}

// Media queries
@media screen and (max-width: 480px) {
  .to-top {
    &__msg {
      font-size: .75em;
      width: 75px;
    }
  }

  .footer-msg {
    display: flex;
    align-items: center;

    &__text, &__line, &__year {
      font-size: .75em;
    }
  }
}
</style>
