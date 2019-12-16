<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <div>个人信息</div>
      <br />
      <p class="display-1 text--primary">
        {{ user.name }}
      </p>
      <p>{{ user.isAdmin ? "管理员" : "用户" }}</p>
      <br />
      <div class="text--primary">
        {{ user.email }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        修改资料
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "info",
  props: ["user"]
};
</script>

<style scoped></style>
