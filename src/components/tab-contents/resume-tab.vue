<template>
  <div class="container">
    <b-alert show dismissible fade variant="danger"
      >This is just a test resume it is not real</b-alert
    >

    <img src="../../assets/dummy-resume.jpg" alt="Resume" />
  </div>
</template>

<script>
export default {
  name: "resume-tab",
};
</script>

<style scoped>
.resume-image {
  background-image: url("../../assets/dummy-resume.jpg");
}
img {
  width: 100%;
  height: auto;
}
</style>