<template>
  <v-app>
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
    }, 1000);
  }
};
</script>
<style>
.v-application {
  background: white !important;
}
div {
  margin: 0 0 0 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#loading {
  z-index: 999;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
#loading-animate {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -80px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
</style>
