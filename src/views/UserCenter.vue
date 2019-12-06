<template>
  <div class="user">
    <user-nav :user="user" :menu="menu"></user-nav>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <user-info :user="user"></user-info>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  components: {
    userNav: () => import("../components/user/slicenav/usernav.vue"),
    userInfo: () => import("../components/user/slicenav/userinfo.vue")
  },
  data: () => ({
    user: {},
    menu: []
  }),
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  mounted() {
    this.menu = this.$store.getters.getMenu;
    this.user = this.$store.getters.getUser;
  }
};
</script>

<style lang="scss">
@include div;

.user {
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
}
.container {
  padding: 1px;
}
</style>
