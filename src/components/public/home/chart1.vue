<template>
  <ve-heatmap :data="chartData"></ve-heatmap>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["时间", "职员", "任务"],
        rows: [
          { 时间: "星期一", 职员: "A", 任务: 1 },
          { 时间: "星期二", 职员: "B", 任务: 1 },
          { 时间: "星期三", 职员: "C", 任务: 1 },
          { 时间: "星期四", 职员: "C", 任务: 1 },
          { 时间: "星期四", 职员: "D", 任务: 1 },
          { 时间: "星期五", 职员: "D", 任务: 1 },
          { 时间: "星期六", 职员: "D", 任务: 1 },
          { 时间: "星期日", 职员: "A", 任务: 1 }
        ]
      }
    };
  }
};
</script>
