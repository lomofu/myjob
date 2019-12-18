<template>
  <div>
    <table>
      <th>
        <span :class="isToday(0) ? 'todays' : null">
          Sun {{ GetDateStr(0) }}
        </span>
      </th>
      <th>
        <span :class="isToday(1) ? 'todays' : null">
          Mon {{ GetDateStr(1) }}
        </span>
      </th>
      <th>
        <span :class="isToday(2) ? 'todays' : null">
          Tue {{ GetDateStr(2) }}
        </span>
      </th>
      <th>
        <span :class="isToday(3) ? 'todays' : null">
          Wed {{ GetDateStr(3) }}
        </span>
      </th>
      <th>
        <span :class="isToday(4) ? 'todays' : null">
          Thu {{ GetDateStr(4) }}
        </span>
      </th>
      <th>
        <span :class="isToday(5) ? 'todays' : null">
          Fri {{ GetDateStr(5) }}
        </span>
      </th>
      <th>
        <span :class="isToday(6) ? 'todays' : null">
          Sat {{ GetDateStr(6) }}
        </span>
      </th>
      <tr v-for="i in 2" :key="i">
        <td v-for="(i, index) in 7" :key="i">
          <v-card height="100%" width="100%" class="text-left" v-if="hasEvent">
            <div class="ml-3 mt-3">
              <p style="color: gray">start:</p>
              <p>{{ GetDateStr(index, index) }}</p>
            </div>
            <div class="ml-3 mt-2">
              <p style="color: gray">end:</p>
              <p>end:</p>
            </div>
            <v-sheet color="orange lighten-2" class="mt-4">
              <p class="text-center pa-3" style="color: white">1111</p>
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

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span style="font-size: 25px;font-weight: bold">添加事件</span>
        </v-card-title>
        <form class="pa-5">
          <div class="d-flex justify-space-around">
            <v-text-field
              clearable
              clear-icon="mdi-close"
              label="事件名称"
            ></v-text-field>
          </div>
          <div class="d-flex justify-space-around">
            <calendarSelector :index="clickindex"></calendarSelector>
            <timeSelector></timeSelector>
          </div>
        </form>
        <v-card-text>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">关闭</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">保存</v-btn>
        </v-card-actions>
      </v-card>
      111111111111
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "claTable",
  props: ["startDate"],
  components: {
    calendarSelector: () => import("./calenderSelector.vue"),
    timeSelector: () => import("./timeSelector.vue")
  },
  data: () => ({
    today: new Date(),
    hasEvent: false,
    dialog: false,
    clickindex: null,
    form: {
      picker: new Date().toISOString().substr(0, 10)
    }
  }),
  methods: {
    GetDateStr(AddDayCount, index, startDate) {
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
      if (index) return `${y}-${m}-${d}`;
      return `${m}/${d}`;
    },
    isToday(index) {
      return (
        this.GetDateStr(0, false, this.today) ===
        this.GetDateStr(index, false, this.startDate)
      );
    },
    handleAddEvent(index) {
      if (this.clickindex) this.clickindex = null;
      this.dialog = !this.dialog;
      this.clickindex = index;
    }
  }
};
</script>
<style scoped>
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
</style>
