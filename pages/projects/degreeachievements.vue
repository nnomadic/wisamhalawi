<template>
  <div class="degree">
    <ProjectsHero
      :image-name="'books'"
      :hero-title="'degree and achievements'"
    ></ProjectsHero>
    <div class="section container is-flex-desktop">
      <div>
        <div class="degree__subtitles">
          <a href="https://swansea.ac.uk/">swansea.ac.uk</a>
          <p class="subtitle">|</p>
          <p class="subtitle">Computer Science BSc.</p>
          <p class="subtitle">|</p>
          <p class="subtitle">Sep 2016 - Jul 2019</p>
        </div>
        <div class="degree__copy">
          <div class="mb-6">
            <h2 class="mb-2">Student Projects and Awards</h2>
            <p class="mb-4">
              My university projects came from a variety of modules and so it
              guided me to work with specific ideas as the focus to form a broad
              basis of programming. Two examples of this would be: a program
              with a GUI to display the pixel data of a CT scan using
              interpolation algorithms and implementing a nearest neighbour
              sampling method; and designing a screen-less navigation device
              using haptic feedback to navigate a user. I also used ASP.NET with
              MVC to create a web application for creating posts and comments.
              My final project was the implementation of gesture controls used
              for manipulating and understanding data visualised in 3D via the
              Microsoft HoloLens, this was using Unity and C#.
            </p>
            <p>
              Some of my notable achievements so far include: receiving an
              excellence scholarship from Swansea University; being the top
              achieving computing student at Barnet and Southgate College; first
              place in the Lego Mindstorms 2017 Swansea event; and first place
              in the Swansea Uni Summer Game Jam 2017.
            </p>
          </div>
          <div class="is-flex-desktop degree__tech">
            <div class="mb-3">
              <h2 class="mb-2">Tech Used</h2>
              <ul>
                <li>
                  Java - Used in the majority of my university work and projects
                </li>
                <li>C# - For my final project scripts and a web application</li>
                <li>Unity with Mixed Reality Toolkit - For my final project</li>
              </ul>
            </div>
            <div class="degree__tech-back">
              <nuxt-link to="/projects" class="degree__link">
                <span class="is-block has-text-centered">
                  <Tiles class="degree__svg made"></Tiles>
                </span>
                <span> Back to projects</span>
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
.degree {
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
