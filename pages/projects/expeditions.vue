<template>
  <div class="expeditions">
    <ProjectsHero
      :image-name="'expeditions'"
      :hero-title="'expeditions'"
    ></ProjectsHero>
    <div class="section container is-flex-desktop">
      <div>
        <div class="expeditions__subtitles">
          <a href="https://expeditions.com/"
            >expeditions.com (Changes Not live)</a
          >
          <p class="subtitle">|</p>
          <p class="subtitle">Junior Front End Developer</p>
          <p class="subtitle">|</p>
          <p class="subtitle">Aug 2019 - Mar 2020</p>
          <p class="subtitle">|</p>
          <p class="subtitle">On hiatus until further notice</p>
        </div>
        <div class="expeditions__copy">
          <div class="mb-6">
            <h2 class="mb-2">Project Breakdown</h2>
            <p>
              This was an ambitious project set out by Lindblad Expeditions. A
              complete redesign and overhaul of their B2C website, with the
              back-end work being sourced to Data Arts and the front-end handled
              by Matter of Form. The main goal was to breathe new life into
              client outreach and capture the company's sense of adventure
              through this medium. Unfortunately, the Covid-19 pandemic halted
              the progress on this project until further notice. Nevertheless
              this was my first enterprise level project and, during the months
              that I worked on it daily, I gained invaluable development
              experience. This was mainly through the close mentoring I received
              from the extremely talented CTO and developers (both senior and
              junior) on the close knit team at the time.
            </p>
          </div>
          <div class="is-flex-desktop expeditions__tech">
            <div class="mb-3">
              <h2 class="mb-2">Tech Used</h2>
              <ul>
                <li>Vue - JavaScript framework</li>
                <li>Vuex - For booking flow data state management</li>
                <li>Typescript - Typed JavaScript language</li>
                <li>
                  Scss - CSS Preprocessor in use, the site is all custom css
                </li>
                <li>Sketch - For module based designs from the art team</li>
                <li>
                  Azure DevOps - Agile sprint and ticketing management system
                </li>
              </ul>
            </div>
            <div class="expeditions__tech-back">
              <nuxt-link to="/projects" class="expeditions__link">
                <span class="is-block has-text-centered">
                  <Tiles class="expeditions__svg made"></Tiles>
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
.expeditions {
  .projects-hero .hero-body {
    background-position: bottom center !important;
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
