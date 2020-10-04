<template>
  <div class="container">
    <b-card
      :title="project.title"
      tag="article"
      class="mb-2"
      v-for="project in projects"
      :key="project.title"
    >
      <div :class="`project-card-image ${project.imageClass}`"></div>
      <b-card-text>
        <br />
        <b-badge
          variant="success"
          v-for="tool in project.tools"
          :key="tool"
          class="badge"
        >
          {{ tool }}
        </b-badge>
        <br />
        {{ project.text }}
      </b-card-text>
      <b-button-group>
        <b-button
          :href="project.live"
          target="_blank"
          variant="outline-primary"
        >
          See Live
        </b-button>
        <b-button
          :href="project.source"
          target="_blank"
          variant="outline-secondary"
        >
          Source
        </b-button>
      </b-button-group>
    </b-card>
    <div class="container mt-5">
      <div class="row justify-content-md-center">
        <a
          target="_blank"
          href="https://github.com/dedeogluhu?tab=repositories"
          class="btn btn-primary text-center"
          >You can find more of my projects here</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects-tab",
  data: function () {
    return {
      projects: [
        {
          title: "My Portfolio",
          text: "A portfolio website made using vue and bootstrap",
          imageClass: "project-image-dedeogluhu",
          live: "https://dedeogluhu.github.io",
          source: "https://github.com/dedeogluhu",
          tools: ["vue", "bootstrap"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 20rem;
}
.card-height {
  height: 10rem;
}
.project-card-image {
  width: 100%;
  height: 200px;
  /* 
  width: 1000px;
  height: 200px;
   */

  overflow: hidden;
}
/* Project Images */
.project-image-dedeogluhu {
  background-image: url(../../assets/Dedeogluhu-screenshot.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border: 0.5px solid gray;
}
.badge {
  margin-left: 4px;
  margin-right: 4px;
}
</style>