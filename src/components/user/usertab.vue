<template>
  <v-card>
    <v-card-title class="text-center justify-center control-panel-title">
      控制面板
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <div></div>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["看板", "信息", "消息", "时间线"]
    };
  }
};
</script>

<style scoped lang="scss">
.control-panel-title {
  @include font-bold;
  padding: 20px;
    color: #323232;
}
</style>
