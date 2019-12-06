<template>
    <v-footer padless>
      <v-card flat tile class="indigo lighten-1 text-center pa-3" width="100%">
        <v-card-text>
          <v-icon size="70" color="white">mdi-grain</v-icon>
          <v-card-text class="footer-ben mt-1">Ben.</v-card-text>
        </v-card-text>
        <v-card-text class="white--text fooeter-support mt-3 mb-2">
          Support By:<br />
          Lomo Fu <br />QH
        </v-card-text>
        <v-card-text class="white--text footer mt-2">
          <strong> © {{ new Date().getFullYear() }} , Ben. Web Services</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
<style lang="scss" scoped>
  @import "@/assets/css/public/footer.scss";
</style>
