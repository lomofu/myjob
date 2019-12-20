<template>
  <div>
    <table>
      <th>
        <span :class="isToday(0) ? 'todays' : null">
          Sun {{ GetDateStr(false, 0) }}
        </span>
      </th>
      <th>
        <span :class="isToday(1) ? 'todays' : null">
          Mon {{ GetDateStr(false, 1) }}
        </span>
      </th>
      <th>
        <span :class="isToday(2) ? 'todays' : null">
          Tue {{ GetDateStr(false, 2) }}
        </span>
      </th>
      <th>
        <span :class="isToday(3) ? 'todays' : null">
          Wed {{ GetDateStr(false, 3) }}
        </span>
      </th>
      <th>
        <span :class="isToday(4) ? 'todays' : null">
          Thu {{ GetDateStr(false, 4) }}
        </span>
      </th>
      <th>
        <span :class="isToday(5) ? 'todays' : null">
          Fri {{ GetDateStr(false, 5) }}
        </span>
      </th>
      <th>
        <span :class="isToday(6) ? 'todays' : null">
          Sat {{ GetDateStr(false, 6) }}
        </span>
      </th>
      <tr v-for="i in 2" :key="i">
        <td v-for="(i, index) in 7" :key="i">
          <v-card
            height="100%"
            width="100%"
            class="text-left"
            v-if="isHaveEvent(GetDateStr(true, index))"
            @click="
              handleEditLookInfo(renderEvent(GetDateStr(true, index, index)))
            "
          >
            <div class="ml-3 mt-3">
              <p style="color: gray">start:</p>
              <p>{{ renderEvent(GetDateStr(true, index, index)).start }}</p>
            </div>
            <div class="ml-3 mt-2">
              <p style="color: gray">end:</p>
              <p>{{ renderEvent(GetDateStr(true, index, index)).end }}</p>
            </div>
            <v-sheet
              :color="renderEvent(GetDateStr(true, index, index)).color"
              class="mt-4"
            >
              <p
                class="text-center pa-3"
                style="color: white;width: 175px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
              >
                {{ renderEvent(GetDateStr(true, index, index)).details }}
              </p>
            </v-sheet>
          </v-card>
          <v-card
            height="100%"
            width="100%"
            class="text-left d-flex justify-center align-center"
            v-else
            v-ripple
            @click="handleAddEvent(index)"
            style="cursor: pointer"
          >
            <v-icon size="80">
              mdi-plus-circle-outline
            </v-icon>
          </v-card>
        </td>
      </tr>
    </table>

    <v-dialog
      v-model="dialog"
      max-width="700px"
      class="d-flex justify-space-around"
      color="white"
      persistent
    >
      <v-row style="background: white;">
        <v-col class="col-10">
          <v-card-title>
            <span style="font-size: 25px;font-weight: bold">添加事件</span>
          </v-card-title>
          <v-card-text>
            <small class="red--text">* 表示必填</small>
          </v-card-text>
          <v-form class="pa-3" max-width="25vw" ref="event">
            <div class="d-flex justify-space-around">
              <v-text-field
                clearable
                clear-icon="mdi-close"
                label="* 事件名称"
                outlined
                required
                :error-messages="nameErrors"
                v-model="event.name"
                @input="$v.event.name.$touch()"
                @blur="$v.event.name.$touch()"
              ></v-text-field>
            </div>
            <div class="d-flex justify-space-around">
              <calendarSelector
                :index="clickindex"
                ref="calendarselec"
              ></calendarSelector>
              <timeSelector ref="timeselec"></timeSelector>
            </div>
            <v-divider class="mt-8 mb-5"></v-divider>
            <v-label color="grey">颜色</v-label>
            <v-color-picker
              class="mt-1"
              hex
              v-model="event.color"
              hide-canvas
              hide-inputs
              hide-mode-switch
              mode="rgba"
              dot-size="1"
            ></v-color-picker>
            <br />
            <v-textarea
              label="请输入你对此事件的描述"
              auto-grow
              outlined
              counter="100"
              clearable
              required
              :error-messages="detailsErrors"
              clearable-icon="mdi-close"
              v-model="event.details"
              @input="$v.event.details.$touch()"
              @blur="$v.event.details.$touch()"
            ></v-textarea>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="handleCloseDialog"
              >关闭</v-btn
            >
            <v-btn color="red darken-1" text @click="reset">复原</v-btn>

            <v-btn color="blue darken-1" text @click="handleSubmitEvent"
              >保存</v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col class="col-2 ">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
