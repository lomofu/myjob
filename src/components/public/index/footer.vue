<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <div style="text-align: center">
          <v-btn color="purple" dark v-on="on">
            Open In
          </v-btn>
        </div>
      </template>
      <div style="background: #f3f3f3;width: 100vw">111111111</div>
    </v-bottom-sheet>
  </div>
</template>
