<template>
  <div class="animated fadeIn">
    <v-toolbar flat color="white">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-sheet height="580" class="pa-3 mr-2">
      <v-calendar
        elevation="10"
        class="mr-5"
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :event-margin-bottom="3"
        :now="today"
        :type="type"
        @click:event="showEvent"
        @click:more="viewDay"
        @click:date="viewDay"
        @change="updateRange"
        offset-x
        size="40"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
      >
        <v-card color="grey lighten-4" min-width="350px" flat>
          <v-toolbar :color="selectedEvent.color" dark>
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.details"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary" @click="selectedOpen = false">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>
  </div>
</template>
<script>
export default {
  props: ["type"],
  data: () => ({
    today: null,
    focus: null,
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: []
  }),
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.$emit("updateType", "day");
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
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
    fetchData(to) {
      let { pid } = to.params;
      this.$refs.calendar.checkChange();
      let array = this.$store.getters.getEvents;
      this.events = array.find(e => e.id == pid).data;
    }
  },
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

      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  watch: {
    $route(to) {
      this.fetchData(to);
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
    let array = this.$store.getters.getEvents;
    if (array.length > 0)
      this.events = array.find(e => e.id == this.$route.params.pid).data;
  }
};
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
  font-size: 24px !important;
}
.v-calendar {
  background-color: #fff8a636 !important;
}
</style>
