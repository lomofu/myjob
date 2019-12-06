<template>
  <div class="d-flex justify-center my-8">
    <v-card height="55vh" min-width="35vw" outlined>
      <v-card-text class="card-up">
        <v-row align="center">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ projectInfo.name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-avatar tile size="150">
              <img :src="projectInfo.picture" alt="owner" v-if="hasPicture" />
              <v-icon v-else size="150">mdi-book</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-row>
        <div>
          {{ projectInfo.description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    projectInfo: {},
    selection: 1
  }),
  computed: {
    hasPicture() {
      return (
        this.projectInfo.picture !== null ||
        this.projectInfo.picture !== "" ||
        this.projectInfo.picture !== undefined
      );
    }
  },
  created() {
    let { pid } = this.$route.params;
    let project = this.$store.getters.getProject;
    if (project !== null) this.projectInfo = project.find(e => e.id == pid);
  }
};
</script>
<style scoped>
.card-up {
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);
  background: linear-gradient(to right, #fffcdc, #d9a7c7);
}
</style>
