<template>
  <section class="section" v-if="intro">
    <img
      :src="require(`~/assets/${intro.imageName}`)"
      style="width: 40%"
      class="is-block m-auto p-5"
    />

    <h1 class="title has-text-centered has-text-weight-light">
      Hola! Soy
      <strong class="has-text-weight-bold has-text-primary">{{
        intro.name
      }}</strong>
    </h1>
    <p class="is-italic has-text-centered">
      {{ intro.aboutMe }}
    </p>
  </section>
</template>

<script>
export default {
  props: ["intro"],
};
</script>
