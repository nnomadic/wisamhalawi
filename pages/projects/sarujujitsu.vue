<template>
  <div class="saru">
    <ProjectsHero
      :image-name="'saru'"
      :hero-title="'saru ju-jitsu'"
    ></ProjectsHero>
    <div class="section container is-flex-desktop">
      <div>
        <div class="saru__subtitles">
          <a href="https://sarujujitsuacademy.co.uk/"
            >sarujujitsuacademy.co.uk</a
          >
          <p class="subtitle">|</p>
          <p class="subtitle">Full Stack Developer</p>
          <p class="subtitle">|</p>
          <p class="subtitle">Mar 2020 - May 2020</p>
        </div>
        <div class="saru__copy">
          <div class="mb-6">
            <h2 class="mb-2">Project Breakdown</h2>
            <p>
              The original developer for this site is a close friend of mine
              from university. He got in touch after the academy owner needed
              some additional functionality added, and that developer didn't
              have the time to create it. The complete scope was to build a
              functional and secure user system that fit in with a members area
              where paying users can view tutorial videos for the classes that
              they are signed up for within the club as the MVP. It also matched
              the current design and has an admin area for the club owner and
              site administrator to manage members and their access to those
              videos. I had a great time learning the complexities of Laravel
              and how beautifully it syncs up with Vue during this project.
            </p>
          </div>
          <div class="is-flex-desktop saru__tech">
            <div class="mb-3">
              <h2 class="mb-2">Tech Used</h2>
              <ul>
                <li>Vue - JavaScript framework</li>
                <li>Laravel - Back-end PHP framework</li>
                <li>Bootstrap - CSS Framework</li>
                <li>Figma - For designs and wireframes</li>
                <li>Gitlabs - Repo management and version control</li>
              </ul>
            </div>
            <div class="saru__tech-back">
              <nuxt-link to="/projects" class="saru__link">
                <span class="is-block has-text-centered">
                  <Tiles class="saru__svg made"></Tiles>
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
.saru {
  .projects-hero .hero-body {
    @include lg {
      background-position: bottom center !important;
    }

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
