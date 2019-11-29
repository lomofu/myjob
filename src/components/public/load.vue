<template>
  <div class="text-center" style="display: inline-flex">
    <img
      class="load-img"
      src="../../../public/index/icon-color.png"
      alt="icon"
    />
    <span class="load-word">Ben.</span>
    <div class="circular">
      <v-progress-circular
        indeterminate
        :color="showColor"
      ></v-progress-circular>
    </div>
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
.load-word {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bolder;
  font-size: 35px;
}
.load-img {
  height: 50px;
  width: 50px;
  margin-right: 9px;
}

.circular {
  margin-left: 20px;
}
.circular::before {
  content: "";
  display: block;
  height: 10px;
  width: 10px;
}
</style>
