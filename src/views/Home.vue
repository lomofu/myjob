<template>
  <div>
    <index-nav></index-nav>

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <div class="content c1">
          <div class="type-box">
            <v-row justify="center" style="height: 300px;">
              <vue-typed-js
                :typeSpeed="60"
                :startDelay="550"
                :backSpeed="20"
                :autoInsertCss="true"
                :strings="['欢迎来到 Ben  ', '花费很少的时间分享日程安排  ']"
                @onComplete="handleComplete"
                class="font-weight-thin typing-title"
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
              <transition name="slide-fade">
                <v-row justify="center">
                  <v-col cols="12" md="4" sm="6" xl="4" xs="6">
                    <transition name="slide-fade">
                      <v-text-field
                        solo
                        clearable
                        placeholder="请输入你的邮箱"
                        v-model="email"
                        transition="scroll-y-reverse-transition"
                        v-show="showInput"
                        height="70"
                        clear-icon="mdi-close"
                        prepend-inner-icon="mdi-at"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        :error-messages="emailErrors"
                        required
                      ></v-text-field>
                    </transition>
                  </v-col>
                </v-row>
              </transition>
              <transition name="slide-fade">
                <v-row justify="center">
                  <v-col cols="12" md="4" sm="6" xl="4" xs="6">
                    <v-btn
                      block
                      dark
                      color="lime lime darken-1"
                      v-show="showInput"
                      height="50"
                      class="btn-word"
                      @click="handleSubmit"
                      >免&nbsp;费&nbsp;注&nbsp;册</v-btn
                    >
                  </v-col>
                </v-row>
              </transition>
            </form>
          </div>
        </div>
      </v-col>
    </v-row>

    <transition name="slide-fade">
      <v-row align="center">
        <v-col cols="12" sm="12" md="12" xl="12">
          <br />
          <br />
          <div class="content c2">
            <v-row align="center">
              <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                <p class="text-center display-2 c2-title">
                  什么是Ben?
                </p>
                <br />
                <p class="font-weight-light c2-content">
                  Ben
                  是个Sass多租户的公司排班平台,你只需要快速注册自己的公司账号就可以轻松安排公司雇员之间的排班流程
                </p>
              </v-col>
              <v-col cols="12" md="6" class="text-right">
                <img
                  src="../../public/index/home-content.png"
                  alt="home-content"
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </transition>

    <br />
    <br />
    <br />

    <transition name="slide-fade">
      <v-row align="center" style="background: #f3f3f3" v-if="content2">
        <v-col cols="12" sm="12" md="12" xl="12">
          <br />
          <br />
          <div class="content c2">
            <v-row align="center">
              <v-col cols="12" md="6" class="text-left">
                <speed></speed>
              </v-col>
              <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                <p class="text-center display-2 c2-title">
                  为什么选择Ben?
                </p>
                <br />
                <p class="font-weight-light c2-content">
                  Ben
                  可以在你排班同时精确推送给员工,这样极大的提升了工作安排效率
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </transition>

    <br />
    <br />

    <transition name="slide-fade">
      <v-row align="center" v-if="content3">
        <v-col cols="12" sm="12" md="12" xl="12">
          <br />
          <br />
          <div class="content c2">
            <v-row align="center">
              <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                <p class="text-center display-2 c2-title">
                  怎么使用？
                </p>
                <br />
                <p class="font-weight-light c2-content">
                  Ben
                  的易用性会让你的公司人员排班安排变得十分容易，只需要轻轻点击鼠标就可以实现全公司人员调动
                </p>
              </v-col>
              <v-col cols="12" md="6" class="text-left">
                <chart1></chart1>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </transition>

    <br />
    <br />

    <v-row v-show="content3">
      <bfooter></bfooter>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "home",
  components: {
    indexNav: () => import("../components/public/index/nav.vue"),
    chart1: () => import("../components/public/home/chart1.vue"),
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
    },
    handleScroll() {
      let me = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 550) {
        me.content2 = true;
      }
      if (scrollTop > 600) {
        me.content3 = true;
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
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
div {
  margin: 0 0 0 0;
  padding: 0;
}
.content {
  width: 100%;
}

.type-box {
  background: #00acc1;
  width: auto;
  height: 600px;
}

.typing {
  width: auto;
  font-family: "黑体", "STHeiti", "STXihei", "SimHei", "Microsoft YaHei",
    "Apple LiGothic Medium", sans-serif;
  font-weight: lighter;
  color: white;
  font-size: 50px;
}

.typing-title {
  color: white;
  font-size: 22px;
}
.btn-word {
  font-family: "黑体", "STHeiti", "STXihei", "SimHei", "Microsoft YaHei",
    "Apple LiGothic Medium", sans-serif;
  font-size: 17px;
  font-weight: bolder;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  transition: 0.3s;
  opacity: 0;
}

img {
  width: 80%;
  height: 90%;
}
.c2-title {
  font-family: "黑体";
  font-weight: lighter;
}
.c2-content {
  font-family: "黑体", "STHeiti", "STXihei", "SimHei", "Microsoft YaHei",
    "Apple LiGothic Medium", sans-serif;
  width: 400px;
  margin: 0 auto;
  color: #696969;
}
</style>
