<template>
  <div class="animated fadeIn">
    1111
    <v-container>
      <v-toolbar flat color="white" class="d-flex justify-center mb-3">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col class="col-12">
          <v-sheet height="80">
            <v-calendar
              elevation="10"
              ref="calendar"
              v-model="focus"
              color="primary"
              type="week"
              @change="updateRange"
            ></v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-around">
        <v-card style="min-width:7vw;height: 150px;" v-for="i in 7" :key="i">
          2222222222
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["type"],
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
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  methods: {
    setToday() {
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
</style>
