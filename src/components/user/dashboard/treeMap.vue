<template>
  <div>
    <ve-tree
      :data="transferData"
      :settings="chartSettings"
      judge-width
    ></ve-tree>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      seriesMap: {
        tree1: {
          orient: "vertical",
          label: {
            normal: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 20
            }
          }
        }
      }
    };
    return {
      chartData: {
        columns: ["name", "value"],
        rows: [
          {
            name: "tree1",
            value: [
              {
                name: "Root",
                children: []
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    transferData() {
      let chartData = this.chartData;
      let treeData = chartData.rows[0].value[0].children;
      let data = this.$store.getters.getMenu;
      if (data.length > 0) {
        data.forEach(e => {
          let temp = { name: e.name, children: [] };
          e.children[0].children.forEach(i => {
            let name = i.name;
            temp.children.push({ name: name });
          });
          treeData.push(temp);
        });
      }
      return chartData;
    }
  }
};
</script>
