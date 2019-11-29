<template>
  <div class="animated fadeIn">
    <index-nav></index-nav>
    <v-row>
      <v-col>
        <div class="type-box">
          <v-row justify="center" class="type-content">
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
                    class="btn-word"
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

    <v-row
      align="center"
      justify="center"
      style="min-height: 700px;max-height: 800px"
    >
      <v-col cols="12">
        <div class="content c2">
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
              <p class="text-center c2-title">
                什么是Ben?
              </p>
              <p class="c2-content">
                Ben 是个Sass多租户的公司排班平台,
                你只需要快速注册自己的公司账号就可以轻松安排公司雇员之间的排班流程
              </p>
            </v-col>
            <v-col
              class="text-center img-1"
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
                src="../../public/index/home-content.png"
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
        style="background: #f3f3f3;min-height: 700px;max-height: 800px"
      >
        <v-col cols="12">
          <div>
            <v-row>
              <v-col class="text-left" cols="12" lg="6" md="6" sm="12" xs="12">
                <speed></speed>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <p class="text-center c2-title">
                  为什么选择Ben?
                </p>
                <p class="font-weight-light c2-content">
                  Ben
                  可以在你排班同时精确推送给员工,这样极大的提升了工作安排效率
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-lazy>

    <v-lazy transition="fade-transition">
      <v-row
        align="center"
        justify="center"
        style="min-height: 700px;max-height: 800px"
      >
        <v-col cols="12">
          <div class="content c2">
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12" xl="6" xs="12">
                <p class="text-center c2-title">
                  怎么使用？
                </p>
                <p class="c2-content">
                  Ben
                  的易用性会让你的公司人员排班安排变得十分容易，只需要轻轻点击鼠标就可以实现全公司人员调动
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
    indexNav: () => import("../components/public/index/nav.vue"),
    chart: () => import("../components/public/home/chart.vue"),
    speed: () => import("../components/public/home/speed.vue"),
    bfooter: () => import("../components/public/index/footer.vue")
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data: () => ({
    show: true,
    showInput: false,
    content2: false,
    content3: false,
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
<style scoped>
div {
  margin: 0;
  padding: 0;
}

p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

img {
  width: 90%;
  height: 90%;
}

.type-box {
  background: #26c6da; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 550px;
}

.type-content {
  width: 100%;
  height: 250px;
}
.type-content::before {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
}

.typing {
  font-family: PingFangLight, Microsoft YaHei, 黑体, sans-serif;
  color: white;
  font-size: 50px;
}

.typing-title {
  color: white;
  font-size: 22px;
  font-family: PingFangLighter, Microsoft YaHei, 黑体, sans-serif;
  font-weight: lighter;
}

.btn-word {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-size: 18px;
  background: #f46b45;
  background: -webkit-linear-gradient(to right, #eea849, #f46b45);
  background: linear-gradient(to right, #eea849, #f46b45);
}
.img-1::before {
  content: "";
  display: block;
  width: 100%;
  height: 20px;
}
.c2-title::before {
  content: "";
  display: block;
  width: 100%;
  height: 50px;
}

.c2-title {
  font-family: PingFangNormal, Microsoft YaHei, 黑体, sans-serif;
  font-weight: lighter;
  font-size: 45px;
}

.c2-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 30px;
}

.c2-content {
  font-family: PingFangLight, Microsoft YaHei, 黑体, sans-serif;
  min-width: 350px;
  max-width: 500px;
  font-size: 18px;
  margin: 0 auto;
  color: #474747;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(30px);
  transition: 0.3s;
  opacity: 0;
}

@media screen and (min-width: 300px) and (max-width: 755px) {
  .typing {
    font-size: 20px;
  }

  .typing-title {
    color: white;
    font-size: 20px;
  }

  .col-12 {
    flex: 0 0 90% !important;
  }
}
</style>
