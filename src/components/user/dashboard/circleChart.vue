<template>
  <div>
    <v-btn @click="changeType" text style="color: #1e73a8">切换图表类型</v-btn>
    <ve-chart :data="transferData" :settings="chartSettings"></ve-chart>
  </div>
</template>

<script>
export default {
  data() {
    this.typeArr = ["pie", "histogram", "bar"];
    this.index = 0;
    return {
      chartData: {
        columns: ["团队", "项目数"],
        rows: []
      },
      chartSettings: { type: this.typeArr[this.index], radius: 120 }
    };
  },
  methods: {
    changeType: function() {
      this.index++;
      if (this.index >= this.typeArr.length) {
        this.index = 0;
      }
      this.chartSettings = { type: this.typeArr[this.index], radius: 120 };
    }
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
