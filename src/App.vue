<template>
  <div id="app">
    <mainInfo />
    <tabsSection />
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
  /* #d6d8d9 */
  background-color: gray;
  min-height: 100vh;
}
</style>
