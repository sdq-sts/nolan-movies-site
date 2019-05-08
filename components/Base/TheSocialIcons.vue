<template>
  <div class="social-icons">
    <span class="social-icons__links links">
      <a v-if="facebook" :href="facebook" target="_blank" class="links__icon facebook"><i class="fab fa-facebook-f"></i></a>
      <a v-if="instagram" :href="instagram" target="_blank" class="links__icon instagram"><i class="fab fa-instagram"></i></a>
      <a v-if="twitter" :href="twitter" target="_blank" class="links__icon twitter"><i class="fab fa-twitter"></i></a>
      <a v-if="pinterest" :href="pinterest" target="_blank" class="links__icon pinterest"><i class="fab fa-pinterest-p"></i></a>
      <a v-if="email" :href="email" target="_blank" class="links__icon email"><i class="fas fa-envelope"></i></a>
    </span>

    <div v-if="description" class="social-icons__description description">
      <span class="description__line"></span>
      <span class="description__sentence">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    pinterest: { type: String },
    email: { type: String },
    description: { type: String }
  }
}
</script>

<style lang="scss">
.social-icons {
  display: flex;
  align-items: flex-start;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: calc(var(--gutter) * 0.66666);
  flex-wrap: wrap;

  &__icon {
    color: var(--white);
    margin-top: 1.5em;
    font-size: .9em;

    &:first-child {
      margin-top: 0;
    }
  }
}

.description {
  display: flex;
  margin-top: calc(var(--gutter) * 0.66666);
  align-items: center;

  &__line {
    height: 1px;
    width: 25%;
    background: var(--white);
    display: inline-block;
    margin: 0 .5em;
    transform: translateY(-.5em);
  }

  &__sentence {
    font-family: var(--text-font);
    font-size: .8em;
    line-height: var(--text-line-height);
    color: var(--white);
    width: 55%;
    display: inline-block;
  }
}

// Media queries
@media screen and (max-width: 480px) {
  .links {
    &__icon {
      margin-top: 1em;
    }
  }

  .description {
    &__sentence {
      font-size: .7em;
    }
  }

  .movie-page {
    .links {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;

      &__icon {
        margin-top: 0;
      }
    }

    .description {
      display: none;
    }
  }
}
</style>
