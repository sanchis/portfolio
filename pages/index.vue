<template>
  <div>
    <section>
      <h1 class="title has-text-centered has-text-weight-light">
        Hola! Soy
        <strong class="has-text-weight-bold has-text-primary"
          >Adrián Sanchís Gallego 😉</strong
        >
      </h1>
      <p class="is-italic">
        Software developer especializado en front-end. Soy un entusiasta del
        desarrollo de aplicaciones web y del diseño de interfaces. Apasionado
        por el aprendizaje autodidacta y alguien autocrítico con mi trabajo,
        buscando mejorar constantemente. Me considero alguien directo y
        responsable. Actualmente vivo en Alicante. Apasionado de la naturaleza y
        aficionado del mundo del motor.
      </p>
    </section>

    <section class="stack-tech">
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
      <div class="box">I'm in a box.</div>
    </section>
    <b-tag>Tag label</b-tag>
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/placeholder-1280x960.png" alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="/static/img/placeholder-1280x960.png" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.stack-tech {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-gap: $size-4;
}
</style>
