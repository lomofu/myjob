<template>
  <div>
    <table>
      <th>
        <span :class="isToday(0) ? 'todays' : null">
          Sun {{ GetDateStr(startDate, 0) }}
        </span>
      </th>
      <th>
        <span :class="isToday(1) ? 'todays' : null">
          Mon {{ GetDateStr(startDate, 1) }}
        </span>
      </th>
      <th>
        <span :class="isToday(2) ? 'todays' : null">
          Tue {{ GetDateStr(startDate, 2) }}
        </span>
      </th>
      <th>
        <span :class="isToday(3) ? 'todays' : null">
          Wed {{ GetDateStr(startDate, 3) }}
        </span>
      </th>
      <th>
        <span :class="isToday(4) ? 'todays' : null">
          Thu {{ GetDateStr(startDate, 4) }}
        </span>
      </th>
      <th>
        <span :class="isToday(5) ? 'todays' : null">
          Fri {{ GetDateStr(startDate, 5) }}
        </span>
      </th>
      <th>
        <span :class="isToday(6) ? 'todays' : null">
          Sat {{ GetDateStr(startDate, 6) }}
        </span>
      </th>
      <tr v-for="i in 2" :key="i">
        <td v-for="i in 7" :key="i">
          <v-card height="100%" width="100%" class="text-left" v-if="hasEvent">
            <div class="ml-3 mt-3">
              <p style="color: gray">start:</p>
              <p>{{ GetDateStr(startDate, i-1) }}</p>
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
            @click="dialog = !dialog"
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
          <v-text-field label="事件名称"></v-text-field>
          <div class="d-flex justify-space-around">
            <calendarSelector></calendarSelector>
            <timeSelector></timeSelector>
          </div>
        </form>
        <v-card-text>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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
    hasEvent: true,
    dialog: false,
    form: {
      picker: new Date().toISOString().substr(0, 10)
    }
  }),
  methods: {
    GetDateStr(start, AddDayCount) {
      const dd = new Date(start);
      dd.setDate(dd.getDate() + AddDayCount);
      const m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return `${m}/${d}`;
    },
    isToday(index) {
      return (
        this.GetDateStr(this.today, 0) ===
        this.GetDateStr(this.startDate, index)
      );
    },
    handleAddEvent() {}
  }
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 15px 50px;
}

td {
  text-align: center;
  min-width: 10vw;
  min-height: 8vw;
  width: 10vw;
  height: 8vw;
}
.todays {
  background: #2196f3;
  color: white;
  border-radius: 100px;
  padding: 10px;
}
</style>
