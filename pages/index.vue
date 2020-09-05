<template>
  <div class="fullpage-container">
    <div ref="Home" v-fullpage="opts" class="fullpage-wp">
      <div class="page-1 page">
        <HomepageHero></HomepageHero>
      </div>
      <div class="page-2 page">
        <Titty></Titty>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange(currentSlideEl, currenIndex, nextIndex) {},
        afterChange(currentSlideEl, currenIndex) {},
      },
    }
  },
  methods: {
    moveNext() {
      this.$refs.example.$fullpage.moveNext()
    },
  },
}
</script>

<style lang="scss">
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
