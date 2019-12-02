<template>
  <div class="support">
    <indexNav></indexNav>
    <div class="support-main animated fadeInDown">
      <p class="text-center support-main-title">{{ main.title }}</p>
      <p class="text-center support-main-icon">
        <v-icon :color="main.iconColor" size="50">{{ main.icon }}</v-icon>
      </p>
      <p class="text-center subtitle">
        <v-btn @click="() => this.$vuetify.goTo('#next')" text>
          <v-icon size="35">{{ main.content }}</v-icon>
        </v-btn>
      </p>
    </div>
    <v-row align="center" class="support-content animated fadeInUp" id="next">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <p class="supp-title">
          {{ main.contents[0].title }}
        </p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" align="center">
        <p>
          <v-icon size="80" color="blue" class="content1-icon">{{
            main.contents[1].icon
          }}</v-icon>
        </p>
        <p>{{ main.contents[1].title }}</p>
        <br />
        <p>{{ main.contents[1].content }}</p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" align="center">
        <v-icon size="80" color="green" class="content1-icon">{{
          main.contents[2].icon
        }}</v-icon>
        <br />
        <p>{{ main.contents[2].title }}</p>
        <br />
        <p>
          <v-btn outlined>{{ main.contents[2].btn }}</v-btn>
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="support-content1">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <img class="img1" src="../../public/img/support/lock.png" alt="lock" />
        <p class="text-center title1">
          {{ main.content1[0] }}
        </p>
        <p class="text-center">
          {{ main.content1[1] }}
          <router-link to="/">找回密码</router-link>
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="support-content2">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-icon size="70" color="orange" class="content2-icon"
          >mdi-firefox</v-icon
        >
        <img class="img2" src="../../public/img/home/chrome.png" alt="chrome" />
        <v-icon size="60" color="blue" class="content2-icon"
          >mdi-edge-legacy</v-icon
        >
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <p class="title2">
          {{ main.content2[0] }}
        </p>
        <p>
          {{ main.content2[1] }}
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="support-content3">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-icon size="70" color="green" class="content3-icon"
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
          {{ main.content3[0] }}
        </p>
        <p>
          {{ main.content3[1] }}
        </p>
      </v-col>
    </v-row>
    <index-footer></index-footer>
  </div>
</template>

<script>
export default {
  name: "Support",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    indexFooter: () => import("../components/public/footer.vue")
  },
  data: () => ({
    main: {
      btn: {
        icon: "mdi-arrow-left",
        word: "返 回"
      },
      title: "欢迎使用Ben.支持",
      icon: "mdi-cursor-default-click",
      iconColor: "white",
      content: "mdi-chevron-double-down",
      contents: [
        {
          title: "我们支持两大平台"
        },
        {
          icon: "mdi-monitor-cellphone",
          title: "Web",
          content: "在浏览器中输入网址即可访问"
        },
        { icon: "mdi-android-debug-bridge", title: "安卓App", btn: "立即下载" }
      ],
      content1: ["忘记密码了?", "忘记密码了, 没关系"],
      content2: [
        "为什么页面样式视图混乱? 显示功能无法正常使用?",
        "我们目前对Chrome,Firefox支持良好,我们也建议您用这些浏览器打开以确保正常使用,如果是IE请确保版本是IE8以上"
      ],
      content3: [
        "联系我们",
        "如果有特殊疑问,请发送邮件到example@example.com邮箱,我们会尽快与您取得联系"
      ]
    }
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/support/support.scss";
</style>
