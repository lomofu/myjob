<template>
  <div>
    <user-nav :title="getTitle">
      <v-btn outlined class="mr-4" @click="setToday">
        Today
      </v-btn>
      <v-btn fab text small @click="prev">
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text small @click="next">
        <v-icon small>mdi-chevron-right</v-icon>
      </v-btn>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn outlined v-on="on">
            <span>{{ typeToLabel[type] }}</span>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="type = 'day'">
            <v-list-item-title>Day</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'week'">
            <v-list-item-title>Week</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'month'">
            <v-list-item-title>Month</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </user-nav>
    <v-btn-toggle borderless class="d-flex justify-end pa-3">
      <v-btn>
        <span class="hidden-sm-and-down">排班模式</span>
        <v-icon right>mdi-poll</v-icon>
      </v-btn>
      <v-btn>
        <span class="hidden-sm-and-down">日历模式</span>
        <v-icon right>mdi-calendar</v-icon>
      </v-btn>
    </v-btn-toggle>
    <calender ref="projectCalendar" :type="type"> </calender>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: () => ({
    projectInfo: null,
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day"
    }
  }),
  methods: {
    setToday() {
      this.$refs.projectCalendar.setToday();
    },
    prev() {
      this.$refs.projectCalendar.prev();
    },
    next() {
      this.$refs.projectCalendar.next();
    }
  },
  components: {
    userNav: () => import("../public/user/userNav.vue"),
    calender: () => import("./project/calendar.vue")
  },
  computed: {
    getTitle() {
      let projectId = this.projectInfo.name;
      return `项目 | ${projectId}`;
    }
  },
  created() {
    let { pid } = this.$route.params;
    let project = this.$store.getters.getProject;
    if (project !== null) {
      this.projectInfo = project.find(e => e.id == pid);
    }
  }
};
</script>

<style scoped></style>
