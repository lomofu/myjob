<template>
  <div class="animated fadeIn">
    <v-toolbar-title class="text-center mb-5 mr-12">{{
      title
    }}</v-toolbar-title>
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

      const startMonth = this.start.month;
      const endMonth = this.end.month;

      const startYear = start.year;
      const endYear = end.year;

      const startDay = start.day;
      const endDay = end.day;

      switch (this.type) {
        case "month":
          return `${startYear}年 ${startMonth}月 `;
        case "week":
          return `${startYear}年${startMonth}月${startDay}日  -  ${endYear}年${endMonth}月${endDay}日`;
        case "day":
          return `${startYear}年 ${startMonth}月${startDay}日 `;
      }
      return "";
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
