<template>
  <div id="app">
    <div id="background"></div>
    <div class="container">
      <mainInfo />
      <tabsSection />
    </div>
  </div>
</template>

<script>
import mainInfo from "./components/main-info";
import tabsSection from "./components/tabs-section";

export default {
  name: "App",
  components: {
    mainInfo,
    tabsSection,
  },
};
</script>

<style>
* {
  font-family: Noto Sans, Helvetica, sans-serif;
}
#app {
  /* Gray */
  min-height: 100vh;
}
#background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url("assets/code-bg2.jpg");
  background-repeat: repeat-y;
  background-size: 100%;
  background-attachment: fixed;
  filter: blur(5px);
}
</style>
