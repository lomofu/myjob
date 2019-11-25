<template>
  <div>
    <div class="content">
      <index-nav></index-nav>
      <div class="type-box">
        <v-row justify="center" style="height: 300px;">
          <vue-typed-js
            class="font-weight-thin typing-title"
            :backSpeed="50"
            :strings="['欢迎来到My Job', '开始安排属于您的公司时间.']"
            :typeSpeed="100"
            :startDelay="800"
            :autoInsertCss="true"
            :fadeOutDelay="true"
            @onComplete="handleComplete"
          >
            <h1>
              <v-icon size="50px" color="white" style="margin-right: 10px"
                >mdi-arrow-top-right-thick</v-icon
              >
              <span class="typing"></span>
            </h1>
          </vue-typed-js>
        </v-row>
        <input type="text" transition="scroll-x-transition" />
      </div>
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
    return {
      show: true
    };
  },
  methods: {
    handleComplete() {}
  }
};
</script>
<style scoped>
.type-box {
  background: #00acc1;
  height: 500px;
}

.typing {
  font-family: "Arial", "SimHei", "Microsoft YaHei", "黑体",
    "Apple LiGothic Medium", sans-serif;
  font-weight: lighter;
  color: white;
  font-size: 50px;
}
.typing-title {
  color: white;
  font-size: 24px;
}
</style>
