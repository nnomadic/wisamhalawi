<template>
  <div class="container">
    <div>
      <WHLogo class="logo" />
      <h1 class="title">Come back soon.</h1>
    </div>
  </div>
</template>

<script>
import WHLogo from '@/assets/svg/logo.svg?inline'
export default {
  components: {
    WHLogo,
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 250px;
  height: 250px;
}
</style>
