<template>
  <div class="support">
    <indexNav></indexNav>
    <div class="support-main animated fadeInDown">
      <p class="text-center support-main-title">{{ config.main.title }}</p>
      <p class="text-center support-main-icon">
        <v-icon :color="config.main.iconColor" size="50">{{
          config.main.icon
        }}</v-icon>
      </p>
      <p class="text-center subtitle">
        <v-btn @click="() => this.$vuetify.goTo('#next')" text>
          <v-icon size="35">{{ config.main.content }}</v-icon>
        </v-btn>
      </p>
    </div>
    <v-row align="center" class="support-content animated fadeInUp" id="next">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <p class="supp-title">
          {{ config.main.contents[0].title }}
        </p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" align="center">
        <p>
          <v-icon size="80" color="blue" class="content1-icon">{{
            config.main.contents[1].icon
          }}</v-icon>
        </p>
        <p>{{ config.main.contents[1].title }}</p>
        <br />
        <p>{{ config.main.contents[1].content }}</p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" align="center">
        <v-icon size="80" color="green" class="content1-icon">{{
          config.main.contents[2].icon
        }}</v-icon>
        <br />
        <p>{{ config.main.contents[2].title }}</p>
        <br />
        <p>
          <v-btn outlined>{{ config.main.contents[2].btn }}</v-btn>
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="support-content1">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <img class="img1" src="../../public/img/support/lock.png" alt="lock" />
        <p class="text-center title1">
          {{ config.main.content1[0] }}
        </p>
        <p class="text-center">
          {{ config.main.content1[1] }}
          <router-link to="/">找回密码</router-link>
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" justify="center" class="support-content2">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-icon size="60" color="orange" class="content2-icon"
          >mdi-firefox</v-icon
        >
        <img class="img2" src="../../public/img/home/chrome.png" alt="chrome" />
        <v-icon size="50" color="blue" class="content2-icon"
          >mdi-edge-legacy</v-icon
        >
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <p class="title2">
          {{ config.main.content2[0] }}
        </p>
        <p>
          {{ config.main.content2[1] }}
        </p>
        <br />
      </v-col>

      <v-col
        class="offset-xs-5"
        cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        align="center"
      >
        <br />
        <v-card outlined>
          <br />
          <v-row>
            <v-col
              cols="12"
              xs="6"
              sm="6"
              md="6"
              lg="6"
              xl="6"
              v-for="(item, index) in config.main.supp_list"
              :key="index"
            >
              <template>
                <p>
                  <v-icon size="50" :color="item.color">{{ item.icon }}</v-icon>
                </p>
                <p class="ma-2">{{ item.supp }}</p>
                <p>
                  <v-icon :color="item.color2">{{ item.icon2 }}</v-icon>
                </p>
                <br />
                <br />
              </template>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
    <v-row align="center" class="support-content3">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-icon size="50" color="green" class="content3-icon"
          >mdi-chat-processing</v-icon
        >
        <img
          class="img3"
          src="../../public/img/icon/icon-color.png"
          alt="icon"
        />
        <v-icon size="60" color="blue" class="content3-icon">mdi-email</v-icon>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <p class="contact">
          {{ config.main.content3[0] }}
        </p>
        <p>
          {{ config.main.content3[1] }}
        </p>
      </v-col>
    </v-row>
    <index-footer></index-footer>
  </div>
</template>

<script>
import { SUPPORT } from "../common/view/Constant";

export default {
  name: "Support",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    indexFooter: () => import("../components/public/footer.vue")
  },
  data: () => ({
    config: {
      main: SUPPORT.VIEW
    }
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/support/support.scss";
</style>
