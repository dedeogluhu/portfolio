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
#app {
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>
