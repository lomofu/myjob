<template>
  <div>
    <index-nav></index-nav>
    <div class="type-box">
      <vue-typed-js
        :strings="['欢迎来到My Job', '安排属于您的公司时间']"
        :typeSpeed="100"
        :showCursor="true"
        :startDelay="800"
      >
        <h1><span class="typing"></span></h1>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
import indexNav from "../components/public/index/nav.vue";
export default {
  name: "home",
  components: {
    indexNav
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.type-box {
  background: #00acc1;
  min-height: 300px;
  height: 400px;
  max-height: 500px;
}
.typing {
  font-family: 微软雅黑;
  font-weight: bold;
  color: white;
}
</style>
