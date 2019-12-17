<template>
  <div class="d-flex justify-center my-8">
    <v-card height="50vh" min-width="35vw" outlined>
      <v-card-text class="card-up">
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
        <v-list-item>
          {{ projectInfo.description }}
        </v-list-item>
      </v-card-text>
      <v-card-text class="d-flex flex-column  justify-start">
        <v-list-item> 团队: {{ projectInfo.team }} </v-list-item>
        <v-list-item
          v-if="
            projectInfo.member !== undefined && projectInfo.member.length !== 0
          "
        >
          总人数:
          {{ totalMember }}
        </v-list-item>
        <v-list-item> 创建时间: {{ projectInfo.createdTime }} </v-list-item>
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
  methods: {
    fetchData(to) {
      let { pid } = to.params;
      let project = this.$store.getters.getProject;
      if (project !== null) this.projectInfo = project.find(e => e.id == pid);
    }
  },
  computed: {
    hasPicture() {
      return (
        this.projectInfo.picture !== null &&
        this.projectInfo.picture !== "" &&
        this.projectInfo.picture !== undefined
      );
    },
    totalMember() {
      let amount = this.projectInfo.member.length;
      return amount === 0 ? 0 : amount;
    }
  },
  watch: {
    $route(to) {
      this.fetchData(to);
    }
  },
  mounted() {
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
