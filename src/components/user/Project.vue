<template>
  <div>
    <user-nav title="项目"></user-nav>
    <calender> </calender>
  </div>
</template>

<script>
export default {
  name: "Project",
  components: {
    userNav: () => import("../public/user/userNav.vue"),
    calender: () => import("./project/calendar.vue")
  }
};
</script>

<style scoped></style>
