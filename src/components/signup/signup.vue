<template>
  <div class="signup">
    <form v-show="signup">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        clear-icon="mdi-close"
        clearable
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        :height="height"
        :placeholder="btn.placeholder"
        :prepend-inner-icon="btn.icon"
        solo
      ></v-text-field>

      <v-btn
        @click="handleSubmit"
        block
        class="btn-word"
        dark
        :height="btnHeight"
        >{{ btn.word }}
      </v-btn>
    </form>
    <div v-if="!signup" class="animated fadeIn">
      <p class="has-clicked">{{ hasClicked.msg }}</p>
      <p class="set-email">
        <v-icon size="80" color="white"> {{ hasClicked.icon2 }} </v-icon>
      </p>
      <router-link to="/">
        <v-btn block class="btn-word" dark height="50">{{ btn.word2 }} </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "signup",
  mixins: [validationMixin],

  validations: {
    email: { required, email }
  },
  props: ["height", "btnHeight"],
  methods: {
    handleSubmit() {
      this.signup = !this.signup;
      this.$emit("fuc", this.signup);
    }
  },
  data: () => ({
    signup: true,
    btn: {
      icon: "mdi-at",
      word: "免 费 注 册",
      word2: "返 回 主 页",
      placeholder: "请输入你的邮箱"
    },
    hasClicked: {
      icon2: "mdi-email-check",
      msg: "邮件已发送至您的邮箱, 请前往你的邮箱验证!"
    },
    email: ""
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("请输入合法的邮箱地址!");
      !this.$v.email.required && errors.push("邮箱地址不能为空!");
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  .set-email {
    &::after {
      @include before-after(30px);
    }
  }
  .btn-word {
    @include btn-color;
    @include font-bold;
    font-size: 22px;
  }

  .has-clicked {
    @include font-light;
    font-size: 27px;
    color: white;
    text-shadow: $text-shadow;
    padding: 10px;
    &::after {
      @include before-after(30px);
    }
  }
}
</style>
