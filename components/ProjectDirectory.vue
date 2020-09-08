<template>
  <section class="project-directory">
    <div class="">
      <div class="project-directory__projects">
        <nuxt-link to="/projects/expeditions" class="feature">
          <img
            src="@/assets/images/expeditions.jpg"
            alt=""
            class="project-directory__image"
          />
          <h2 class="project-directory__image-text">Expeditions</h2>
        </nuxt-link>
        <nuxt-link to="/projects/fulfilment">
          <img
            src="@/assets/images/ffe.jpg"
            alt=""
            class="project-directory__image"
          />
          <h2 class="project-directory__image-text">Ful-Film-Ent Media</h2>
        </nuxt-link>
        <nuxt-link to="/projects/sarujujitsu">
          <img
            src="@/assets/images/saru.png"
            alt=""
            class="project-directory__image"
          />
          <h2 class="project-directory__image-text">Saru-Ju-Jitsu</h2>
        </nuxt-link>
        <nuxt-link to="/projects/wisamhalawi">
          <img
            src="@/assets/images/whsite.png"
            alt=""
            class="project-directory__image"
          />
          <h2 class="project-directory__image-text">This Site</h2>
        </nuxt-link>
        <nuxt-link to="/projects/degreeachievements">
          <img
            src="@/assets/images/books.jpg"
            alt=""
            class="project-directory__image"
          />
          <h2 class="project-directory__image-text">Degree and Achievements</h2>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-directory {
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: $soft-black;
  margin: 3rem 0 8rem;

  @include lg {
    margin: -2rem 0 8rem;
  }
  &__projects {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, 200px);
    grid-gap: 15px;
    grid-auto-flow: row;
    // justify-items: center;
    // align-items: center;

    @include md {
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(3, 200px);
    }
    @include lg {
      // grid-template-columns: repeat(3, 450px);
      // grid-template-rows: repeat(2, 250px);
      grid-gap: 5rem;
    }

    a {
      width: auto;
      max-height: auto;

      &:hover::after {
        display: none;
      }
      transition: 1s ease;

      &:hover {
        transform: scale(1.1);
        z-index: 2;
        img {
          filter: none;
        }

        h2 {
          text-shadow: 2px 2px 4px $black;
        }
      }
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
    filter: blur(2px) brightness(0.7);
    opacity: 0.9;
    transition: 1s;

    @include md {
      border-radius: 25px;
      width: 350px;
    }

    @include lg {
      width: 450px;
      height: 250px;
    }
    &-text {
      position: absolute;
      top: 50%;
      left: 10%;
    }
  }

  .feature {
    @include lg {
      grid-row-start: span 2;

      img {
        height: 529px;
      }
    }
  }
}
</style>