import dayjs from "dayjs";
export default {
  name: "claTable",
  props: ["startDate"],
  validations: {
    event: {
      name: { required, maxLength: maxLength(50) },
      details: { maxLength: maxLength(100) }
    }
  },
  components: {
    calendarSelector: () => import("./calenderSelector.vue"),
    timeSelector: () => import("./timeSelector.vue")
  },
  data: () => ({
    today: new Date(),
    hasEvent: false,
    dialog: false,
    clickindex: null,
    claevents: [],
    tempevents: [],
    event: {
      name: null,
      details: null,
      start: null,
      end: null,
      color: null
    }
  }),
  methods: {
    GetDateStr(flag, AddDayCount, index, startDate) {
      let start;
      let dd;
      if (startDate) {
        start = startDate;
        dd = new Date(start);
      } else {
        start = this.$store.getters.getStart;
        dd = new Date(start.date);
      }
      dd.setDate(dd.getDate() + AddDayCount);
      const y = dd.getFullYear();
      const m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      if (flag) return `${y}-${m}-${d}`;
      return `${m}/${d}`;
    },
    isToday(index) {
      return (
        this.GetDateStr(true, 0, false, this.today) ===
        this.GetDateStr(true, index, false, this.startDate)
      );
    },
    handleAddEvent(index) {
      if (this.clickindex) this.clickindex = null;
      this.dialog = !this.dialog;
      this.clickindex = index;
    },
    handleEditLookInfo(val) {
      debugger;
      let event = this.event;
      let { name, start, end, details, color } = val;
      let startDate = new Date(start);
      let endDate = new Date(end);
      event.name = name;
      event.end = end;
      event.details = details;
      event.color = color;
      this.dialog = !this.dialog;
    },
    handleSubmitEvent() {
      let start =
        this.$refs.timeselec.start === null
          ? this.$refs.calendarselec.start
          : this.$refs.calendarselec.start + " " + this.$refs.timeselec.start;

      let end =
        this.$refs.timeselec.end === null
          ? this.$refs.calendarselec.end
          : this.$refs.calendarselec.end + " " + this.$refs.timeselec.end;

      this.$v.event.$touch();
      if (
        !this.$v.event.name.maxLength ||
        !this.$v.event.details.maxLength ||
        !this.$v.event.name.required
      ) {
        return false;
      } else {
        let { name, details, color } = this.event;
        this.tempevents.push({
          name: name,
          details: details,
          start: start,
          end: end,
          color: color.hex
        });
        this.reset();
        this.dialog = false;
      }
    },
    reset() {
      this.$v.$reset();
      this.$refs.calendarselec.end = this.$refs.calendarselec.start;
      this.$refs.timeselec.start = null;
      this.$refs.timeselec.end = null;
      this.event.name = null;
      this.event.details = null;
      this.event.end = null;
      this.event.color = null;
    },
    isHaveEvent(now) {
      let temp = this.claevents;
      if (temp) {
        temp = temp
          .map(e => {
            let start = new Date(e.start);
            let end = new Date(e.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 59);
            let time = {
              start: start,
              end: end
            };
            return time;
          })
          .filter(e => new Date(now) >= e.start && new Date(now) <= e.end);

        return temp.length !== 0;
      } else {
        return false;
      }
    },
    renderEvent(now) {
      let res = [];
      this.claevents.forEach(e => {
        let start = new Date(e.start);
        let end = new Date(e.end);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 59);
        if (new Date(now) >= start && new Date(now) <= end) {
          res.push(e);
        }
      });
      return res[0];
    },
    handleCloseDialog() {
      this.dialog = !this.dialog;
      this.reset();
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.event.name.$dirty) return errors;
      !this.$v.event.name.maxLength && errors.push("事件名字不能超过50字");
      !this.$v.event.name.required && errors.push("事件名字不能为空");
      return errors;
    },
    detailsErrors() {
      const errors = [];
      if (!this.$v.event.details.$dirty) return errors;
      !this.$v.event.details.maxLength &&
        errors.push("事件描述最多只能含有100字");
      return errors;
    }
  },
  created() {
    const { pid } = this.$route.params;
    this.claevents = this.$store.getters.getEvents.find(e => (e.id = pid)).data;
  }
};
</script>
<style scoped>
div {
  margin: 0;
}
table {
  border-collapse: separate;
  border-spacing: 18px 50px;
}

td {
  text-align: center;
  min-width: 9vw;
  min-height: 18vh;
  width: 10vw;
  height: 18vh;
}
.todays {
  background: #2196f3;
  color: white;
  border-radius: 100px;
  padding: 10px;
}
.v-color-picker {
  -webkit-box-shadow: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}
.col-2 {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
</style>
