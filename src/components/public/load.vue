<template>
  <div class="text-center">
    <v-progress-circular indeterminate :color="showColor"></v-progress-circular>
  </div>
</template>

<script>
const color = ["primary", "red", "purple", "green", "amber"];
export default {
  name: "load",
  data: () => ({
    showColor: ""
  }),
  mounted() {
    let me = this;
    let count = 0;
    setInterval(function() {
      if (count === color.length) {
        count = 0;
      }
      me.showColor = color[count++];
      return;
    }, 2000);
  }
};
</script>

<style scoped></style>
