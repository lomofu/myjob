<template>
  <div>
    <v-navigation-drawer app width="17vw" mobile-break-point="1240">
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
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col cols xs="7" sm="7" md="7" lg="7" xl="7">
          <p class="app-nav-name">
            {{ user.name }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols xs="12" sm="12" md="12" lg="12" xl="12">
          <p class="p-team font-weight-bold">Teams</p>
        </v-col>
      </v-row>

      <v-row class="text-center app-content" style="position: relative;">
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="text-left" style="margin-left: 3vw">
            <v-treeview
              :items="list"
              hoverable
              open-on-click
              activatable
              color="teal"
              expand-icon="mdi-chevron-down"
            ></v-treeview>
          </div>
        </v-col>
      </v-row>
      <p style="position: relative;top: 47%">
        <v-icon size="30" style="margin-left: 30px">mdi-settings</v-icon>
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  name: "userinfo",
  props:["user","list"],
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
  margin-left: 40px;
  &::before {
    @include before-after(50px);
  }
}
</style>
