<template>
  <v-app-bar :color="color" dark app :elevate-on-scroll="true">
    <v-app-bar-nav-icon @click="resizeNav"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="time">{{ date }}</div>
    <v-spacer></v-spacer>
    <slot></slot>
  </v-app-bar>
</template>

<script>
import { eventBus } from "../../../main";
import dayjs from "dayjs";
export default {
  name: "userNav",
  props: ["title", "color"],
  data: () => ({
    date: new Date()
  }),
  methods: {
    resizeNav() {
      this.mini = !this.mini;
      eventBus.$emit("miniNav", this.mini);
    }
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.date = dayjs().format("YYYY年MM月DD日 ddd HH:mm:ss");
    });
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped></style>
