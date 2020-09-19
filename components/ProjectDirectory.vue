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
              data-sizes="auto"
              :data-src="require('~/assets/images/expeditionsMOBILE.jpg')"
              :data-srcset="
                (require('~/assets/images/expeditionsMOBILE.jpg') +
                  ' ' +
                  '300w',
                require('~/assets/images/expeditions.jpg') + ' ' + '900w')
              "
              alt="Expeditions Hike Image"
              class="project-directory__image lazyload"
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
              data-sizes="auto"
              :data-src="require('~/assets/images/ffeMOBILE.jpg')"
              :data-srcset="
                (require('~/assets/images/ffeMOBILE.jpg') + ' ' + '300w',
                require('~/assets/images/ffe.jpg') + ' ' + '900w')
              "
              alt="Fulfilment Film Camera"
              class="project-directory__image lazyload"
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
              data-sizes="auto"
              :data-src="require('~/assets/images/saruMOBILE.jpg')"
              :data-srcset="
                (require('~/assets/images/saruMOBILE.jpg') + ' ' + '300w',
                require('~/assets/images/saru.jpg') + ' ' + '900w')
              "
              alt="Saru Ju-Jitsu MMA"
              class="project-directory__image lazyload"
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
              data-sizes="auto"
              :data-src="require('~/assets/images/whsiteMOBILE.jpg')"
              :data-srcset="
                (require('~/assets/images/whsiteMOBILE.jpg') + ' ' + '300w',
                require('~/assets/images/whsite.jpg') + ' ' + '900w')
              "
              alt="WisamHalawi Keyboard"
              class="project-directory__image lazyload"
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
              data-sizes="auto"
              :data-src="require('~/assets/images/booksMOBILE.jpg')"
              :data-srcset="
                (require('~/assets/images/booksMOBILE.jpg') + ' ' + '300w',
                require('~/assets/images/books.jpg') + ' ' + '900w')
              "
              alt="Degree and achievements books"
              class="project-directory__image lazyload"
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

      @include lg {
        animation: borderBreathe 2s ease infinite;
      }
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
    user-select: none;

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

  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
  }
}
</style>
