<template>
  <section class="section hero portfolio-hero is-fullheight bg-img">
    <div class="hero-body container">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        class="portfolio-hero__work"
      >
        <h1 class="mb-4 has-text-centered">what i work with</h1>
        <div class="columns is-multiline is-mobile is-3">
          <div
            v-for="svg in SkillsSvgs"
            :key="svg"
            class="column has-text-centered is-one-third"
          >
            <component :is="svg" class="portfolio-hero__svg" />
          </div>
        </div>
        <p class="has-text-justified">
          i'm an avid learner and always looking for a challenge, these are just
          some of my professional comforts
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        class="portfolio-hero__made"
      >
        <h1 class="mb-4">made by me</h1>
        <div>
          <nuxt-link
            :to="{ path: 'projects' }"
            class="portfolio-hero__link"
            aria-label="Projects"
          >
            <span class="is-block has-text-centered">
              <Tiles
                class="portfolio-hero__svg made"
                alt="Projects Link"
              ></Tiles>
            </span>
            <span alt="Link to All projects"> All projects </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Bulma from '@/assets/svg/skills/bulma.svg?inline'
import Git from '@/assets/svg/skills/git.svg?inline'
import Javascript from '@/assets/svg/skills/javascript.svg?inline'
import Jira from '@/assets/svg/skills/jira.svg?inline'
import Laravel from '@/assets/svg/skills/laravel.svg?inline'
import Nuxt from '@/assets/svg/skills/nuxt.svg?inline'
import Sass from '@/assets/svg/skills/sass.svg?inline'
import Typescript from '@/assets/svg/skills/typescript.svg?inline'
import Vuejs from '@/assets/svg/skills/vuejs.svg?inline'
import Tiles from '@/assets/svg/tiles.svg?inline'

export default {
  components: {
    Bulma,
    Git,
    Javascript,
    Jira,
    Laravel,
    Nuxt,
    Sass,
    Typescript,
    Vuejs,
    Tiles,
  },
  data() {
    return {
      SkillsSvgs: [
        'Vuejs',
        'Nuxt',
        'Sass',
        'Javascript',
        'Typescript',
        'Laravel',
        'Bulma',
        'Jira',
        'Git',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-hero {
  background-image: url('~assets/svg/squiggle.svg');
  background-size: 350% 100%;
  background-repeat: no-repeat;
  background-position: top center;
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

  .hero-body {
    display: block;

    @include lg {
      display: flex;
      flex-flow: column;
    }
  }

  &__work {
    align-self: flex-start;
    margin-bottom: 3rem;

    @include lg {
      margin: 7rem 10rem 5rem 0;
    }
  }

  &__made {
    align-self: flex-end;
    display: flex;
    flex-flow: column;
    text-align: center;
  }

  &__link {
    margin: 0 auto;
    &:hover {
      svg path {
        fill: $dark-electric;
      }
    }
  }
  .icon-scroll {
    @include fadein('6000ms');
  }
}
</style>
