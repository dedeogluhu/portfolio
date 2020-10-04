<template>
  <div class="container mt-4 pb-4">
    <b-card
      no-body
      footer="Copyright © 2020 Hüseyin Dedeoğlu. All rights reserved."
      footer-class="text-center"
    >
      <b-tabs card pills lazy class="bg-light text-dark" align="center">
        <b-tab title="Skills" active>
          <b-card-text>
            <skillsTab />
          </b-card-text>
        </b-tab>
        <b-tab title="Projects">
          <b-card-text>
            <projectsTab />
          </b-card-text>
        </b-tab>
        <b-tab title="Resume">
          <b-card-text>
            <resumeTab />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import skillsTab from "./tab-contents/skills-tab";
import projectsTab from "./tab-contents/projects-tab";
import resumeTab from "./tab-contents/resume-tab";

export default {
  name: "tabs-section",
  components: {
    skillsTab,
    projectsTab,
    resumeTab,
  },
};
</script>

<style scoped>
</style>