<template>
  <v-app>
    <div id="loading" v-if="show">
      <load id="loading-animate" />
    </div>
    <router-view v-if="content" />
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
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    load: () => import("@/components/public/load.vue")
  },
  data: () => ({
    show: true,
    content: false,
    btn: false,
    icon: "mdi-chevron-up"
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
    }, 800);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style src="../public/font/font.css"></style>
<style lang="scss">
@import "@/assets/css/global/app.scss";
</style>
