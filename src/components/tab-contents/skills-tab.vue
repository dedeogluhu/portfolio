<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold">Frontend</li>
          <li
            class="list-group-item"
            v-for="element in frontend"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold">Backend</li>
          <li class="list-group-item" v-for="element in backend" :key="element">
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold">Other</li>
          <li class="list-group-item" v-for="element in other" :key="element">
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold">Languages</li>
          <li
            class="list-group-item"
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
      backend: ["Javascript", "Python", ".NET"],
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