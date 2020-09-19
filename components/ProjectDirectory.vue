<template>
  <section class="section project-directory">
    <div class="">
      <div class="project-directory__projects">
        <nuxt-link
          to="/projects/expeditions"
          class="feature"
          aria-label="Expeditions Project Page"
        >
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/expeditions.jpg"
              alt="Expeditions Hike Image"
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">Expeditions</h2>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/projects/fulfilment"
          aria-label="Fulfilment Media Project Page"
        >
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/ffe.jpg"
              alt="Fulfilment Film Camera"
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">FulFilmEnt Media</h2>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/projects/sarujujitsu"
          aria-label="Saru Ju-Jitsu Project Page"
        >
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/saru.jpg"
              alt="Saru Ju-Jitsu MMA"
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">Saru Ju-Jitsu</h2>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/projects/wisamhalawi"
          aria-label="WisamHalawi Project Page"
        >
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/whsite.jpg"
              alt="WisamHalawi Keyboard"
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">wisamhalawi</h2>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/projects/degreeachievements"
          aria-label="Degree and Achievements Project Page"
        >
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/books.jpg"
              alt="Degree and achievements books"
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">Degree & Achievements</h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.project-directory {
  &.section {
    padding-bottom: 6rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  &__projects {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, 270px);
    grid-gap: 15px;
    grid-auto-flow: row;

    @include md {
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(3, 270px);
    }
    @include lg {
      grid-template-columns: repeat(2, 450px);
      grid-template-rows: repeat(3, 219px);
      grid-gap: 6rem;
    }

    a {
      width: auto;
      max-height: auto;
      animation: none;

      &::after {
        display: none;
      }

      &:hover::after {
        display: none;
      }
      transition: 1s ease;

      &:hover {
        @include lg {
          .project-directory__projects-item {
            border-color: $dark-electric;
          }

          h2 {
            color: $dark-electric;
          }
        }
      }
    }

    &-item {
      transition: 0.5s;
      padding: 10px;
      border: 1.5px solid $gray;
      overflow: hidden;
      border-radius: 5px;
    }
  }
  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    object-position: top;
    filter: brightness(0.7);
    transition: 1s;

    @include md {
      width: 350px;
    }

    @include lg {
      width: 450px;
      height: 219px;
    }
    &-text {
      z-index: 2;
      transition: 0.5s;
    }
  }

  .feature {
    @include lg {
      grid-row-start: span 2;

      img {
        height: 500px;
      }
    }
  }
}
</style>
