<template>
  <div class="projects-index">
    <ProjectsHero></ProjectsHero>
    <ProjectDirectory></ProjectDirectory>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next()
  },
}
</script>
