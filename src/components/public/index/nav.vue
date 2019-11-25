<template>
  <div>
    <v-row>
      <v-app-bar
        :dark="dark"
        color="cyan darken-1"
        elevate-on-scroll="true"
        hide-on-scroll="true"
      >
        <v-col class="md-2">
          <v-icon left="true" light="true" size="40">mdi-chart-line</v-icon>
          <span class="headline font-weight-black my-title">My Job</span>
        </v-col>
        <v-col class="md-10" style="text-align: end">
          <v-btn class="ma-2" text>首页</v-btn>
          <v-btn class="ma-2" text>价格</v-btn>
          <v-btn class="ma-2" text>支持</v-btn>
          <v-btn class="ma-2" text>登录</v-btn>
          <v-btn class="ma-2" outlined>
            <v-icon style="margin-right: 5px">mdi-account-plus</v-icon>注册
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
      dark: true
    };
  }
};
</script>

<style scoped>
div {
  color: white;
}
.ma-2 {
  font-family: 微软雅黑;
  padding: 20px;
  font-weight: 400;
}
.my-title {
  position: relative;
  top: 4px;
  left: 10px;
}
</style>
