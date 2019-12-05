<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="project">
    <user-nav :title="getTitle">
      <v-btn outlined class="mr-4" @click="setToday">
        <v-icon small>mdi-white-balance-sunny</v-icon>
        <span class="ml-1">今天</span>
      </v-btn>
      <v-btn fab text small @click="prev">
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text small @click="next">
        <v-icon small>mdi-chevron-right</v-icon>
      </v-btn>
      <div v-show="!showSchedule">
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn outlined v-on="on" class="mr-2">
              <span>{{ typeToLabel[type] }}</span>
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-1">
            <v-list-item @click="type = 'day'">
              <v-list-item-title>
                <v-icon>mdi-calendar-blank</v-icon>
                天
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'week'">
              <v-list-item-title>
                <v-icon>mdi-calendar-range</v-icon>
                周</v-list-item-title
              >
            </v-list-item>
            <v-list-item @click="type = 'month'">
              <v-list-item-title>
                <v-icon>mdi-calendar-month</v-icon>
                月份
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </user-nav>
    <v-btn-toggle
      color="teal"
      borderless
      class="d-flex justify-end pa-1 mr-6"
      v-model="toggle_exclusive"
      size
    >
      <v-btn
        @click="showSchedule ? showSchedule : (showSchedule = !showSchedule)"
      >
        <span class="hidden-sm-and-down">排班模式</span>
        <v-icon right>mdi-poll</v-icon>
      </v-btn>
      <v-btn
        @click="!showSchedule ? showSchedule : (showSchedule = !showSchedule)"
      >
        <span class="hidden-sm-and-down">日历模式</span>
        <v-icon right>mdi-calendar</v-icon>
      </v-btn>
    </v-btn-toggle>
    <schedule ref="projectCalendar" v-if="showSchedule"></schedule>
    <calender
      ref="projectCalendar"
      :type="type"
      v-else
      @updateType="handleUpdateType"
    >
    </calender>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: () => ({
    projectInfo: null,
    type: "month",
    typeToLabel: {
      month: "月份",
      week: "周",
      day: "天"
    },
    showSchedule: true,
    toggle_exclusive: 0
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
    },
    handleUpdateType(data) {
      this.type = data;
    }
  },
  components: {
    userNav: () => import("../public/user/userNav.vue"),
    calender: () => import("./project/calendar.vue"),
    schedule: () => import("./project/schedule.vue")
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

<style scoped>
div {
  margin: 0;
  padding: 0;
}
</style>
