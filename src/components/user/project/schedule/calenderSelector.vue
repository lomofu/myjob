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
          label="开始日期"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on"
          disabled
          :value="start"
        ></v-text-field>
        <v-text-field
          :how-current="new Date()"
          v-model="end"
          label="结束日期"
          prepend-icon="mdi-calendar"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="end"
        @input="menu = false"
        :min="end"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  props: ["index"],
  data: () => ({
    start: null,
    end: null,
    menu: false
  }),
  methods: {
    GetDateStr() {
      const start = this.$store.getters.getStart;
      const dd = new Date(start.date);
      dd.setDate(dd.getDate() + this.index);
      const y = dd.getFullYear();
      const m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return `${y}-${m}-${d}`;
    }
  },
  watch: {
    index() {
      this.start = this.GetDateStr();
      this.end = this.start;
    }
  },
  mounted() {
    this.start = this.GetDateStr();
    this.end = this.start;
  }
};
</script>
<style scoped></style>
