<template>
  <div class="animated fadeInDown pa-3 ma-3">
    <p class="text-center" style="font-size: smaller;color: grey">
      *头像大小100x100
    </p>
    <br />
    <div class="d-flex justify-center mb-5">
      <div class="show-preview">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>
    <div style="width:100%;height:250px">
      <vueCropper
        :img="preSave"
        :autoCrop="options.autoCrop"
        :info="options.info"
        :canScale="options.canScale"
        :autoCropWidth="options.autoCropWidth"
        :autoCropHeight="options.autoCropHeight"
        :fixedNumber="options.fixedNumber"
        :outputSize="options.outputSize"
        :fixedBox="options.fixedBox"
        :centerBox="options.centerBox"
        ref="cropper"
        @realTime="realTime"
      />
    </div>
    <p class="text-center mt-3">
      <v-btn icon color="red" @click="$refs.cropper.rotateLeft()"
        ><v-icon>mdi-rotate-left</v-icon></v-btn
      >
      <v-btn icon color="red" @click="$refs.cropper.rotateLeft()"
        ><v-icon>mdi-rotate-right</v-icon></v-btn
      >
    </p>
    <p class="d-flex justify-space-around">
      <v-btn class="mt-3" @click="getCropData" color="info" :loading="loading"
        >上传头像</v-btn
      >
    </p>
    <v-snackbar color="green" v-model="snackbar" absolute top>
      上传成功
    </v-snackbar>
    <v-snackbar color="red" v-model="snackbar" absolute top>
      上传失败
    </v-snackbar>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
export default {
  props: ["preSave"],
  components: {
    VueCropper
  },
  inject: ["reload"],
  data: () => ({
    previews: {},
    options: {
      autoCrop: true,
      info: true,
      autoCropWidth: 100,
      autoCropHeight: 100,
      canScale: true,
      fixedNumber: [1, 1],
      outputSize: 0.8,
      fixedBox: true,
      centerBox: true
    },
    loading: false,
    snackbar: false
  }),
  methods: {
    getCropData() {
      this.$refs.cropper.getCropData(data => {
        console.log(data);
        this.loading = !this.loading;
        this.snackbar = true;
        setTimeout(() => {
          this.reload();
        }, 2000);
      });
    },
    realTime(data) {
      let imgAxis = this.$refs.cropper.getImgAxis();
      let cropAxis = this.$refs.cropper.getCropAxis();
      let cropImgX = cropAxis.x1 - imgAxis.x1;
      let cropImgY = cropAxis.y1 - imgAxis.y1;
      data.x = cropImgX;
      data.y = cropImgY;
      this.previews = data;
    }
  }
};
</script>

<style scoped>
.show-preview {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 5px;
  border-radius: 100px;
}
</style>
