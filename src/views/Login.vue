<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="2" lg="1" xl="5" class="left-parent">
      <div class="left  d-none d-sm-flex"></div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="10" lg="7" xl="7">
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
              <img
                src="../../public/index/icon-color.png"
                alt="icon"
                style="width: 70px;height: 70px"
              />
              <span
                class="display-1 font-weight-black"
                style="margin: auto auto 10px 10px "
                >Ben.</span
              >
            </v-col>
          </v-row>
          <p class="text-center headline font-weight-thin content-subtitle ">
            花费很少的时间分享日程安排
          </p>
          <v-row justify="center">
            <panel />
          </v-row>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "login",
  components: {
    panel: () => import("../components/public/login/loginPanel.vue")
  }
};
</script>
<style scoped>
body {
}
div {
  margin: 0;
  padding: 0;
  background: #f8f8f8;
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
  font-family: "黑体", "STHeiti", "STXihei", "SimHei", "Microsoft YaHei",
    "Apple LiGothic Medium", sans-serif;
}

.content-subtitle::after {
  content: "";
  width: 100%;
  height: 50px;
  display: block;
  pointer-events: none;
}
.left {
  background-image: url("../../public/index/login-ben.png");
  width: 95%;
  height: 100vh;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  background-size: 80vw;
  background-position-y: -100px;
  opacity: 0.7;
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
  height: 120px;
}

@media screen and (max-width: 960px) {
  .left-parent {
    display: none;
  }
}
</style>
