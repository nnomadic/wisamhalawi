<template>
  <section class="section home hero is-fullheight has-bg-img">
    <div class="hero-body">
      <div class="container">
        <h1 class="pl-6 text-1">hey</h1>
        <h1 class="has-text-centered text-2">i'm Wis</h1>
        <h1 class="has-text-right text-3">a creative web dev</h1>
        <h1 class="has-text-right text-4">and front-end specialist</h1>
      </div>
      <!-- <div class="icon-scroll"></div> -->
    </div>
    <!-- <Chevron class="delay-fade" @next="next()"></Chevron> -->
  </section>
</template>

<script>
export default {
  methods: {
    next() {
      this.$emit('next')
    },
  },
}
</script>

<style lang="scss" scoped>
.has-bg-img {
  // background: url('~assets/images/hero.jpg') center center;
  // background-size: cover;
  ////////
  // background: rgb(2, 11, 16);
  // background: linear-gradient(
  //   90deg,
  //   rgba(2, 11, 16, 1) 0%,
  //   rgba(1, 39, 48, 1) 97%
  // );
  // animation: breathe 17s ease infinite;
  // background-size: 400% 400%;
}

.home {
  .text {
    &-1 {
      @include fadein('2000ms');
    }
    &-2 {
      @include fadein('4000ms');
      @include md {
        margin: 6.25rem 0;
      }
    }

    &-3 {
      @include fadein('6000ms');
    }

    &-4 {
      @include fadein('8000ms');
    }
  }

  .delay-fade {
    @include fadein('10000ms');
  }
}
</style>
