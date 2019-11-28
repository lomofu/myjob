<template>
  <v-row justify="center">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      style="min-width: 350px;max-width: 500px;"
    >
      <v-text-field
        :email="user.email"
        :rules="emailRules"
        label="邮箱"
        required
        clearable
        clear-icon="mdi-close"
      ></v-text-field>
      <v-text-field
        :password="user.password"
        label="密码"
        clearable
        clear-icon="mdi-close"
        required
      ></v-text-field>
      <div class="btn-login">
      <v-btn block color="deep-purple lighten-1" dark height="50px" @click="handleLogin" style="font-weight: bold;font-size: 20px">
        登  陆
      </v-btn>
      </div>
    </v-form>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    user: {
      email: "",
      password: ""
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "请输入正确的邮箱格式"
    ],
    lazy: true
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    handleLogin() {}
  }
};
</script>
<style scoped>
.btn-login::before {
  clear: both;
  content: "";
  display: block;
  width: 100%;
  height: 30px;
}
</style>
