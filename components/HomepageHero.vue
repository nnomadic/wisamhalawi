<template>
  <section class="section home hero is-fullheight has-bg-img">
    <div class="hero-body">
      <div class="container">
        <h1 class="pl-6 text-1">Hey</h1>
        <h1 class="has-text-centered text-2">I'm Wis</h1>
        <h1 class="has-text-right text-3">A creative web dev</h1>
        <h1 class="has-text-right text-4">and front-end specialist</h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23041f2f' fill-opacity='0.23'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: flowDown 35s infinite;

  .text {
    &-1 {
      @include fadein('1500ms');
    }
    &-2 {
      @include fadein('3500ms');
      margin: 2rem 0;
      @include md {
        margin: 4rem 0;
      }
    }

    &-3 {
      @include fadein('5000ms');
    }

    &-4 {
      @include fadein('7000ms');
    }
  }

  .delay-fade {
    @include fadein('10000ms');
  }
}
</style>
