<template>
  <nav
    class="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main-navigation"
  >
    <div class="container">
      <div class="navbar-start">
        <h5 class="navbar-item navbar__title">WISAM|HALAWI</h5>
      </div>

      <!-- <div class="navbar-brand">
        <WHLogo class="navbar__logo"></WHLogo>
      </div> -->

      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/nnomadic">
          <Github class="navbar__social"
        /></a>
        <a class="navbar-item" href="https://www.linkedin.com/in/wisam-halawi/"
          ><Linkedin class="navbar__social"
        /></a>
      </div>
    </div>
  </nav>
</template>

<script>
// import WHLogo from '@/assets/svg/logo.svg?inline'
import Github from '@/assets/svg/github.svg?inline'
import Linkedin from '@/assets/svg/linkedin.svg?inline'

export default {
  components: {
    // WHLogo,
    Github,
    Linkedin,
  },
}
</script>

<style lang="scss">
.navbar {
  background-color: transparent;
  &-brand {
    justify-content: center;
  }
  &__logo {
    width: 150px;
    height: 150px;
  }

  &__social {
    width: 50px;
    height: 50px;
    path {
      fill: $dark-electric;
    }
  }

  &__title {
    font-family: $avant-garde;
    font-size: 2.5rem;
    letter-spacing: 1.1rem;
    user-select: none;
    -webkit-user-select: none;
    color: $gray;
  }
}
</style>
