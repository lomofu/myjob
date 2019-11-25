<template>
  <v-app transition="slide-y-transition">
      <div id="loading" v-if="show">
        <load id="loading-animate" />
      </div>
      <router-view />
  </v-app>
</template>

<script>
import load from "@/components/public/load.vue";
export default {
  name: "App",
  components: {
    load
  },
  data: () => ({
    show: true
  }),
  created() {
    let me = this;
    setTimeout(function() {
      me.show = !me.show;
    }, 800);
  }
};
</script>
<style>
#loading {
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
}
#loading-animate {
  position: absolute;
  left: 50%;
  top: 50%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
</style>
