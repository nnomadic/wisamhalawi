<template>
  <div class="projects-index">
    <ProjectsHero></ProjectsHero>
    <ProjectDirectory></ProjectDirectory>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Projects - Wisam Halawi',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Wisam Halawis previous projects and achievements',
        },
      ],
    }
  },
}
</script>
