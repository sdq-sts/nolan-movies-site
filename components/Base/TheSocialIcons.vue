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
  position: relative;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2em;
  flex-wrap: wrap;

  &__icon {
    color: var(--white);
    margin-top: 1em;
  }
}

.description {
  display: flex;
  margin-top: 3em;
  align-items: center;

  &__line {
    height: 1px;
    width: 70px;
    background: var(--white);
    display: inline-block;
    margin: 0 1em;
    transform: translateY(-.5em);
  }

  &__sentence {
    font-family: 'Barlow Regular', sans-serif;
    font-size: .8em;
    color: var(--white);
    width: 250px;
    display: inline-block;
  }
}
</style>
