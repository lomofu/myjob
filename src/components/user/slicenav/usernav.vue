<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer
    app
    max-width="17vw"
    mobile-break-point="1240"
    class="user-slice"
  >
    <v-row align="center" class="app-nav-header">
      <v-col cols xs="4" sm="4" md="4" lg="4" xl="4" align="center">
        <img
          class="app-img"
          src="../../../../public/img/icon/icon-color.png"
          height="40"
          width="40"
          alt="icon"
          style="margin-left: 50px"
        />
      </v-col>
      <v-col cols xs="8" sm="8" md="8" lg="8" xl="8">
        <p class="app-word" style="margin-left: 30px">Ben.</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row style="padding: 15px;margin-top: 20px" align="center">
      <v-col cols xs="5" sm="5" md="5" lg="5" xl="5" align="center">
        <v-avatar class="app-nav-avatar" size="65" @click="showOpen">
          <img class="hvr-grow-shadow" :src="user.picture" />
        </v-avatar>
      </v-col>
      <v-col cols xs="7" sm="7" md="7" lg="7" xl="7">
        <p class="app-nav-name">
          {{ user.name }}
        </p>
      </v-col>
    </v-row>
    <p
      class="text-center"
      style="padding: 10px;cursor: pointer"
      @click="$router.push({ path: '/user' })"
      v-ripple
    >
      <v-icon>mdi-home-variant</v-icon>
    </p>
    <p class="p-team text-center">Teams</p>
    <v-list v-for="(item, index) in menu" :key="index">
      <v-list-group prepend-icon="mdi-view-dashboard">
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
                  @click="$router.push({ path: '/user' + el.link })"
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
            @click="$router.push({ path: '/user' + child.link })"
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
    ]
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
    @include before-after(7px);
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
  font-size: 28px;
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
