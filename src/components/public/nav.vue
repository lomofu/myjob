<template>
  <div>
    <v-row>
      <v-app-bar :dark="light" :elevate-on-scroll="true" fixed class="nav-bar">
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" class="d-flex">
          <v-icon :left="true" size="45" class="nav-icon">mdi-grain</v-icon>
          <span class="nav-title">Ben.</span>
        </v-col>

        <v-col class="d-flex d-sm-none nav-phone-btn">
          <v-btn dark small color="teal" @click="showMenu = !showMenu">
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
          <v-expand-transition>
            <v-list
              light
              v-show="showMenu"
              class="phone-showMeun text-center"
              @mouseleave="handleLeave"
              elevation="5"
            >
              <v-list-item v-ripple class="list-item">
                <router-link to="/">首页</router-link>
              </v-list-item>
              <v-list-item v-ripple class="list-item">
                <router-link to="/">价格 </router-link>
              </v-list-item>
              <v-list-item v-ripple class="list-item">
                <router-link to="/about">支持 </router-link>
              </v-list-item>
              <v-list-item v-ripple class="list-item">
                <router-link to="/login">登录</router-link>
              </v-list-item>
              <v-list-item v-ripple class="list-item">
                <router-link to="/login">注册</router-link>
              </v-list-item>
            </v-list>
          </v-expand-transition>
        </v-col>

        <v-col
          cols="12"
          xs="10"
          md="10"
          sm="10"
          lg="10"
          xl="10"
          style="text-align: end"
          class="d-none d-sm-table"
        >
          <router-link to="/">
            <v-btn class="nav-btn-select" text>首页</v-btn>
          </router-link>
          <v-btn class="nav-btn-select" text>价格</v-btn>
          <router-link to="/about"
            ><v-btn class="nav-btn-select" text>支持</v-btn></router-link
          >
          <router-link to="/login"
            ><v-btn class="btn-select" text>登录</v-btn></router-link
          >
          <v-btn class="nav-btn-select" outlined>
            <v-icon style="margin-right: 5px"
              >mdi-account-multiple-plus-outline</v-icon
            >注册
          </v-btn>
        </v-col>
      </v-app-bar>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      light: true,
      showMenu: false
    };
  },
  methods: {
    handleLeave() {
      let me = this;
      setTimeout(() => {
        me.showMenu = !me.showMenu;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/public/nav.scss";
</style>
