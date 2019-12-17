<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="project">
    <user-nav :title="title">
      <v-btn outlined class="mr-4" @click="setToday">
        <v-icon small>mdi-white-balance-sunny</v-icon>
        <span class="ml-1">今天</span>
      </v-btn>
      <v-btn fab text small @click="prev">
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text small @click="next" class="mr-3">
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
      <v-dialog v-model="dialog" max-width="350">
        <template v-slot:activator="{ on }">
          <v-btn outlined class="mr-4" :loading="push" v-on="on">
            <v-icon small>mdi-arrow-up-bold-circle</v-icon>
            <span class="ml-2">推送</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>确认推送?</v-card-title>
          <v-card-subtitle class="mt-1">请选择推送方式</v-card-subtitle>
          <v-card-text>
            <v-checkbox
              v-model="selected"
              label="邮件"
              value="email"
            ></v-checkbox>
            <v-checkbox
              v-model="selected"
              label="短信"
              value="message"
            ></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click.stop="dialog = !dialog">取消</v-btn>
            <v-btn color="green" text @click="handlePush">确定</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </user-nav>
    <div class="d-flex justify-space-between mt-3">
      <v-btn class="mt-2 ml-1" @click="handleBack" text color="purple">
        <v-icon>mdi-chevron-left</v-icon>返回
      </v-btn>
      <v-btn-toggle
        color="teal"
        borderless
        class="pa-1 mr-6"
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
    </div>

    <schedule ref="projectCalendar" v-if="showSchedule"></schedule>
    <calender
      ref="projectCalendar"
      :type="type"
      v-else
      @updateType="handleUpdateType"
    >
    </calender>
    <pushBar ref="pushBar"></pushBar>
  </div>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  name: "Project",
  components: {
    userNav: () => import("../../public/user/userNav.vue"),
    calender: () => import("../project/calendar.vue"),
    schedule: () => import("../project/schedule.vue"),
    pushBar: () => import("../project/pushBar.vue")
  },
  data: () => ({
    projectInfo: null,
    title: "",
    type: "month",
    typeToLabel: {
      month: "月份",
      week: "周",
      day: "天"
    },
    showSchedule: true,
    dialog: false,
    push: false,
    toggle_exclusive: 0,
    selected: [],
    snackbar: false,
    snackbarInfo: ""
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
    },
    timer() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let res = this.selected.filter(e => e === "email" || e === "message");
          res.length && resolve(res);
          res.length <= 0 && reject();
        }, 1000);
      });
    },
    async handlePush() {
      this.dialog = true;
      this.push = true;
      try {
        let res = await this.timer();
        this.$refs.pushBar.show.info = true;
        if (res.length === 1 && res.filter(e => e === "email").length > 0) {
          window.console.log("1");
          setTimeout(() => {
            this.$refs.pushBar.show.success = true;
          });
        } else if (
          res.length === 1 &&
          res.filter(e => e === "message").length
        ) {
          this.$refs.pushBar.show.error = true;
        } else {
          this.$refs.pushBar.show.success = true;
        }
        this.push = false;
      } catch (e) {
        this.push = false;
        this.dialog = false;
        return false;
      } finally {
        this.dialog = !this.dialog;
      }
    },
    handleBack() {
      this.$emit("fuc");
    }
  },
  created() {
    eventBus.$on("getProjectTitle", message => {
      this.title = `项目 | ${message}`;
    });
  },
  beforeDestroy() {
    eventBus.$off("getProjectTitle");
  }
};
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
}
</style>
