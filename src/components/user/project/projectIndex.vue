<template>
  <div>
    <user-nav :title="getTitle">
      <v-btn outlined class="mr-4" @click="handleClick">
        <v-icon small>mdi-view-list</v-icon>
        <span class="ml-1">前往排班</span>
      </v-btn>
    </user-nav>
    <v-row>
      <v-col class="col-12 col-sm-6"
        ><projectChart class="pa-3"></projectChart
      ></v-col>
      <v-col class="col-12 col-sm-6"><projectCard class="pa-3"></projectCard></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>3</v-row>
  </div>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  name: "projectIndex",
  components: {
    userNav: () => import("../../public/user/userNav.vue"),
    projectChart: () => import("./projectChart.vue"),
    projectCard: () => import("./projectCard.vue")
  },
  data: () => ({
    projectInfo: ""
  }),
  methods: {
    handleClick() {
      debugger;
      this.$emit("fuc");
      eventBus.$emit("getProjectTitle", this.projectInfo.name);
    },
    fetchData(to) {
      let { pid } = to.params;
      let project = this.$store.getters.getProject;
      if (project !== null) this.projectInfo = project.find(e => e.id == pid);
    }
  },
  computed: {
    getTitle() {
      let projectName = this.projectInfo.name;
      return `项目 | ${projectName}`;
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
  },
  beforeDestroy() {
    eventBus.$off("getProjectTitle");
  }
};
</script>

<style scoped></style>
