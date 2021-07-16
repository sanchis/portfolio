<template>
  <section class="section" v-if="projects && projects.data.length > 0">
    <h1 class="title has-text-centered has-text-accent">Proyectos</h1>

    <div
      class="box columns"
      v-for="project in projects.data"
      :key="project.name"
    >
      <figure class="is-one-fifth column has-text-centered-mobile">
        <img :src="project.imgUrl" :alt="`project-${project.name}`" />
      </figure>
      <div class="column">
        <h3 class="is-size-3">{{ project.name }}</h3>
        <p class="content">{{ project.summary }}</p>
        <div class="stack columns">
          <div class="column has-text-centered-mobile">
            <b-tag
              type="is-light is-medium"
              v-for="technology in project.stack"
              :key="`${project.name}-${technology}`"
            >
              <i v-bind:class="`devicon-${technology} colored`"></i>
            </b-tag>
          </div>
          <div class="column has-text-right has-text-centered-mobile">
            <a :href="project.source" class="button is-dark">
              <span class="icon">
                <i class="devicon-github-original"></i>
              </span>
              <span>Codigo fuente</span>
            </a>
            <a :href="project.demo" class="button is-accent">
              <span class="icon">
                <i class="devicon-devicon-plain colored"></i>
              </span>
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projects"],
};
</script>
