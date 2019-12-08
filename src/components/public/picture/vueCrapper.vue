<template>
  <div class="animated fadeInDown pa-3 ma-3">
    <div class="d-flex justify-center mb-5">
      <div class="show-preview">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>
    <div style="width:100%;height:250px">
      <vueCropper
        autoCrop
        info
        canScale
        autoCropWidth="100"
        autoCropHeight="100"
        :fixedNumber="[1, 1]"
        :outputSize="1"
        fixedBox
        :img="preSave"
        ref="cropper"
        centerBox
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
      <v-btn class="mt-3" @click="getCropData" text color="info">确定</v-btn>
      <v-btn
        class="mt-3"
        @click="$refs.cropper.startCrop()"
        text
        color="warning"
        >修改</v-btn
      >
    </p>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
export default {
  props: ["preSave"],
  components: {
    VueCropper
  },
  data: () => ({
    previews: {}
  }),
  methods: {
    getCropData() {
      this.$refs.cropper.clearCrop();
      this.$refs.cropper.getCropData(data => {
        console.log(data);
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
