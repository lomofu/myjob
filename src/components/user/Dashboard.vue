<template>
  <div class="animated fadeIn">
    <v-app-bar color="indigo " dark app :elevate-on-scroll="true">
      <v-toolbar-title>个人面板</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row justify="space-around">
      <v-col cols="12" xs="12" sm="5" md="5" lg="5" xl="5">
        <circleChart></circleChart>
        <p class="text-center myteam">项目数 / 团队</p>
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
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            align="center"
          >
            <v-card
              class="ma-2 pa-3"
              min-height="8vh"
              color="#952175"
              width="25vw"
            >
              <p>
                <v-icon size="45" color="white">mdi-book</v-icon>
              </p>
              <p class="text">项目数</p>
              <p class="count">
                {{ account.projectAccount === null ? "0" : account.projectAccount }}
              </p>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            align="center"
          >
            <v-card
              class="ma-2 pa-3"
              min-height="8vh"
              color="#1F7087"
              width="25vw"
            >
              <p>
                <v-icon size="45" color="white">mdi-graph</v-icon>
              </p>
              <p class="text">团队数</p>
              <p class="count">
                {{ account.teamsAccount === null ? "0" : account.teamsAccount }}
              </p>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            align="center"
          >
            <v-card
              class="ma-2 pa-3"
              min-height="8vh"
              color="#385F73"
              width="25vw"
            >
              <p>
                <v-icon size="45" color="white"
                  >mdi-account-group-outline</v-icon
                >
              </p>
              <p class="text">成员数</p>
              <p class="count">
                {{ account.memberAccount === null ? "0" : account.memberAccount }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider></v-divider>
  </div>
</template>

<script>
import circleChart from "./dashboard/circleChart.vue";
export default {
  name: "Dashboard",
  components: {
    circleChart: circleChart
  },
  data: () => ({
    thisData: "",
    account: {
      projectAccount: 0,
      teamsAccount: 0,
      memberAccount: 0
    }
  }),
  mounted() {
    let acount = 0;
    let bcount = 0;
    this.thisData = JSON.parse(JSON.stringify(this.$store.state.menu)).menu;
    let data = this.thisData;
    this.account.projectAccount = data.length;
    data.forEach(e => {
      acount += e.children.length;
      bcount += e.children[1].member.length;
    });
    this.account.teamsAccount = acount;
    this.account.memberAccount = bcount;
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 0;
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
</style>
