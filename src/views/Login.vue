<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" class="left-parent">
      <div class="left  d-none d-sm-flex"></div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
      <router-link to="/">
        <v-btn class="ma-2" outlined color="indigo">
          <v-icon>
            mdi-arrow-back
          </v-icon>
          主页</v-btn
        >
      </router-link>

      <v-row style="position:relative;top: 20%">
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
          <p
            class="text-center headline font-weight-thin "
            style="margin-top: 50px"
          >
            花费很少的时间分享日程安排
          </p>
          <v-row justify="center" style="margin: 50px auto">
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
.left {
  background-image: url("../../public/index/login-ben.png");
  width: auto;
  height: 100vh;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  opacity: 0.8;
}

@media screen and (max-width: 960px) {
  .left-parent {
    display: none;
  }
}
</style>
