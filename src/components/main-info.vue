<template>
  <div class="container pt-4">
    <div class="card">
      <h4 class="card-header">Hüseyin Dedeoğlu</h4>
      <div class="card-body bg-light">
        <h5 class="row">
          <div class="col">
            Hi There <a href="#" class="cursor">👋</a>

            <h5 class="card-text">
              <br />
              I'm a passionate web developer who loves to build stuff.
            </h5>
          </div>
          <div class="col text-right">
            <a
              href="mailto:huseyin_dedeoglu1@outlook.com"
              class="btn btn-primary m-2"
            >
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                size="lg"
                class="icon-size"
              />
            </a>
            <a href="https://github.com/dedeogluhu" class="btn btn-dark m-2">
              <font-awesome-icon
                :icon="['fab', 'github']"
                size="lg"
                class="icon-size"
              />
            </a>
            <a
              href="https://linkedin.com/in/dedeogluhu"
              class="btn btn-primary m-2"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                size="lg"
                class="icon-size"
              />
            </a>
          </div>
        </h5>
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
  text-decoration: none;
  cursor: grab;
}
</style>