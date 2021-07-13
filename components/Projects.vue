<template>
  <section class="section" v-if="projects && projects.data.length > 0">
    <h1 class="title has-text-centered has-text-primary">Proyectos</h1>
  </section>
</template>

<script>
export default {
  props: ["projects"]
};
</script>
