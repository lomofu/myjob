<template xmlns:v-slot="">
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
        <v-hover v-slot:default="{ hover }">
          <v-avatar :title="user.username" size="90">
            <v-img :src="user.picture">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out grey darken-2 white--text edit"
                  style="height: 100%;"
                >
                  <v-btn icon text fab @click="handleEditPicture" color="white">
                    <v-icon size="50" color="white"
                      >mdi-account-box-outline</v-icon
                    >
                  </v-btn>
                </div>
              </v-expand-transition>
            </v-img>
          </v-avatar>
        </v-hover>
        <v-dialog v-model="dialog2" max-width="500px">
          <v-card class="pa-8">
            <vueCrapper :preSave="imageSave" v-if="preSave"></vueCrapper>
            <v-file-input
              class="mt-3"
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="上传你的头像"
              prepend-icon="mdi-camera"
              label="头像"
              @change="reviewFile"
              show-size
              small-chips
            />
            <v-card-actions class="mt-3">
              <v-btn color="info" text @click="dialog2 = false">
                上传头像
              </v-btn>
              <v-btn color="red" text @click="dialog2 = false">
                关闭窗口
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <br />
        <p class="text-center userinfo-username">
          {{ user.name }}
        </p>
        <br />
        <v-chip color="orange" dark>
          {{ user.isAdmin ? "管理员" : "团队成员" }}
          <v-icon right>mdi-account-outline</v-icon>
        </v-chip>
      </div>
    </div>
    <user-tabs v-if="user.isAdmin" :user="user"></user-tabs>
  </v-navigation-drawer>
</template>
<script>
import { eventBus } from "../../../main";
export default {
  name: "userinfo",
  props: ["user"],
  components: {
    userTabs: () => import("./usertab.vue"),
    vueCrapper: () => import("../../public/picture/vueCrapper.vue")
  },
  data() {
    return {
      drawer: null,
      dialog2: false,
      rules: [value => !value || value.size < 2000000 || "头像大小需要小于2MB"],
      file: null,
      preSave: "",
      imageSave: ""
    };
  },
  methods: {
    handleEditPicture() {
      this.dialog2 = true;
    },
    reviewFile(e) {
      if (e) {
        let file = e;
        this.imageSave = e;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = data => {
          let res = data.target || data.srcElement;
          this.preSave = res.result;
          this.imageSave = res.result;
        };
      } else {
        return false;
      }
    }
  },
  created() {
    eventBus.$on("openUserInfo", message => {
      this.drawer = message;
    });
  },
  mounted() {},
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

.edit {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
  border-radius: 100px;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
