<template>
  <div class="animated fadeIn">
    <user-nav title="个人看板" color="indigo">
      <v-btn text @click="handleNotice"
        ><v-icon>mdi-bulletin-board</v-icon></v-btn
      >
      <notice style="position: absolute"></notice>
    </user-nav>

    <v-row justify="space-around">
      <v-col cols="12" xs="12" sm="5" md="5" lg="5" xl="5">
        <circleChart></circleChart>
        <p class="text-center myteam">团队 / 项目数</p>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col
        cols="12"
        xs="12"
        sm="5"
        md="5"
        lg="5"
        xl="5"
        align-self="center"
        class="pa-3"
      >
        <v-row>
          <v-col class="col-12" align="center">
            <v-card
              class="ma-2 pa-3 project-box"
              min-height="8vh"
              color="#952175"
              width="25vw"
            >
              <p>
                <v-icon size="45" color="white">mdi-book</v-icon>
              </p>
              <p class="text">项目数</p>
              <p class="count">
                {{
                  account.projectAccount === null ? 0 : account.projectAccount
                }}
              </p>
            </v-card>
          </v-col>
          <v-col class="col-12" align="center">
            <v-card class="ma-2 pa-3 team-box" min-height="8vh" width="25vw">
              <p>
                <v-icon size="45" color="white">mdi-graph</v-icon>
              </p>
              <p class="text">团队数</p>
              <p class="count">
                {{ account.teamsAccount === null ? 0 : account.teamsAccount }}
              </p>
            </v-card>
          </v-col>
          <v-col class="col-12" align="center">
            <v-card class="ma-2 pa-3 member-box" min-height="8vh" width="25vw">
              <p>
                <v-icon size="45" color="white">
                  mdi-account-group-outline
                </v-icon>
              </p>
              <p class="text">成员数</p>
              <p class="count">
                {{ account.memberAccount === null ? 0 : account.memberAccount }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-subheader
      class="pa-3 ma-5"
      style="font-weight: bold;font-size: 20px;font-family: PingFangBold"
      >项目结构</v-subheader
    >
    <v-row>
      <v-col class="col-12 d-flex justify-center">
        <treeMap class="treeMap"></treeMap>
      </v-col>
    </v-row>

    <br />
    <expan-panel></expan-panel>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  name: "Dashboard",
  components: {
    userNav: () => import("../public/user/userNav.vue"),
    circleChart: () => import("./dashboard/circleChart.vue"),
    treeMap: () => import("./dashboard/treeMap.vue"),
    expanPanel: () => import("./dashboard/expanPanel.vue"),
    notice: () => import("./dashboard/notice.vue")
  },
  data: () => ({
    thisData: "",
    mini: false,
    account: {
      projectAccount: 0,
      teamsAccount: 0,
      memberAccount: 0
    },
    dialog: false
  }),
  methods: {
    resizeNav() {
      this.mini = !this.mini;
      eventBus.$emit("miniNav", this.mini);
    },
    handleNotice() {
      eventBus.$emit("openDialog", true);
    }
  },
  mounted() {
    let acount = 0;
    let bcount = 0;
    this.thisData = this.$store.getters.getMenu;

    let data = this.thisData;
    this.account.teamsAccount = data.length;
    data.length &&
      data.forEach(e => {
        acount += e.children[0].children.length;
        bcount += e.children[1].member.length;
      });
    this.account.projectAccount = acount;
    this.account.memberAccount = bcount;
  }
};
</script>

<style lang="scss" scoped>
@mixin project {
  background: #005c97;
  background: -webkit-linear-gradient(to right, #005c97, #363795);
  background: linear-gradient(to right, #005c97, #363795);
}

@mixin team {
  background: #ff8008;
  background: -webkit-linear-gradient(to right, #ffc837, #ff8008);
  background: linear-gradient(to right, #ffc837, #ff8008);
}

@mixin member {
  background: #6a3093;
  background: -webkit-linear-gradient(to right, #863fde, #6a3093);
  background: linear-gradient(to right, #863fde, #6a3093);
}

div {
  margin: 0;
  padding: 0;
}
p {
  color: white;
}
.myteam {
  @include font-bold;
  font-size: 20px;
  color: black;
}

.count {
  @include font-bold;
  font-size: 30px;
}
.project-box {
  @include project;
}

.team-box {
  @include member;
}

.member-box {
  @include team;
  text-shadow: $text-shadow;
}

.treeMap {
  width: 90%;
}
</style>
