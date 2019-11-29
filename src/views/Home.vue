<template>
  <div class="animated fadeIn">
    <index-nav></index-nav>
    <v-row>
      <v-col>
        <div class="home-type">
          <v-row justify="center" class="home-type-content">
            <vue-typed-js
              :autoInsertCss="true"
              :backSpeed="20"
              :startDelay="550"
              :strings="['欢迎来到 Ben  ', '花费很少的时间分享日程安排  ']"
              :typeSpeed="60"
              @onComplete="handleComplete"
              class="typing-title"
            >
              <h1>
                <v-icon color="white" size="60px" style="margin-right: 15px"
                  >mdi-check-all
                </v-icon>
                <span class="typing"></span>
              </h1>
            </vue-typed-js>
          </v-row>
          <form>
            <transition :duration="3000" name="slide-fade">
              <v-row justify="center">
                <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                  <transition name="slide-fade">
                    <v-text-field
                      :error-messages="emailErrors"
                      @blur="$v.email.$touch()"
                      @input="$v.email.$touch()"
                      clear-icon="mdi-close"
                      clearable
                      height="70"
                      placeholder="请输入你的邮箱"
                      prepend-inner-icon="mdi-at"
                      required
                      solo
                      transition="scroll-y-reverse-transition"
                      v-model="email"
                      v-show="showInput"
                    ></v-text-field>
                  </transition>
                </v-col>
              </v-row>
            </transition>
            <transition name="slide-fade">
              <v-row justify="center">
                <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                  <v-btn
                    @click="handleSubmit"
                    block
                    class="home-btn-word"
                    dark
                    height="50"
                    v-show="showInput"
                    >免&nbsp;费&nbsp;注&nbsp;册
                  </v-btn>
                </v-col>
              </v-row>
            </transition>
          </form>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="home-row">
      <v-col cols="12">
        <div>
          <v-row align="center">
            <v-col
              cols="12"
              class="wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-offset="250"
              lg="6"
              md="6"
              sm="12"
              xl="6"
              xs="12"
            >
              <p class="text-center home-row-title">
                什么是Ben?
              </p>
              <p class="home-row-content">
                Ben 是个Sass多租户的项目管理平台,
                你只需要快速注册自己的管理员账号就可以轻松安排Team人员之间的任务排班流程
              </p>
            </v-col>
            <v-col
              class="text-center home-row-img1"
              cols="12"
              lg="6"
              md="6"
              sm="12"
              style="overflow: hidden"
              xl="5"
              xs="12"
            >
              <img
                alt="home-content"
                src="../../public/img/home/home-content.png"
              />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-lazy transition="fade-transition">
      <v-row
        align="center"
        justify="center"
        class="home-row"
        style="background: #f2f2f2"
      >
        <v-col cols="12">
          <div>
            <v-row>
              <v-col class="text-left" cols="12" lg="6" md="6" sm="12" xs="12">
                <speed></speed>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <p class="text-center home-row-title">
                  为什么选择Ben?
                </p>
                <p class="home-row-content">
                  Ben
                  可以在你发布任务,排班的同时一键精确推送给员工,这样极大的提升了工作安排效率
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-lazy>

    <v-lazy transition="fade-transition">
      <v-row align="center" justify="center" class="home-row">
        <v-col cols="12">
          <div>
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12" xl="6" xs="12">
                <p class="text-center home-row-title">
                  怎么使用？
                </p>
                <p class="home-row-content">
                  Ben
                  的易用性会让这一切变得十分容易，只需要轻轻点击鼠标就可以实现项目管理和人员调度
                </p>
              </v-col>
              <v-col
                class="text-right"
                cols="12"
                lg="6"
                md="6"
                sm="12"
                xl="6"
                xs="12"
              >
                <chart />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <v-divider></v-divider>
    <v-lazy transition="fade-transition">
      <v-row align="center" justify="center" class="home-row">
        <v-col cols="12">
          <div>
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12" xl="6" xs="12" class="text-center">
                <img src="../../public/img/home/devices.png" alt="device" style="padding: 20px" />
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12" xl="6" xs="12">
                <p class="text-center home-row-title">
                  多平台支持
                </p>
                <p class="home-row-content">
                  Ben 几乎覆盖了你日常使用的所有设备,包含电脑,平板,手机
                </p>
                <p class="text-center">
                  <img src="../../public/img/home/app.png" alt="web" style="height: 80px;width: 80px;padding: 10px">
                  <img src="../../public/img/home/andriod.jpg" alt="" style="height: auto;width: 80px;padding:10px">
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <bfooter></bfooter>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, required } from "vuelidate/lib/validators";
import { WOW } from "wowjs";

export default {
  name: "home",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    chart: () => import("../components/home/chart.vue"),
    speed: () => import("../components/home/speed.vue"),
    bfooter: () => import("../components/public/footer.vue")
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data: () => ({
    show: true,
    showInput: false,
    email: ""
  }),
  methods: {
    handleComplete() {
      this.showInput = true;
    },
    handleSubmit() {
      debugger;
      if (this.$v.email.$dirty) {
        return false;
      } else {
        alert(this.email);
      }
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("请输入合法的邮箱地址!");
      !this.$v.email.required && errors.push("邮箱地址不能为空!");
      return errors;
    }
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true
    });
    wow.init();
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/home/home.scss";
</style>
