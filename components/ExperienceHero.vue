<template>
  <section class="section hero experience-hero">
    <div class="container">
      <h1 data-aos="fade-up" data-aos-duration="2500" class="mb-6">
        Professional Experience
      </h1>
      <div class="is-flex-desktop mb-5">
        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          class="experience-hero__mof"
        >
          <div>
            <a
              href="https://matterofform.com/"
              aria-label="Link to Matter of Form"
              alt="Link to Matter of Form"
              >Matter of Form</a
            >
            <p class="subtitle">|</p>
            <p class="subtitle">Web Developer Intern</p>
            <p class="subtitle">|</p>
            <p class="subtitle">Aug 2019 - Aug 2020</p>
          </div>
          <div class="is-flex-desktop">
            <p class="experience-hero__description">
              I worked to tight deadlines with a small development team to
              deliver module based builds for luxury enterprise clients. I
              received designs in Sketch from the exceedingly talented art and
              UX team, then worked to develop them using Vue, Vuex, and
              Typescript. I participated in and became aware of agile ceremonies
              and development procedures. Whilst advancing through sprints, I
              was mentored closely by the team players and expert developers.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          class="experience-hero__fl"
        >
          <div>
            <p class="subtitle">Freelance</p>
            <p class="subtitle">|</p>
            <p class="subtitle">Full Stack Developer</p>
            <p class="subtitle">|</p>
            <p class="subtitle">Mar 2020 - Ongoing</p>
          </div>
          <div class="is-flex-desktop">
            <p class="experience-hero__description">
              After a successful internship, I decided to expand on my
              development skills and undertake additional freelance projects. So
              far, I have worked for clients with progressive businesses
              (details of my
              <nuxt-link
                to="/projects"
                aria-label="Link to all projects"
                alt="Link to all projects"
                >experience can be viewed here</nuxt-link
              >). The back-end work on some of these projects was in Laravel,
              and I've explored CSS frameworks such as Bulma, Tailwind and
              Bootstrap. Every project has included ES6 Javascript, alongside a
              choice of Vue or Nuxt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience-hero {
  .subtitle {
    margin-bottom: 0.8rem;
  }
  &__description {
    margin-top: 1rem;
  }

  &__mof {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid $gray;

    @include lg {
      border-bottom: 0;
      border-right: 2px solid $gray;
      padding-right: 2rem;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }

  &__fl {
    @include lg {
      margin-left: 2rem;
    }
  }
}
</style>
