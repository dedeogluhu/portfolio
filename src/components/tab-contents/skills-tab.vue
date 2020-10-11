<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold bg-light">Languages</li>
          <li
            class="list-group-item bg-light"
            v-for="element in programmingLanguages"
            :key="element"
          >
            {{ element }}
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item font-weight-bold bg-light">Frameworks</li>
          <li
            class="list-group-item bg-light"
            v-for="element in frameworks"
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
          <li class="list-group-item font-weight-bold bg-light">Speaking</li>
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
      programmingLanguages: ["Javascript", "Python", "C#", "Html/Css"],
      frameworks: ["Vuejs", "Nodejs", "Expressjs", "Django"],
      other: ["Desktop apps", "Version Control", "MongoDB", "MSSQL"],
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