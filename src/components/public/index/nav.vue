<template>
  <div>
    <v-row>
      <v-app-bar :dark="light" :elevate-on-scroll="true" fixed class="nav-bg">
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" class="d-flex">
          <v-icon
            :left="true"
            size="42"
            style="text-shadow: 0px 0px 16px #00000029"
            >mdi-grain</v-icon
          >
          <span class="my-title" style="text-shadow: 0 0 16px #00000029"
            >Ben.</span
          >
        </v-col>

        <v-col class="d-flex d-sm-none phone-btn">
          <v-btn dark small color="teal" @click="showMenu = !showMenu">
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
          <v-expand-transition>
            <v-list
              light
              v-show="showMenu"
              class="showMeun text-center"
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
            <v-btn class="ma-2" text>首页</v-btn>
          </router-link>
          <v-btn class="ma-2" text>价格</v-btn>
          <router-link to="/about"
            ><v-btn class="ma-2" text>支持</v-btn></router-link
          >
          <router-link to="/login"
            ><v-btn class="ma-2" text>登录</v-btn></router-link
          >
          <v-btn class="ma-2" outlined>
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

<style scoped>
div {
  color: white;
  margin: 0;
  padding: 0;
}

.nav-bg {
  background: #26c6da; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.ma-2 {
  font-family: PingFangNormal, Microsoft YaHei, 黑体, sans-serif;
  padding: 20px;
  font-weight: 400;
}
.my-title {
  position: relative;
  top: 4px;
  left: 10px;
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-size: 35px;
  font-weight: bolder;
  clear: both;
}
.my-title::after {
  display: block;
  content: "";
  width: 100%;
  height: 10px;
}

.phone-btn {
  margin-bottom: 5px;
}

.showMeun {
  z-index: 999;
  right: 1%;
  position: absolute;
  top: 88%;
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  .col-12 {
    flex: 0 1 90% !important;
  }
  .list-item {
    padding: 0 30px 0 30px;
  }
}
</style>
