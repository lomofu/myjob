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
              :startDelay="300"
              :strings="config.typecontent"
              :typeSpeed="40"
              @onComplete="handleComplete"
              class="typing-title"
            >
              <h1>
                <v-icon color="white" size="55px" style="margin-right: 14px"
                  >{{ config.icon }}
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
                      :height="config.btn.height"
                      :placeholder="config.btn.placeholder"
                      :prepend-inner-icon="config.btn.icon"
                      required
                      solo
                      transition="scroll-y-reverse-transition"
                      v-model="email"
                      v-show="config.showInput"
                    ></v-text-field>
                  </transition>
                </v-col>
              </v-row>
            </transition>
            <v-row justify="center">
              <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                <v-btn
                  @click="handleSubmit"
                  block
                  class="home-btn-word"
                  dark
                  height="50"
                  v-show="config.showInput"
                  >{{ config.btn.word }}
                </v-btn>
              </v-col>
            </v-row>
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
                {{ config.content.p1[0] }}
              </p>
              <p class="home-row-content">
                {{ config.content.p1[1] }}
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
                  {{ config.content.p2[0] }}
                </p>
                <p class="home-row-content">
                  {{ config.content.p2[1] }}
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
                  {{ config.content.p3[0] }}
                </p>
                <p class="home-row-content">{{ config.content.p3[1] }}</p>
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
              <v-col
                cols="12"
                lg="6"
                md="6"
                sm="12"
                xl="6"
                xs="12"
                class="text-center"
              >
                <img
                  class="home-row-img3"
                  src="../../public/img/home/devices.png"
                  alt="device"
                />
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12" xl="6" xs="12">
                <p class="text-center home-row-title">
                  {{ config.content.p4[0] }}
                </p>
                <p class="home-row-content">{{ config.content.p4[1] }}</p>
                <p class="text-center home-row-content-content3">
                  <img src="../../public/img/home/chrome.png" alt="web" />
                  &nbsp;
                  <img src="../../public/img/home/andriod.jpg" alt="phone" />
                </p>
                <br />
                <router-link to="/support">
                  <p class="text-center" v-ripple>立即前往下载</p>
                </router-link>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-lazy>
    <index-footer></index-footer>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, required } from "vuelidate/lib/validators";
import { WOW } from "wowjs";
import { HOME } from "../common/view/Constant";

export default {
  name: "home",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    chart: () => import("../components/home/chart.vue"),
    speed: () => import("../components/home/speed.vue"),
    indexFooter: () => import("../components/public/footer.vue")
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data: () => ({
    config: {
      typecontent: HOME.VIEW.TYPECONTENT,
      btn: HOME.VIEW.BTN,
      content: HOME.VIEW.CONTENT,
      show: true,
      showInput: false,
      icon: "mdi-check-all"
    },
    email: ""
  }),
  methods: {
    handleComplete() {
      this.config.showInput = true;
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
      !this.$v.email.email && errors.push(HOME.TIPS.EMAIL_ILLEGAL);
      !this.$v.email.required && errors.push(HOME.TIPS.EMAIL_IS_EMPTY);
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
