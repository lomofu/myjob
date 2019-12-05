<template>
  <div>
    <div class="text-center d-flex justify-lg-space-between pa-3 ma-3">
      <v-subheader class="pr-title"> 项目详情</v-subheader>
      <div  class="text-center pa-3" >
        <v-btn @click="all" text color="blue" v-show="showOpen">全部展开</v-btn>
        <v-btn
          @click="none"
          text
          color="blue"
          v-show="!showOpen || panel.length > 0"
          >全部关闭</v-btn
        >
      </div>
    </div>
    <v-expansion-panels class="pa-6" v-model="panel" multiple popout focusable>
      <v-expansion-panel v-for="(item, i) in data" :key="i">
        <v-expansion-panel-header>
          <v-icon class="ma-1" color="blue">mdi-view-dashboard-outline </v-icon>
          <div style="font-size: 17px;font-weight: bold">
            {{ i + 1 }} : {{ item.name }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="ma-4">
            <v-icon size="30" color="blue">mdi-file-document-box</v-icon>
            描述: {{ item.description }}
          </p>
          <p class="ma-4 pa-1">
            <v-icon size="30" color="teal">mdi-graph</v-icon> 团队:
            {{ item.team }}
          </p>
          <p class="ma-4">
            <v-icon size="30" color="purple">mdi-account-group</v-icon> 成员:
            {{ item.member.length }}
          </p>
          <p class="ma-4">
            <v-icon size="30" color="pink">mdi-clock-outline</v-icon>
            创建时间: {{ item.createdTime }}
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      panel: [],
      data: [],
      items: 0,
      showOpen: true
    };
  },
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
      this.showOpen = !this.showOpen;
    },
    none() {
      this.panel = [];
      this.showOpen = !this.showOpen;
    }
  },
  mounted() {
    this.data = this.$store.getters.getProject;
    this.items = this.$store.getters.getProject.length;
  }
};
</script>
<style lang="scss" scoped>
@include div;
.pr-title {
  @include font-bold;
  font-size: 20px;
}
.v-icon {
  flex: 0 1 auto !important;
}
</style>
