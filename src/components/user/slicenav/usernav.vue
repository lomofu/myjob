<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer
    app
    mobile-break-point="1240"
    class="user-slice"
    :mini-variant.sync="mini"
  >
    <v-row align="center" class="app-nav-header">
      <v-col cols xs="12" sm="12" md="12" lg="12" xl="12" align="center">
        <v-list-item class="justify-center ma-1">
          <p class="app-word " style="margin-top: 10px">
            Ben.
          </p>
        </v-list-item>
      </v-col>
    </v-row>
    <v-row style="padding: 15px;margin-top: 25px;cursor: pointer">
      <v-col cols xs="12" sm="12" md="12" lg="12" xl="12">
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item class="d-flex justify-center" v-on="on">
              <v-list-item-avatar size="60" @click="showOpen">
                <img class="hvr-grow-shadow" :src="user.picture" />
              </v-list-item-avatar>
              <v-list-item-content @click="showOpen">
                <v-list-item-title>{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-card class="mx-auto pa-3" min-width="14vw" min-height="25vh">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">信息概况</div>
                <v-list-item-title class="mb-1">{{
                  user.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar tile size="80" color="grey">
                <img class="hvr-grow-shadow" :src="user.picture" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-list-item
      style="padding: 10px;cursor: pointer"
      @click="$router.push({ path: '/user' })"
    >
      <v-list-item>
        <v-icon class="ma-1" size="30">mdi-apple-safari</v-icon>
        <v-list-item-title class="ma-6">个人面板</v-list-item-title>
      </v-list-item>
    </v-list-item>
    <br />
    <v-list v-for="(item, index) in menu" :key="index">
      <v-list-group prepend-icon="mdi-account-group">
        <template v-slot:activator>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </template>
        <v-list-group
          sub-group
          no-action
          v-for="(el, i) in item.children"
          :key="i"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-if="el.link == null">
                {{ el.name }}
              </v-list-item-title>
              <div v-else>
                <v-list-item-title
                  @click="$router.push({ path: `/user${el.link}/${el.id}` })"
                >
                  {{ el.name }}
                </v-list-item-title>
              </div>
            </v-list-item-content>
          </template>
          <v-list-item
            link
            v-for="(child, j) in el.children"
            :key="j"
            @click="$router.push({ path: `/user${child.link}/${child.id}` })"
          >
            <v-list-item-title>
              {{ child.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    <v-row class="align-self-end" style="position: absolute;bottom: 5px">
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card v-show="showMenu" @mouseleave="disableMeun">
          <v-list style="padding: 5px;">
            <v-list-item v-for="(e, k) in setting" :key="k" @click="">
              <v-list-item-title>
                <v-icon>{{ e.icon }} </v-icon>
                {{ e.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
        <p>
          <v-btn text>
            <v-icon size="30" @click="showMenu = !showMenu"
              >mdi-settings</v-icon
            >
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  name: "userinfo",
  props: ["user", "menu"],
  data: () => ({
    userinfo: true,
    showMenu: false,
    setting: [
      { icon: "mdi-file-document-edit", text: "修改资料" },
      { icon: "mdi-logout", text: "退出" }
    ],
    mini: false
  }),
  methods: {
    showOpen() {
      eventBus.$emit("openUserInfo", true);
    },
    disableMeun() {
      let me = this;
      setTimeout(() => {
        me.showMenu = !me.showMenu;
      }, 300);
    }
  },
  created() {
    eventBus.$on("miniNav", message => {
      this.mini = message;
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  color: black;
}

@include div;
.user-slice {
  min-height: 100vh;
  padding-bottom: 45px;
}

.app-nav-header {
  &::after {
    @include before-after(30px);
  }
}
.app-img {
  margin: 10px 0 0 25px;
}

.app-nav {
  &-avatar {
    margin: {
      left: 20px;
    }
    cursor: pointer;
  }
  &-name {
    overflow: hidden;
    word-break: break-all;
  }
}
.app-content {
  &-title1 {
    @include font-bold;
    font-size: 16px;
  }
}

.app-word {
  @include font-bold;
  font-size: 24px;
}

.p-team {
  @include font-bold;
  font-size: 25px;
  padding: 20px;
  &::before {
    @include before-after(5px);
  }
  &::after {
    @include before-after(5px);
  }
}
</style>
