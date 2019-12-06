<template>
  <div>
    <v-snackbar v-model="show.info" color="orange" bottom :timeout="2000">
      <span class="ml-5"> 推送中</span>
      <v-btn class="mr-5" loading disabled @click="loader = 'loading4'" text>
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="show.success" color="success" bottom :timeout="2000">
      推送成功
      <v-icon>mdi-check-circle</v-icon>
    </v-snackbar>
    <v-snackbar v-model="show.error" color="error" bottom :timeout="2000">
      推送失败
      <v-icon>mdi-alert-circle-outline</v-icon>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "pushBar",
  data: () => ({
    loader: null,
    show: {
      success: false,
      info: false,
      error: false
    }
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      this.loader = null;
    }
  }
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
