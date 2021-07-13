<template>
  <div>
    <section class="section">
      <h1 class="title has-text-centered has-text-weight-light">
        Hola! Soy
        <strong class="has-text-weight-bold has-text-primary"
          >Adrián Sanchís Gallego 😉</strong
        >
      </h1>
      <p class="is-italic has-text-centered">
        Software developer especializado en front-end. Soy un entusiasta del
        desarrollo de aplicaciones web y del diseño de interfaces. Apasionado
        por el aprendizaje autodidacta y alguien autocrítico con mi trabajo,
        buscando mejorar constantemente. Me considero alguien directo y
        responsable. Actualmente vivo en Alicante. Apasionado de la naturaleza y
        aficionado del mundo del motor.
      </p>
    </section>

  <tech-stack :stack="stack" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const stack = await $content("/stack").fetch();
    return { stack };
  },
};
</script>
