<template>
  <v-row class="animated fadeIn">
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="4"
      lg="4"
      xl="4"
      class="left d-none d-sm-flex animated fadeInLeft "
    >
    </v-col>
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="8"
      lg="8"
      xl="8"
      class="animated fadeInRight"
    >
      <div class="btn-back">
        <router-link to="/">
          <v-btn class="ma-2" outlined color="deep-purple lighten-1">
            <v-icon>
              mdi-arrow-left
            </v-icon>
            返 回</v-btn
          >
        </router-link>
      </div>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          class="text-center"
        >
          <v-row justify="center">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
              <img
                src="../../public/img/icon/icon-color.png"
                alt="icon"
                style="width: 70px;height: 70px"
              />
              <div class="login-ben">Ben.</div>
            </v-col>
          </v-row>
          <p class="text-center content-subtitle ">
            花费很少的时间分享日程安排
          </p>
          <v-row justify="center">
            <panel />
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "login",
  components: {
    panel: () => import("../components/login/loginPanel.vue")
  }
};
</script>
<style scoped>
body {
}
div {
  margin: 0;
  padding: 0;
}
p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  color: grey;
}
.content-subtitle::before {
  content: "";
  width: 100%;
  height: 30px;
  display: block;
  pointer-events: none;
}
.content-subtitle {
  font-family: PingFangLight, Microsoft YaHei, 黑体, sans-serif;
  font-weight: lighter;
  font-size: 25px;
  letter-spacing: 1px;
}

.content-subtitle::after {
  content: "";
  width: 100%;
  height: 20px;
  display: block;
  pointer-events: none;
}
.left {
  background: #ffd89b;
  background: -webkit-linear-gradient(to right, #198bb3, #fff395);
  background: linear-gradient(to right, #1e73a8, #ffd89b);
  width: 95%;
  margin: 0;
  padding: 0;
  opacity: 0.9;
}
.login-ben {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bold;
  font-size: 40px;

  margin: auto auto 10px 15px;
}
.btn-back::before {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
}
.btn-back::after {
  content: "";
  display: block;
  width: 100%;
  height: 20px;
}

@media screen and (max-width: 980px) {
  .left {
    display: none;
  }
}
</style>
