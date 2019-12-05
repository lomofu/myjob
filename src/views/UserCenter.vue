<template>
  <div class="user">
    <user-nav :user="user" :menu="menu"></user-nav>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <user-info :user="user"></user-info>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  components: {
    userNav: () => import("../components/user/slicenav/usernav.vue"),
    userInfo: () => import("../components/user/slicenav/userinfo.vue")
  },
  data: () => ({
    user: {
      name: "MyName",
      picture: "https://cdn.vuetifyjs.com/images/john.jpg",
      email: "xxx@email.com",
      isAdmin: true
    },
    menu: [
      {
        id: 1,
        name: "ShangHai",
        link: null,
        children: [
          {
            id: 2,
            name: "项目",
            children: [
              { id: 3, name: "SSO", link: "/projects" },
              { id: 4, name: "Docker", link: "/projects" }
            ]
          },
          {
            id: 5,
            name: "团队成员",
            link: "/employees",
            member: ["1", "2", "3"]
          }
        ]
      },
      {
        id: 6,
        name: "BeiJing",
        link: null,
        children: [
          {
            id: 7,
            name: "项目",
            children: [
              { id: 8, name: "SSO", link: "/projects" },
              { id: 9, name: "Docker", link: "/projects" },
              { id: 9, name: "Docker", link: "/projects" }
            ]
          },
          {
            id: 10,
            name: "团队成员",
            link: "/employees",
            member: ["1", "2", "3"]
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
@include div;

.user {
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
}
</style>
