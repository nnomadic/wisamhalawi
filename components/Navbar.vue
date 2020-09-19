<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main-navigation"
  >
    <div class="container is-flex-touch">
      <div class="navbar-item navbar-start">
        <nuxt-link to="/" class="navbar__nolink"
          ><h5 class="navbar__title is-hidden-touch">WISAM|HALAWI</h5>
          <WHLogo class="navbar__logo is-hidden-desktop"></WHLogo>
        </nuxt-link>
      </div>

      <!-- <div class="navbar-item navbar-start is-hidden-desktop">
        <nuxt-link to="/" class="navbar__nolink"
          ><WHLogo class="navbar__logo"></WHLogo
        ></nuxt-link>
      </div> -->

      <div class="navbar-end is-flex-touch">
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
import WHLogo from '@/assets/svg/logo.svg?inline'
import Github from '@/assets/svg/github.svg?inline'
import Linkedin from '@/assets/svg/linkedin.svg?inline'

export default {
  components: {
    WHLogo,
    Github,
    Linkedin,
  },
}
</script>

<style lang="scss">
.navbar {
  background-color: transparent !important;

  .container {
    justify-content: space-around;
  }

  &__logo {
    width: 40px;
    height: 40px;
    @include lg {
      width: 50px;
      height: 50px;
    }
  }

  &__social {
    width: 40px;
    height: 40px;

    @include lg {
      width: 50px;
      height: 50px;
    }
    path {
      fill: $gray;
    }
  }

  &__title {
    font-family: $avant-garde;
    font-size: 2.5rem;
    letter-spacing: 1.1rem;
    user-select: none;
    -webkit-user-select: none;
    color: $gray;
    animation: colouring 15s infinite;
  }

  .navbar-item {
    color: $gray;

    &:focus-within,
    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  &__nolink {
    &:after {
      display: none;
    }

    &:hover {
      h1 {
        color: $dark-electric;
      }

      svg path {
        fill: $dark-electric;
      }
    }
  }
}
</style>
