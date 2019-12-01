<template>
  <v-row class="animated fadeIn login" justify="center">
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="4"
      lg="4"
      xl="3"
      class="login-left d-sm-none d-md-table-row animated fadeInLeft"
      align="center"
    >
    </v-col>
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="8"
      lg="8"
      xl="9"
      class="animated fadeInRight"
    >
      <div class="login-btn-back">
        <v-btn
          class="ma-2"
          outlined
          color="deep-purple lighten-1"
          @click="$router.back(-1)"
        >
          <v-icon> {{ content.btn.icon }}</v-icon>
          {{ content.btn.word }}</v-btn
        >
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
              <img src="../../public/img/icon/icon-color.png" alt="icon" />
              <div class="login-ben">Ben.</div>
            </v-col>
          </v-row>
          <p class="text-center login-content-subtitle ">
            {{ content.subtitle }}
          </p>
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              align="center"
            >
              <panel class="panel" />
            </v-col>
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
  },
  data: () => ({
    content: {
      btn: {
        icon: "mdi-arrow-left",
        word: "返 回"
      },
      subtitle: " 花费很少的时间分享日程安排"
    }
  })
};
</script>
<style lang="scss">
@import "@/assets/css/login/login.scss";
</style>
