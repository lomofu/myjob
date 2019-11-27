<template>
  <div class="bfooter text-center" style="background: #00acc1;color: white">
    <v-icon size="80" color="white">mdi-grain</v-icon>
    <p class="display-1 font-weight-black">Ben.</p>
    <p class="text-center">
      ©2019, Ben. Web Services,
    </p>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      light: true
    };
  }
};
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
}
.text-center {
  width: 100vw;
}
</style>
