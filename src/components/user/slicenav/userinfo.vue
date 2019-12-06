<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    right
    min-width="30vw"
    width="40vw"
    mobile-break-point="1260"
  >
    <p style="position:absolute;right: 5px;top:5px">
      <v-icon size="30" class="hvr-grow">mdi-logout</v-icon>
    </p>
    <div class="userinfo-box d-flex align-center justify-center">
      <div>
        <p>
          <v-avatar :title="user.username" size="90">
            <img :src="user.picture" />
          </v-avatar>
        </p>
        <br />
        <p class="text-center userinfo-username">
          {{ user.name }}
        </p>
        <br />
        <p class="text-center userinfo-subinfo">
          {{ user.isAdmin ? "管理员" : "团队成员" }}
        </p>
      </div>
    </div>
    <user-tabs v-if="user.isAdmin"></user-tabs>
  </v-navigation-drawer>
</template>
<script>
import { eventBus } from "../../../main";
export default {
  name: "userinfo",
  props: ["user"],
  components: {
    userTabs: () => import("./usertab.vue")
  },
  data() {
    return {
      drawer: null
    };
  },
  created() {
    eventBus.$on("openUserInfo", message => {
      this.drawer = message;
    });
  },
  beforeDestroy() {
    eventBus.$off("openUserInfo");
  }
};
</script>
<style scoped lang="scss">
@include div;
.userinfo {
  &-box {
    @include color;
    height: 30vh;
    width: 40vw;
    display: flex;
  }

  &-username {
    @include font-bold;
    font-size: 22px;
    color: white;
    text-shadow: $text-shadow;
  }
  &-subinfo {
    @include font;
    font-size: 16px;
    color: #4d4d4d;
  }

  p {
    width: 40vw;
  }
}
</style>
