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
          <p class="text-center mt-5">
            <v-btn color="red" dark @click="start = null">重置开始时间</v-btn>
          </p>
        </div>
        <div>
          <p class="ml-10">结束:</p>
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
          <p class="text-center  mt-5">
            <v-btn color="red ml-5" dark @click="end = null"
              >重置结束时间</v-btn
            >
          </p>
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
  },
  beforeDestroy() {
    eventBus.$off("limit");
    eventBus.$off("dateHasChange");
  }
};
</script>
