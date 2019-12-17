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
          v-model="date"
          label="结束日期"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  props: ["cardDate"],
  data: () => ({
    start: null,
    date: new Date().toISOString().substr(0, 10),
    menu: false
  }),
  mounted() {
    this.start = this.cardDate;
  }
};
</script>
<style scoped></style>



