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
      <v-col class="col-12 col-sm-6"
        ><projectCard class="pa-3"></projectCard
      ></v-col>
    </v-row>
    <v-divider></v-divider>
    <br />
    <div
      class="d-flex justify-center"
      style="position: absolute;z-index: 1;width: 85vw"
    >
      <stack :datas="pages"></stack>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  name: "projectIndex",
  components: {
    userNav: () => import("../../public/user/userNav.vue"),
    projectChart: () => import("./projectChart.vue"),
    projectCard: () => import("./projectCard.vue"),
    stack: () => import("../../public/user/stack.vue")
  },
  data: () => ({
    projectInfo: "",
    pages: [
      {
        html:
          '<img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" alt="01">'
      },
      {
        html: '<img src="https://picsum.photos/id/11/500/300" alt="01">'
      },
      {
        html: '<img src="https://picsum.photos/510/300?random" alt="01">'
      }
    ]
  }),
  methods: {
    handleClick() {
      this.$emit("fuc");
      eventBus.$emit("getProjectTitle", this.projectInfo.name);
    },
    fetchData(to) {
      const { pid } = to.params;
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
