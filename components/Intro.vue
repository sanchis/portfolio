<template>
  <section class="section" v-if="intro">
    <img
      :src="require(`~/assets/${intro.imageName}`)"
      style="width: 40%"
      class="is-block m-auto p-5"
    />

    <h1 class="title has-text-centered has-text-weight-light">
      Hola! Soy
      <strong class="has-text-weight-bold has-text-accent">{{
        intro.name
      }}</strong>
    </h1>
    <p class="is-italic has-text-centered">
      {{ intro.aboutMe }}
    </p>
    <div class="is-flex is-flex-direction-row is-justify-content-center mt-4 is-size-4">
      <a :href="intro.linkedinProfile" class="box has-text-centered mr-2 ml-2 mb-0 mt-0">
        <i class="devicon-linkedin-plain colored"></i>
      </a>
      <a :href="intro.githubProfile" class="box has-text-centered mr-2 ml-2 mb-0 mt-0">
        <i class="devicon-github-original colored"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["intro"],
};
</script>
