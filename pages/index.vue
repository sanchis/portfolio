<template>
  <div>
    <Intro :intro="intro" />
    <Projects :projects="projects" />
    <Tech-stack :stack="stack" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const [stack, projects, intro] = await Promise.all([
      $content("stack").fetch(),
      $content("projects").fetch(),
      $content("intro").fetch(),
    ]);
    return { stack, projects, intro };
  },
};
</script>
