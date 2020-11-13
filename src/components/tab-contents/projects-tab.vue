<template>
  <div class="container">
    <b-card
      :title="project.title"
      tag="article"
      class="mb-2"
      v-for="project in projects"
      :key="project.title"
    >
      <div
        class="project-card-image"
        :style="`
          background-image: url(${project.imageUrl});
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
          border: 0.5px solid gray;
        `"
      ></div>
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
          v-if="project.live"
          :href="project.live"
          target="_blank"
          variant="primary"
        >
          See Live
        </b-button>

        <b-button
          v-else
          :href="project.live"
          target="_blank"
          variant="primary"
          disabled
        >
          <span v-b-tooltip.hover title="Sorry, the app is not hosted yet.">
            See Live
          </span>
        </b-button>
        <b-button
          v-if="project.source"
          :href="project.source"
          target="_blank"
          variant="secondary"
        >
          Source
        </b-button>
        <b-button
          v-else
          :href="project.source"
          target="_blank"
          variant="secondary"
          disabled
        >
          <span
            v-b-tooltip.hover
            title="Sorry, we can't share the source codes."
          >
            Source
          </span>
        </b-button>
      </b-button-group>
    </b-card>
    <div class="container mt-5">
      <div class="row justify-content-md-center">
        <a
          target="_blank"
          href="https://github.com/dedeogluhu?tab=repositories"
          class="btn btn-primary text-center"
        >
          You can find more of my projects here
        </a>
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
          text: "Portfolio website made using vue and bootstrap",
          imageUrl:
            "https://user-images.githubusercontent.com/64230499/99084272-cb10bc00-25d7-11eb-9e68-55a22c2a6191.png",
          live: "https://dedeogluhu.github.io",
          source: "https://github.com/dedeogluhu",
          tools: ["vue", "bootstrap"],
        },
        {
          title: "You Should Draw",
          text: "Drawing app with a drawing suggestion api",
          imageUrl:
            "https://user-images.githubusercontent.com/64230499/96458334-79b81b80-1229-11eb-918b-404740c91c28.png",
          live: "",
          source: "https://github.com/dedeogluhu/YouShouldDraw",
          tools: ["vue", "bootstrap", "node", "express"],
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
  overflow: hidden;
}

.badge {
  margin-left: 4px;
  margin-right: 4px;
}
</style>