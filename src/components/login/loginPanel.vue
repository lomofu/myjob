<template>
  <v-form
    ref="form"
    v-model="valid"
    :lazy-validation="lazy"
    style="min-width: 350px;max-width: 500px;"
    class="login-panel"
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
    <v-switch
      v-model="user.isRember"
      :label="user.isRember ? '记住我' : '不要记住我'"
    ></v-switch>
    <span class="btn-login">
      <v-btn
        block
        color="deep-purple lighten-1"
        dark
        height="50px"
        @click="handleLogin"
        style="font-weight: bold;font-size: 20px"
      >
        登 录
      </v-btn>
    </span>
    <p class="word" v-ripple>
      <router-link to="/">忘记密码?</router-link>
    </p>
    <p class="word" v-ripple>
      没有账号? <router-link to="/signup">创建一个新账号</router-link>
    </p>
    <p class="s-word" v-ripple>
      <router-link to="/price">产品价格</router-link> |
      <router-link to="support">技术支持</router-link>
    </p>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    user: {
      email: "",
      password: "",
      isRember: false
    },
    emailRules: [
      v => !!v || "邮箱不能为空哦",
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
