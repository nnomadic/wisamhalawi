<template>
  <div class="index">
    <HomepageHero></HomepageHero>
    <hr />
    <PortfolioHero></PortfolioHero>
    <hr />
    <ExperienceHero></ExperienceHero>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.index {
  background: rgb(4, 31, 47);
  background: linear-gradient(
    90deg,
    rgba(4, 31, 47, 1) 0%,
    rgba(3, 65, 79, 1) 97%
  );
  animation: breathe 17s ease infinite;
  background-size: 400% 400%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
}
</style>
