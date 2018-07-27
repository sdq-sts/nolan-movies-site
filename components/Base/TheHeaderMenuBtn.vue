<template>
  <span class="menu-icon">
    <div class="menu-icon__first-line"></div>
    <div class="menu-icon__second-line"></div>
    <div class="menu-icon__third-line"></div>
  </span>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.menu-icon {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70px;
  cursor: pointer;

  &__first-line,
  &__second-line,
  &__third-line {
    background: var(--gray);
    height: 1px;
    width: 100%;
  }

  &__second-line {
    margin: .65em 0;
    width: 60%;
  }
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
