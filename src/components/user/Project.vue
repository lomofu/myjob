<template>
  <div>
    <projectIndex v-if="showSchedule" @fuc="handleFuc"></projectIndex>
    <projectScheule v-if="!showSchedule" @fuc="handleFuc"></projectScheule>
  </div>
</template>

<script>
export default {
  components: {
    projectIndex: () => import("./project/projectIndex.vue"),
    projectScheule: () => import("./project/projectSchedule.vue")
  },
  data: () => ({
    showSchedule: true
  }),
  methods: {
    handleFuc() {
      this.showSchedule = !this.showSchedule;
    }
  }
};
</script>

<style scoped></style>
