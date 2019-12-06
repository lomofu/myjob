<template>
  <div>
    <user-nav>
      <v-btn outlined class="mr-4" @click="handleClick">
        <v-icon small>mdi-view-list</v-icon>
        <span class="ml-1">前往排班</span>
      </v-btn>
    </user-nav>
    <v-row>
      <v-col class="col-5 justify-center"> 1</v-col>
      <v-divider vertical></v-divider>
      <v-col class="col-6">2</v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>3</v-row>
  </div>
</template>

<script>
export default {
  name: "projectIndex",
  components: {
    userNav: () => import("../../public/user/userNav.vue")
  },
  methods: {
    handleClick() {
      this.$emit("fuc");
    }
  }
};
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;

  width: 100vw;
}
</style>
