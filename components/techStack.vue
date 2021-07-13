<template>
  <section class="section">
    <h1 class="title has-text-centered has-text-primary">Stack Tecnologico</h1>

    <div class="stack-tech is-size-2">
      <div
        class="box has-text-centered"
        v-for="technology in stack.data"
        :key="technology.name"
      >
        <i v-bind:class="`devicon-${technology.name} colored`"></i>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["stack"],
};
</script>


<style lang="scss" scoped>
.stack-tech {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-gap: $size-6;

  .box {
    margin-bottom: 0px;
  }
}
</style>
