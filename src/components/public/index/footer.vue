<template>
  <v-card>
    <v-footer padless>
      <v-card flat tile class="indigo lighten-1 text-center" width="100%">
        <v-card-text>
          <v-icon size="80" color="white">mdi-grain</v-icon>
          <v-card-text class="footer-ben"
            >Ben.</v-card-text
          >
        </v-card-text>

        <v-card-text class="white--text fooeter-support">
          Support By:<br />
          Lomo Fu <br />QH
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text fooeter">
          <strong> © {{ new Date().getFullYear() }} , Ben. Web Services</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<style scoped>
.footer-ben {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bolder;
  font-size: 30px;
  color: white;
}

.pt-0 {
  font-family: PingFangNormal, Microsoft YaHei, 黑体, sans-serif;
  font-weight: lighter;
}

.fooeter-support {
  font-family: PingFangNormal, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bolder;
}

.fooeter {
  font-family: PingFangBold, Microsoft YaHei, 黑体, sans-serif;
  font-weight: bolder;
}
</style>
