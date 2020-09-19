<template>
  <section class="section project-directory">
    <div class="">
      <div class="project-directory__projects">
        <nuxt-link to="/projects/expeditions" class="feature">
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/expeditions.jpg"
              alt=""
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">Expeditions</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/projects/fulfilment">
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/ffe.jpg"
              alt=""
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">FulFilmEnt Media</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/projects/sarujujitsu">
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/saru.jpg"
              alt=""
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">Saru Ju-Jitsu</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/projects/wisamhalawi">
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/whsite.jpg"
              alt=""
              class="project-directory__image"
            />
            <h2 class="project-directory__image-text">wisamhalawi</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/projects/degreeachievements">
          <div class="project-directory__projects-item">
            <img
              src="@/assets/images/books.jpg"
              alt=""
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
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: $soft-black;
  // margin: 3rem 0 8rem;

  // @include lg {
  //   margin: -2rem 0 8rem;
  // }
  &__projects {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, 270px);
    grid-gap: 15px;
    grid-auto-flow: row;
    // justify-items: center;
    // align-items: center;

    // margin: 3rem 0 8rem;

    @include md {
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(3, 270px);
    }
    @include lg {
      grid-template-columns: repeat(2, 450px);
      grid-template-rows: repeat(3, 219px);
      grid-gap: 6rem;
      // margin: -2rem 0 8rem;
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
          // transform: scale(1.1);

          img {
            // padding: -10px;
            // transform: scale(1.1);
          }

          .project-directory__projects-item {
            // transition: 0.5s;
            border-color: $dark-electric;
          }

          h2 {
            color: $dark-electric;
          }
        }
        // z-index: 2;
        // img {
        //   filter: none;
        // }

        // h2 {
        //   text-shadow: 2px 2px 4px $black;
        // }
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
    // width: 100px;
    // height: 315px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    object-position: top;
    filter: brightness(0.7);
    // opacity: 0.9;
    transition: 1s;

    @include md {
      // border-radius: 25px;
      width: 350px;
    }

    @include lg {
      width: 450px;
      height: 219px;
    }
    &-text {
      // position: absolute;
      // top: 50%;
      // left: 10%;
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
