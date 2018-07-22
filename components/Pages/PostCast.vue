<template>
  <div class="post-cast">
    <div class="post-cast__title">
      <p>Elenco</p>
    </div>
    <div class="post-cast__actors cast-actors">
      <ul class="cast-actors__list actors-list">
        <li
          class="actors-list__item"
          v-for="(actor, i) in castList"
          :key="i"
        >{{ actor }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    castList: {
      type: Array,
      required: true
    }
  },

  computed: {
    firstCastList () {
      return 0
    }
  }
}
</script>

<style lang="scss">
.post-cast {
  color: var(--white);
  display: flex;
  justify-content: flex-end;

  &__title {
    border-left: 1px solid var(--white);
    font-family: var(--main-font);
    font-size: 2em;
    padding-left: .25em;

    > p {
      transform: translateX(-100%) rotate(-90deg);
      transform-origin: top right;
    }
  }

  &__actors {
    width: 40%;
  }
}

.actors-list {
  list-style: none;
  display: flex;
  padding: 0;
  flex-wrap: wrap;

  &__item {
    font-family: var(--text-font);
    width: 40%;
    padding: .5em;
  }
}
</style>
