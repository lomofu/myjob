<template>
  <v-card>
    <v-footer padless>
      <v-card flat tile class="indigo lighten-1 text-center" width="100%">
        <v-card-text>
          <v-icon size="80" color="white">mdi-grain</v-icon>
          <v-card-text class="footer-ben">Ben.</v-card-text>
        </v-card-text>

        <v-card-text class="white--text fooeter-support">
          Support By:<br />
          Lomo Fu <br />QH
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text footer">
          <strong> © {{ new Date().getFullYear() }} , Ben. Web Services</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<style lang="scss" scoped>
  @import "@/assets/css/public/footer.scss";
</style>
