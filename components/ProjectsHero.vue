<template>
  <section class="projects-hero hero is-medium">
    <div
      class="hero-body"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/' + imageName + '.webp') + ')',
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
    imageAlt: {
      type: String,
      default: 'Code Hero Image',
    },
    heroTitle: {
      type: String,
      default: 'My Work',
    },
  },
}
</script>

<style lang="scss" scoped>
.projects-hero {
  .hero-body {
    background-attachment: fixed;
    background-position: top center;
    background-size: 100% auto;
  }
}
</style>
