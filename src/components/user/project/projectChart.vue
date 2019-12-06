<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn c @click="changeType" text>切换图表类型</v-btn>
    </div>
    <ve-chart
      judge-width
      :data="chartData"
      :settings="chartSettings"
      height ="450px"
    ></ve-chart>
    <div class="d-flex justify-center"><span>任务时长 / 任务总数</span></div>
  </div>
</template>

<script>
export default {
  data() {
    this.typeArr = ["waterfall", "pie", "histogram"];
    this.index = 0;
    return {
      chartData: {
        columns: ["任务名", "时长"],
        rows: [
          { 任务名: "开发", 时长: 15 },
          { 任务名: "测试", 时长: 2 },
          { 任务名: "运维", 时长: 8 },
          { 任务名: "设计", 时长: 4 },
          { 任务名: "需求", 时长: 2 },
          { 任务名: "上线", 时长: 1 }
        ]
      },
      chartSettings: { type: this.typeArr[this.index] }
    };
  },
  methods: {
    changeType: function() {
      this.index++;
      if (this.index >= this.typeArr.length) {
        this.index = 0;
      }
      this.chartSettings = { type: this.typeArr[this.index] };
    }
  }
};
</script>
<style scoped>
span {
  font-family: PingFangBold;
  font-weight: bold;
  font-size: 20px;
}
</style>
