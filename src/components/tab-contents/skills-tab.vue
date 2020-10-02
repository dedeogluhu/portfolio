<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold bg-light">Frontend</li>
          <li
            class="list-group-item bg-light"
            v-for="element in frontend"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold bg-light">Backend</li>
          <li
            class="list-group-item bg-light"
            v-for="element in backend"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold bg-light">Other</li>
          <li
            class="list-group-item bg-light"
            v-for="element in other"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item font-weight-bold bg-light">Languages</li>
          <li
            class="list-group-item bg-light"
            v-for="element in languages"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-tab",
  data: function () {
    return {
      frontend: ["Javascript", "Vuejs", "Html", "Css"],
      backend: ["Javascript", "Python", "C#"],
      other: ["Desktop apps with C#", "Version Control", "MSSQL", "Linux"],
      languages: [
        "Turkish(Native)",
        "English(Advanced)",
        "Chinese(Beginner)",
        "German(Beginner)",
      ],
    };
  },
};
</script>

<style>
</style>