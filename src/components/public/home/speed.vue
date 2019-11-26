<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      dataType: {
        效率: "percent"
      },
      seriesMap: {
        效率: {
          min: 0,
          max: 1
        }
      }
    };
    return {
      chartData: {
        columns: ["type", "value"],
        rows: [{ type: "效率", value: 1 }]
      }
    };
  }
};
</script>
