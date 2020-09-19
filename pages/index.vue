<template>
  <div class="homepage">
    <HomepageHero></HomepageHero>
    <hr />
    <PortfolioHero></PortfolioHero>
    <hr />
    <ExperienceHero></ExperienceHero>
  </div>
</template>

<style lang="scss">
.homepage {
  background: rgb(4, 31, 47);
  background: linear-gradient(
    90deg,
    rgba(4, 31, 47, 1) 0%,
    rgba(3, 65, 79, 1) 97%
  );

  animation: breathe 17s ease infinite;
  background-size: 400% 400%;
}
</style>
