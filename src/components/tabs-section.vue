<template>
  <div class="container mt-4">
    <b-card no-body>
      <b-tabs card>
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

<style>
</style>