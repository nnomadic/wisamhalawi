<template>
  <section class="section hero experience-hero">
    <div class="container">
      <h1 data-aos="fade-up" data-aos-duration="2500" class="mb-6">
        professional experience
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
              I worked to tight deadlines with an intimate development team to
              deliver module based builds for luxury enterprise clients. I
              received designs in Sketch from the extremely talented art and UX
              team then worked to develop them using Vue, Vuex, Typescript. I
              participated in and became aware of agile ceromonies and
              development procedures whilst advancing through sprints
              effectively along with the team players and expert developers.
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
              A chance appeared for me to learn new skills and expand what I've
              learnt from my internship in the form of a quarantine. Since then
              I've taken on multiple freelance projects (which you can read
              about
              <nuxt-link
                to="/projects"
                aria-label="Link to all projects"
                alt="Link to all projects"
                >here to view all projects</nuxt-link
              >). The back-end work on some of these projects were in Laravel,
              and I've explored css frameworks such as Bulma, Tailwind and
              Bootstrap. Every project has had ES6 Javascript involved,
              alongside a choice of Vue or Nuxt.
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
