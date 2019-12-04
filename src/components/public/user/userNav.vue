<template>
  <v-app-bar :color="color" dark app :elevate-on-scroll="true">
    <v-app-bar-nav-icon @click="resizeNav"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  name: "userNav",
  props: ["title", "color"],
  methods: {
    resizeNav() {
      this.mini = !this.mini;
      eventBus.$emit("miniNav", this.mini);
    }
  }
};
</script>

<style scoped></style>
