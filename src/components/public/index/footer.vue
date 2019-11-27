<template>
  <v-card>
    <v-footer padless>
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-icon size="80" color="white">mdi-grain</v-icon>
          <v-card-text class="headline font-weight-black" style="color: white"
            >Ben.</v-card-text
          >
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Support By:<br />
          Lomo Fu <br />QH
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          <strong>
            © {{ new Date().getFullYear() }} , Ben. Web Services,</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<style scoped></style>
