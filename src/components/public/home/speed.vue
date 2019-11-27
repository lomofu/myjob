<template>
  <v-container fluid>
    <div
      class="text-center display-1 font-italic font-weight-light"
      style="font-family: 微软雅黑,sans-serif;color: #858585"
    >
      效率
    </div>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      :auto-draw="autodraw"
    ></v-sparkline>
  </v-container>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
  data: () => ({
    width: 2,
    radius: 30,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 8, 10],
    gradientDirection: "top",
    gradients,
    fill: true,
    type: "trend",
    autoLineWidth: true,
    autodraw: true
  })
};
</script>
