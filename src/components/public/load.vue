<template>
  <div class="text-center">
    <v-icon :light="true" size="35" :color="showColor">mdi-grain</v-icon>
    <span
      class="headline font-weight-black my-title"
      :style="{ color: showColor, marginLeft: '10px' }"
      >Ben</span
    >
    <v-progress-circular
      indeterminate
      :color="showColor"
      class="circular"
    ></v-progress-circular>
  </div>
</template>

<script>
const color = ["red", "purple", "green", "amber", "primary"];
export default {
  name: "load",
  data: () => ({
    showColor: "amber"
  }),
  mounted() {
    let me = this;
    let count = 0;
    setInterval(function() {
      if (count === color.length) {
        count = 0;
      }
      me.showColor = color[count++];
      return false;
    }, 1000);
  }
};
</script>

<style scoped>
.circular {
  margin-left: 20px;
}
</style>
