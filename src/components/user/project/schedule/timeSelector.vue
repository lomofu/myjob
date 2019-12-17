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
          v-model="time"
          label="请选择时间"
          prepend-icon="mdi-clock-outline"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker v-model="time" @input="menu = false"></v-time-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "timeSelector",
  data: () => ({
    menu: null,
    time: null
  })
};
</script>

<style scoped></style>
