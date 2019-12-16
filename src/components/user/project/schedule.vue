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
      <v-spacer></v-spacer>
      <v-col class="col-11 d-flex justify-end mr-3">
        <table class="">
          <th>
            <span :class="0 === index ? 'today' : null">
              Sun {{ this.GetDateStr(startDate, 0) }}
            </span>
          </th>
          <th>
            <span :class="1 === index ? 'today' : null">
              Mon {{ this.GetDateStr(startDate, 1) }}
            </span>
          </th>
          <th>
            <span :class="2 === index ? 'today' : null">
              Tue {{ this.GetDateStr(startDate, 2) }}
            </span>
          </th>
          <th>
            <span :class="3 === index ? 'today' : null">
              Wed {{ this.GetDateStr(startDate, 3) }}
            </span>
          </th>
          <th>
            <span :class="4 === index ? 'today' : null">
              Thu {{ this.GetDateStr(startDate, 4) }}
            </span>
          </th>
          <th>
            <span :class="5 === index ? 'today' : null">
              Fri {{ this.GetDateStr(startDate, 5) }}
            </span>
          </th>
          <th>
            <span :class="6 === index ? 'today' : null">
              Sat {{ this.GetDateStr(startDate, 6) }}
            </span>
          </th>
          <tr>
            <td v-for="i in 7" :key="i">
              <v-card>
                start:<br />
                end:
              </v-card>
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ["type"],
  data: () => ({
    today: null,
    start: null,
    end: null,
    focus: null,
    index: null
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
    },
    GetDateStr(start, AddDayCount) {
      const dd = new Date(start);
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      const m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
      return `${m}/${d}`;
    }
  },
  created() {
    this.index = new Date().getDay();
  }
};
</script>
<style>
div {
  margin: 0;
  padding: 0;
}
.v-calendar-daily__head {
  margin-right: 45px !important;
}
.v-calendar-daily__intervals-head {
  border-right: white !important;
}
.v-past,
.v-present,
.v-future {
  border-right: white !important;
  border-bottom: white !important;
  color: white;
}
td {
  text-align: center;
  padding: 10px;
  background: #6a3093;
  width: 20vw;
  height: 8vw;
}

table {
  border-collapse: separate;
  border-spacing: 10px 50px;
}

.today {
  background: #005c97;
  color: white;
  border-radius: 100px;
  padding: 10px;
}
</style>
