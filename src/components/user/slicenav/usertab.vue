<template>
  <v-card>
    <v-card-title class="text-center justify-center control-panel-title">
      控制面板
    </v-card-title>

    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <template> 2</template>
      </v-tab-item>
      <v-tab-item>
        <template> 3</template>
      </v-tab-item>
      <v-tab-item>
        <template> 4</template>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
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
