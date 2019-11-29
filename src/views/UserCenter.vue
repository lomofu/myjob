<template>
  <div class="user">
    <v-navigation-drawer app>
      <v-row style="padding: 20px">
        <img
          class="app-img"
          src="../../public/index/icon-color.png"
          height="50"
          width="50"
          alt="icon"
          style="margin: 10px 0 0 25px;"
        />
        <span class="app-word">Ben.</span>
      </v-row>
      <v-row class="text-center">
        <v-col class="app-content-title1" v-ripple style="padding: 20px"
          >员工</v-col
        >
      </v-row>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "UserCenter"
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
}
.app-word {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  margin-left: 15px;
  font-weight: bolder;
  font-size: 30px;
  padding: 10px;
}
.app-content-title1 {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bolder;
  font-size: 18px;
}
</style>
