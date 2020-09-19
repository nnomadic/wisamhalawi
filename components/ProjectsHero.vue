<template>
  <section class="projects-hero hero is-medium">
    <div
      class="hero-body"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/' + imageName + '.jpg') + ')',
      }"
    >
      <div class="container">
        <h1 class="has-text-centered">{{ heroTitle }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      default: 'code',
    },
    heroTitle: {
      type: String,
      default: 'my work',
    },
  },
}
</script>

<style lang="scss" scoped>
.projects-hero {
  .hero-body {
    // background-color: rgba(3, 65, 79, 1);
    // background: url('~assets/images/colorcompressed.jpg') center center;
    // background-size: cover;

    // background-image: url('~assets/images/code.jpg');
    //   linear-gradient(to top, rgba(3, 65, 79, 1) 0%, transparent 5%);
    // background-repeat: no-repeat, no-repeat;
    // background-size: cover;

    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
}
</style>
