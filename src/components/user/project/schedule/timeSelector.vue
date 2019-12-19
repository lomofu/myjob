<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="150px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="start"
          :label="start === null ? '请选择结束时间' : '*请选择结束时间'"
          prepend-icon="mdi-clock-outline"
          v-on="on"
        ></v-text-field>
        <v-text-field
          v-model="end"
          :label="start === null ? '请选择结束时间' : '*请选择结束时间'"
          prepend-icon="mdi-clock-outline"
          scrollable
          v-on="on"
        ></v-text-field>
      </template>
      <v-card class="pa-3 d-flex justify-space-around">
        <div>
          <p>开始:</p>
          <v-time-picker
            v-model="start"
            @input="menu = true"
            format="24hr"
            scrollable
            :max="max"
            clear-icon="mdi-close"
            clearable
            color="green"
          ></v-time-picker>
        </div>
        <div>
          <p>结束:</p>
          <v-time-picker
            class="ml-10"
            v-model="end"
            @input="menu = true"
            format="24hr"
            :min="min"
            scrollable
            clear-icon="mdi-close"
            clearable
          ></v-time-picker>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { eventBus } from "../../../../main";
export default {
  name: "timeSelector",
  data: () => ({
    menu: null,
    start: null,
    end: null,
    min: null,
    max: null,
    limit: true
  }),
  created() {
    eventBus.$on("limit", message => {
      if (message) {
        this.limit = true;
      } else {
        this.min = undefined;
        this.max = undefined;
        this.limit = false;
      }
    });
    eventBus.$on("dateHasChange", (start, end) => {
      debugger;
      let endTime = end + " " + this.end;
      let startTime = start + " " + this.start;
      if (new Date(endTime).getTime() - new Date(startTime).getTime() > 0) {
        return;
      }
      this.end = null;
    });
  },
  watch: {
    start() {
      this.end = null;
      if (this.limit) {
        this.min = this.start;
        this.max = this.end;
      }
    },
    end() {
      if (this.limit) {
        this.min = this.start;
        this.max = this.end;
      }
    }
  }
};
</script>

<style scoped></style>
