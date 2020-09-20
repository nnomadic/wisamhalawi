<template>
  <div class="ffe">
    <ProjectsHero
      :image-name="'ffe'"
      :hero-title="'Fulfilment Media'"
      :image-alt="'Fulfilment Media Hero Image'"
    ></ProjectsHero>
    <div class="section container is-flex-desktop">
      <div>
        <div class="ffe__subtitles">
          <a
            href="https://fulfilmentmedia.com/"
            aria-label="Link to fulfilmentmedia.com"
            >fulfilmentmedia.com (Coming Soon)</a
          >
          <p class="subtitle">|</p>
          <p class="subtitle">Full Stack Developer</p>
          <p class="subtitle">|</p>
          <p class="subtitle">May 2020 - Nov 2020</p>
        </div>
        <div class="ffe__copy">
          <div class="mb-6">
            <h2 class="mb-2">Project Breakdown</h2>
            <p>
              Fulfilment Media reached out to me to get their online portfolio
              off the ground so they could reach their potential clients easier.
              This project consisted of a full design and implementation both
              backend and frontend. They also required a custom CMS accessible
              through an administrator only page. There were many development
              aspects to consider such as security, accesibility and UX, all of
              which I had a small amount of experience with when I started
              working on this. However, I love to learn and this was a great
              opportunity to study up and consult with some already experienced
              developers and UX masters.
            </p>
          </div>
          <div class="is-flex-desktop ffe__tech">
            <div class="mb-3">
              <h2 class="mb-2">Tech Used</h2>
              <ul>
                <li>Vue - JavaScript framework</li>
                <li>Laravel - Back-end PHP framework</li>
                <li>Tailwind - CSS utility Framework</li>
                <li>Figma - For designs and wireframes</li>
                <li>Github - Repo management and version control</li>
              </ul>
            </div>
            <div class="ffe__tech-back">
              <nuxt-link
                to="/projects"
                class="ffe__link"
                aria-label="Back to all projects"
              >
                <span class="is-block has-text-centered">
                  <Tiles class="ffe__svg made"></Tiles>
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
.ffe {
  .projects-hero .hero-body {
    h1 {
      text-shadow: 2px 2px 4px $black;
    }
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
