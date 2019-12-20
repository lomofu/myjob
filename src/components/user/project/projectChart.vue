<template>
  <div class="project-Chart">
    <div class="d-flex justify-end">
      <v-btn
        v-if="getChart.rows.length !== 0"
        @click="changeType"
        color="blue"
        text
      >
        切换图表类型
      </v-btn>
    </div>
    <div
      class="data-empty d-flex justify-center align-center"
      v-if="getChart.rows.length === 0"
    >
      没有数据 😂
    </div>
    <ve-chart
      v-else
      judge-width
      :data="getChart"
      :settings="chartSettings"
      height="450px"
    >
    </ve-chart>
    <div class="d-flex justify-center align-center title">
      <span>任务时长 / 任务总数</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.typeArr = ["waterfall", "pie", "histogram"];
    this.index = 0;
    return {
      chartData: {
        columns: ["任务名", "小时"],
        rows: []
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
    },
    fetchData(to) {
      const { pid } = to.params;
      let project = this.$store.getters.getProject;
      if (project !== null) this.projectInfo = project.find(e => e.id == pid);
    }
  },
  computed: {
    getChart() {
      let chartData = this.chartData;
      chartData.rows = [];

      let array = this.$store.getters.getEvents.find(
        e => e.id == this.$route.params.pid
      );

      if (typeof array === "undefined") return chartData;
      else if (array.data.length) {
        array = array.data;
        array.forEach(e => {
          let start = new Date(e.start).getTime();
          let end = new Date(e.end).getTime();
          let ms = Math.abs(end - start);
          ms = ms / 1000 / 60 / 60;
          chartData.rows.push({
            任务名: e.name,
            小时: ms
          });
        });
      }
      return chartData;
    }
  }
};
</script>
<style scoped>
.project-Chart {
  height: 100%;
}

span {
  font-family: PingFangBold;
  font-weight: bold;
  font-size: 20px;
}
.data-empty {
  position: relative;
  height: 90%;
  color: #888;
  font-size: 18px;
}
.title {
  position: relative;
  height: 10%;
}
</style>
