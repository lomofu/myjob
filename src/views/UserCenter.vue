<template>
  <div class="user">
    <user-nav :user="user" :menu="menu"></user-nav>
    <v-app-bar app></v-app-bar>
    <v-content>
      <v-container fluid> </v-container>
    </v-content>
    <user-info :user="user"></user-info>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  components: {
    userNav: () => import("../components/user/usernav.vue"),
    userInfo: () => import("../components/user/userinfo.vue")
  },
  data: () => ({
    user: {
      name: "MyName",
      picture: "https://cdn.vuetifyjs.com/images/john.jpg",
      isAdmin: true
    },
    menu: [
      {
        title: "Teams",
        items: [
          {
            id: 1,
            name: "ShangHai",
            children: [
              {
                id: 2,
                name: "项目",
                children: [
                  { id: 3, name: "SSO" },
                  { id: 4, name: "Docker" }
                ]
              },
              { id: 5, name: "团队成员" }
            ]
          },
          {
            id: 6,
            name: "BeiJing",
            children: [
              {
                id: 7,
                name: "项目",
                children: [
                  { id: 8, name: "SSO" },
                  { id: 9, name: "Docker" }
                ]
              },
              { id: 10, name: "团队成员" }
            ]
          }
        ]
      },
      {
        title: "Teams",
        items: [
          {
            id: 1,
            name: "ShangHai",
            children: [
              {
                id: 2,
                name: "项目",
                children: [
                  { id: 3, name: "SSO" },
                  { id: 4, name: "Docker" }
                ]
              },
              { id: 5, name: "团队成员" }
            ]
          },
          {
            id: 6,
            name: "BeiJing",
            children: [
              {
                id: 7,
                name: "项目",
                children: [
                  { id: 8, name: "SSO" },
                  { id: 9, name: "Docker" }
                ]
              },
              { id: 10, name: "团队成员" }
            ]
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/assets/css/user/user.scss";
</style>
