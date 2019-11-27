<template>
  <v-app>
    <div id="loading" v-if="show">
      <load id="loading-animate" />
    </div>
    <v-fab-transition>
      <v-btn
        v-show="btn"
        color="pink"
        dark
        fixed
        bottom
        right
        fab
        @click="$vuetify.goTo(0)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
    <router-view v-if="content" />
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
    show: true,
    content: false,
    btn: false
  }),
  methods: {
    handleScroll() {
      let me = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      me.btn = scrollTop > 100;
    }
  },
  created() {
    let me = this;
    setTimeout(function() {
      me.show = !me.show;
      me.content = !me.content;
    }, 1000);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style>
.v-application {
  background: white !important;
}
div {
  margin: 0;
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
.v-application p{
  margin-bottom: 0!important;
}
</style>
