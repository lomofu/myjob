<template>
  <div class="animated fadeIn">
    <v-toolbar flat color="white" class="d-flex justify-center mb-3">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="col-10">
        <v-calendar
          ref="calendar"
          v-model="focus"
          type="week"
          @change="updateRange"
          v-show="false"
        ></v-calendar>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-2 d-flex justify-start">
        <table>
          <th style="color: white">.</th>
          <tr>
            <td>
              <div class="d-flex justify-center align-center">
                <v-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
                </v-avatar>
                <p class="ml-2">Jason Oner</p>
              </div>
              <p class="ml-5 mt-6">总计: {{ totalTime }}</p>
            </td>
          </tr>
        </table>
      </v-col>
      <v-col class="col-10 d-flex justify-end">
        <calable :startDate="startDate"> </calable>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ["type"],
  components: {
    calable: () => import("./schedule/claTable.vue")
  },
  data: () => ({
    today: null,
    start: null,
    end: null,
    focus: null
  }),
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);
      return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
    },
    startDate() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startYear = start.year;
      const startMonth = this.start.month;
      const startDay = start.day;
      return `${startYear}-${startMonth}-${startDay}`;
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "short"
      });
    },
    totalTime() {
      return "0";
    }
  },
  methods: {
    setToday() {
      debugger;
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    updateRange({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  }
};
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: separate;
  border-spacing: 0 50px;
}
td {
  width: 10vw;
  height: 8vw;
  padding: 10px;
  overflow: hidden;
}
</style>
