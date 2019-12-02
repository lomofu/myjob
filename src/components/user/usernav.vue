<template>
  <v-navigation-drawer
    app
    width="17vw"
    mobile-break-point="1240"
    class="user-slice"
  >
    <v-row align="center" class="app-nav-header">
      <v-col cols xs="4" sm="4" md="4" lg="4" xl="4" align="center">
        <img
          class="app-img"
          src="../../../public/img/icon/icon-color.png"
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
    <v-row
      class="text-center app-content"
      v-for="(item, index) in menu"
      :key="index"
    >
      <template>
        <p class="p-team font-weight-bold">{{ item.title }}</p>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="text-left" style="margin-left: 2vw">
            <v-treeview
              :items="item.items"
              hoverable
              open-on-click
              activatable
              color="teal"
              expand-icon="mdi-chevron-down"
            ></v-treeview>
          </div>
        </v-col>
      </template>
    </v-row>

    <v-row class="align-self-end" style="position: absolute;bottom: 5px">
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <p>
          <v-btn text>
            <v-icon size="30">mdi-settings</v-icon>
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { eventBus } from "../../main";
export default {
  name: "userinfo",
  props: ["user", "menu"],
  data: () => ({
    userinfo: true
  }),
  methods: {
    showOpen() {
      eventBus.$emit("openUserInfo", true);
    }
  }
};
</script>

<style lang="scss" scoped>
@include div;
.user-slice {
  min-height: 100vh;
  padding-bottom: 45px;
}

.app-nav-header {
  &::after {
    @include before-after(10px);
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
  margin-left: 30px;
  &::before {
    @include before-after(30px);
  }
  &::after {
    @include before-after(20px);
  }
}
</style>
