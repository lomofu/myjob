<template>
  <div>
    <ve-pie :data="transferData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      radius: 120
    };
    return {
      thisData: "",
      chartData: {
        columns: ["团队", "项目数"],
        rows: []
      }
    };
  },
  computed: {
    transferData() {
      let charData = this.chartData;
      let data = JSON.parse(JSON.stringify(this.$store.state.menu)).menu;
      data.forEach(item => {
        charData.rows.push({
          团队: item.name,
          项目数: item.children.length
        });
      });

      return charData;
    }
  },
  mounted() {
    this.thisData = JSON.parse(JSON.stringify(this.$store.state.menu)).menu;
  }
};
</script>
