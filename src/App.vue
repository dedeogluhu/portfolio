<template>
  <div id="app">
    <mainInfo />
    <tabsSection />
    <vFooter />
  </div>
</template>

<script>
import mainInfo from "./components/main-info";
import tabsSection from "./components/tabs-section";
import vFooter from "./components/v-footer";

export default {
  name: "App",
  components: {
    mainInfo,
    tabsSection,
    vFooter,
  },
};
</script>

<style>
* {
  font-family: Noto Sans, Helvetica, sans-serif;
}
#app {
  /* #d6d8d9 */
  background-color: white;
  min-height: 100vh;
}
</style>
