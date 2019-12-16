<template>
  <div>
    <v-card>
      <v-card-title class="text-center justify-center control-panel-title">
        控制面板
      </v-card-title>
    </v-card>
    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item class="pa-3">
        <info :user="user" class="mt-1"></info>
      </v-tab-item>
      <v-tab-item>
        <msgbox></msgbox>
      </v-tab-item>
      <v-tab-item style="overflow: auto">
        <timelines></timelines>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: ["user"],
  components: {
    info: () => import("./usertab/info.vue"),
    timelines: () => import("./usertab/timelines.vue"),
    msgbox: () => import("./usertab/message-center.vue")
  },
  data: () => ({
    tab: null,
    items: ["个人信息", "消息中心", "时间线"]
  })
};
</script>

<style scoped lang="scss">
.control-panel-title {
  @include font-bold;
  padding: 20px;
  color: #323232;
}
</style>
