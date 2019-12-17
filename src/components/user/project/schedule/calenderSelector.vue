<template>
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
          v-model="date"
          label="请选择开始日期"
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
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false
  })
};
</script>
<style scoped></style>
