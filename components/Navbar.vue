<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main-navigation"
    :class="{ scrolled: !view.atTopOfPage }"
  >
    <div class="container is-flex-touch">
      <div class="navbar-item navbar-start">
        <nuxt-link to="/" class="navbar__nolink" name="Home" aria-label="Home"
          ><h5 class="navbar__title is-hidden-touch">WISAM|HALAWI</h5>
          <WHLogo
            class="navbar__logo is-hidden-desktop"
            alt="Home Link"
          ></WHLogo>
        </nuxt-link>
      </div>
      <div class="navbar-end is-flex-touch">
        <nuxt-link
          class="navbar-item"
          to="/projects"
          name="Projects"
          aria-label="Projects"
        >
          <Tiles class="navbar__social" alt="Projects Link"
        /></nuxt-link>
        <a
          class="navbar-item"
          href="https://github.com/nnomadic"
          name="GitHub"
          aria-label="Github"
        >
          <Github class="navbar__social" alt="Github Link"
        /></a>
        <a
          class="navbar-item"
          href="https://www.linkedin.com/in/wisam-halawi/"
          name="LinkedIn"
          aria-label="LinkedIn"
          ><Linkedin class="navbar__social" alt="LinkedIn Link"
        /></a>
      </div>
    </div>
  </nav>
</template>

<script>
import WHLogo from '@/assets/svg/logo.svg?inline'
import Github from '@/assets/svg/github.svg?inline'
import Linkedin from '@/assets/svg/linkedin.svg?inline'
import Tiles from '@/assets/svg/tiles.svg?inline'

export default {
  components: {
    WHLogo,
    Github,
    Linkedin,
    Tiles,
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // throttle(fn, wait) {
    //   let time = Date.now()
    //   return function () {
    //     if (time + wait - Date.now() < 0) {
    //       fn()
    //       time = Date.now()
    //     }
    //   }
    // },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else if (!this.view.atTopOfPage) {
        this.view.atTopOfPage = true
      }
    },
  },
}
</script>

<style lang="scss">
.navbar {
  background-color: transparent !important;
  transition: 0.7s ease;

  &.scrolled {
    background-color: rgba(2, 11, 16, 0.5) !important;
  }

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
