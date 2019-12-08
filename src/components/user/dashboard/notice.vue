<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <v-icon color="orange">mdi-bell-ring</v-icon>
          <span class="headline ml-3">公告</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="col-12">
                <form>
                  <v-textarea
                    label="请输入你想发布的公告"
                    auto-grow
                    solo
                    counter="400"
                    clearable
                    required
                    :error-messages="contentErrors"
                    clearable-icon="mdi-close"
                    v-model="form.contents"
                    @input="$v.form.contents.$touch()"
                    @blur="$v.form.contents.$touch()"
                  ></v-textarea>
                </form>
              </v-col>
            </v-row>
          </v-container>
          <small>*公告内容不能超过400字</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleClose">关闭</v-btn>
          <v-btn color="blue darken-1" text @click="handleSendNotice"
            >推送</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <pushBar ref="pushBar"></pushBar>
  </v-row>
</template>
<script>
import { eventBus } from "../../../main";
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  validations: {
    form: {
      contents: { required, maxLength: maxLength(400) }
    },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },
  components: {
    pushBar: () => import("../project/pushBar.vue")
  },
  data: () => ({
    dialog: false,
    form: {
      contents: ""
    }
  }),
  methods: {
    handleSendNotice() {
      this.$v.form.$touch();
      if (!this.$v.form.contents.maxLength || !this.$v.form.contents.required) {
        return false;
      } else {
        this.$v.form.$reset();
        this.dialog = false;
        this.$refs.pushBar.show.info = true;
        setTimeout(() => {
          this.$refs.pushBar.show.success = true;
          this.push = false;
        }, 3000);
      }
    },
    handleClose() {
      this.$v.form.$reset();
      this.dialog = false;
    }
  },
  computed: {
    contentErrors() {
      const errors = [];
      if (!this.$v.form.contents.$dirty) return errors;
      !this.$v.form.contents.maxLength && errors.push("内容最多只能含有400字");
      !this.$v.form.contents.required && errors.push("公告内容不能为空");
      return errors;
    }
  },
  created() {
    eventBus.$on("openDialog", message => {
      this.dialog = message;
    });
  }
};
</script>
