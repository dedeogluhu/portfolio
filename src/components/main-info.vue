<template>
  <div class="container pt-4">
    <div class="card">
      <h4 class="card-header">Hüseyin Dedeoğlu</h4>
      <div class="card-body">
        <h5 class="card-title">Hi There <span class="cursor">👋</span></h5>
        <h5 class="card-text">
          I'm a passionate fullstack developer who loves to build web stuff.
        </h5>
        <p class="card-text">You can reach me here:</p>
        <a
          href="mailto:huseyin_dedeoglu1@outlook.com"
          class="btn btn-primary m-3"
        >
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            size="lg"
            class="icon-size"
          />
        </a>
        <a href="https://github.com/dedeogluhu" class="btn btn-secondary m-3">
          <font-awesome-icon
            :icon="['fab', 'github']"
            size="lg"
            class="icon-size"
          />
        </a>
        <a
          href="https://linkedin.com/in/dedeogluhu"
          class="btn btn-primary m-3"
        >
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="lg"
            class="icon-size"
          />
        </a>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "main-info",
};
</script>
  
<style scoped>
.icon-size {
  font-size: 35pt;
}
.cursor {
  cursor: grab;
}
</style>