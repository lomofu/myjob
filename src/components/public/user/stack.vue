<template>
  <div class="mid-center">
    <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div>
  </div>
</template>
<script>
import stack from "vue-tantan-stack/src/components/stack.vue";
export default {
  el: "#stack",
  props: ["datas"],
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    };
  },
  mounted() {
    let that = this;
    that.someList = this.datas;
  },
  components: {
    stack
  }
};
</script>
<style scoped>
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 320px;
  height: 320px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}

.stack {
  perspective: 1200px;
  perspective-origin: 50% -60% !important;
  -webkit-perspective: 1000px;
  -webkit-perspective-origin: 140% -30% !important;
}
.stack-item {
  border-radius: 4px;
}
li {
  box-shadow: #00000063 7px 0px 15px 5px;
}
</style>
