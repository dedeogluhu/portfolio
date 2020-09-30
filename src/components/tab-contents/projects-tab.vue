<template>
  <div>
    <b-card
      :title="project.title"
      :img-src="project.photo"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
      v-for="project in projects"
      :key="project.title"
    >
      <b-card-text>
        {{ project.text }}
      </b-card-text>
      <b-button-group>
        <b-button :href="project.live" variant="primary">See Live</b-button>
        <b-button :href="project.source" variant="secondary">Source</b-button>
      </b-button-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "projects-tab",
  data: function () {
    return {
      projects: [
        {
          title: "Project1",
          text: "Lorem ipsum dolor sit amet.",
          photo: "https://picsum.photos/1000/200/?image=15",
          live: "https://dedeogluhu.github.io",
          source: "https://github.com/dedeogluhu",
        },
        {
          title: "Project3",
          text: "Lorem ipsum dolor sit amet.",
          photo: "https://picsum.photos/1000/200/?image=25",
          live: "https://dedeogluhu.github.io",
          source: "https://github.com/dedeogluhu",
        },
        {
          title: "Project4",
          text: "Lorem ipsum dolor sit amet.",
          photo: "https://picsum.photos/1000/200/?image=23",
          live: "https://dedeogluhu.github.io",
          source: "https://github.com/dedeogluhu",
        },
      ],
    };
  },
};
</script>

<style>
.card-width {
  width: 20rem;
}
.card-height {
  height: 10rem;
}
</style>