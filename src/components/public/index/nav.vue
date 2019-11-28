<template>
  <div>
    <v-row>
      <v-app-bar :dark="light" :elevate-on-scroll="true" fixed color="#26C6DA">
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" class="d-flex">
          <v-icon :left="true" size="42">mdi-grain</v-icon>
          <span class="headline font-weight-black my-title">Ben.</span>
        </v-col>

        <v-col style="text-align: end" class="d-flex d-sm-none">
          <v-btn fab dark small color="teal">
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
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
          <v-btn class="ma-2" text>首页</v-btn>
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
      light: true
    };
  }
};
</script>

<style scoped>
div {
  color: white;
  margin: 0;
  padding: 0;
}
.ma-2 {
  font-family: "Arial", "SimHei", "Microsoft YaHei", "黑体",
    "Apple LiGothic Medium", sans-serif;
  padding: 20px;
  font-weight: 400;
}
.my-title {
  position: relative;
  top: 4px;
  left: 10px;
  clear: both;
}
@media screen and (min-width: 300px) and (max-width: 600px) {
  .col-12 {
    flex: 0 0 90% !important;
  }
}
</style>
