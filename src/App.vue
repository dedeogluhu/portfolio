<template>
  <div id="app" class="bg-light">
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
  height: 100vh;
}
</style>
