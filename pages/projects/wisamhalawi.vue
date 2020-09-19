<template>
  <div class="whsite">
    <ProjectsHero
      :image-name="'whsite'"
      :hero-title="'this site'"
    ></ProjectsHero>
    <div class="section container is-flex-desktop">
      <div class="pl-6">
        <div class="whsite__subtitles">
          <a href="https://wisamhalawi.com/">wisamhalawi.com</a>
          <p class="subtitle">|</p>
          <p class="subtitle">Front End Developer</p>
          <p class="subtitle">|</p>
          <p class="subtitle">Aug 2020 - Sep 2020</p>
        </div>
        <div class="whsite__copy">
          <div class="mb-6">
            <h2 class="mb-2">Project Breakdown</h2>
            <p>
              This website is a passion project of mine to showcase what I've
              learnt so far in my career. I intend to keep this regularly
              updated with new techniques that I come across in the future to
              keep it as modern as possible. The design should change each time
              as a reflection of that too. I used Nuxt here instead of Vue,
              primarly to expand out of my comfort zone. This definitely
              benefited me though, as the site is blazingly fast, and perfectly
              SEO-optimized which addresses one of the main issues of shipping
              with Vue.
            </p>
          </div>
          <div class="is-flex-desktop whsite__tech">
            <div class="mb-3">
              <h2 class="mb-2">Tech Used</h2>
              <ul>
                <li>Nuxt - SSR JavaScript framework based on Vue</li>
                <li>Bulma - A mix of this utility framework and custom CSS</li>
                <li>Figma - For designs and wireframes</li>
                <li>Netlify - Web hosting services</li>
                <li>Github - Repo management and version control</li>
              </ul>
            </div>
            <div class="whsite__tech-back">
              <nuxt-link to="/projects" class="whsite__link">
                <span class="is-block has-text-centered">
                  <Tiles class="whsite__svg made"></Tiles>
                </span>
                <span> Back to projects </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tiles from '@/assets/svg/tiles.svg?inline'

export default {
  components: {
    Tiles,
  },
}
</script>

<style lang="scss">
.whsite {
  .projects-hero .hero-body {
    // background-position: bottom center !important;
  }

  &__subtitles {
    margin-bottom: 3rem;

    @include lg {
      margin-bottom: auto;
    }
  }
  &__svg {
    width: 35px;
    height: 35px;

    &.made {
      path {
        transition: fill 0.5s ease;
      }
      > path {
        fill: $gray;
      }
    }

    @include md {
      width: 50px;
      height: 50px;
    }
  }

  &__link {
    margin: 0 auto;
    &:hover {
      svg path {
        fill: $dark-electric;
      }
    }
  }

  &__tech {
    justify-content: space-between;

    &-back {
      align-self: center;
      text-align: center;

      @include lg {
        padding-right: 10rem;
      }
    }
  }
}
</style>
