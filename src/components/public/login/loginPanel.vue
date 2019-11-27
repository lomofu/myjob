<template>
  <v-row justify="center">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      style="min-width: 350px;max-width: 500px"
    >
      <v-text-field
        :email="user.email"
        :rules="emailRules"
        label="邮箱"
        outlined
        required
        clearable
        clear-icon="mdi-close"
      ></v-text-field>
      <v-text-field
        :password="user.password"
        label="密码"
        outlined
        clearable
        clear-icon="mdi-close"
        required
      ></v-text-field>
      <v-btn color="success" class="mr-4" @click="handleLogin" width="100px">
        登陆
      </v-btn>
      <v-btn color="error" @click="handleReset" width="100px">
        重置
      </v-btn>
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
    handleLogin() {},
    handleReset() {
      this.$refs.form.resetValidation();
      this.$refs.form.reset();
    }
  }
};
</script>
