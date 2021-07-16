<template>
  <footer class="footer pb-6" v-if="intro">
    <div class="content has-text-centered">
      <p>
        Hecho con dos 🥚🥚 por
        <a :href="intro.linkedinProfile">{{ intro.name }}</a
        >.
      </p>
      <a :href="intro.linkedinProfile" aria-label="linkedin">
        <i class="devicon-linkedin-plain is-size-5"></i>
      </a>
      <a :href="intro.githubProfile" aria-label="github">
        <i class="devicon-github-original is-size-5"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      intro: null,
    };
  },
  async fetch() {
    this.intro = await this.$content("intro").fetch();
  },
};
</script>
