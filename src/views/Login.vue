<template>
  <v-row>
    <v-col cols="12" xs="5" sm="5" md="5" lg="5" xl="5">
      <div class="left"></div>
    </v-col>
    <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7">
      <v-row style="position:relative;top: 20%">
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          class="text-center"
        >
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              class="text-center"
            >
              <v-icon size="80">mdi-grain</v-icon>
              <span class="display-1 font-weight-black my-title">Ben.</span>
            </v-col>
          </v-row>
          <v-row justify="center" style="margin: 50px auto">
            <panel />
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import panel from "../components/public/login/loginPanel.vue";
export default {
  name: "login",
  components: {
    panel
  }
};
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
}

.left {
  background-image: url("../../public/index/login-ben.png");
  width: auto;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0;
  padding: 0;
  opacity: 0.8;
}
</style>
