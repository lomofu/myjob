<template>
  <div>
    <index-nav></index-nav>
    <v-row>
      <v-col>
        <div class="type-box text-center">
          <v-row class="type-content" justify="center">
            <h1>计划和价格</h1>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-card-title>
            <h2 style="margin: 0 auto">免费</h2>
          </v-card-title>
          <p class="text-center">
            <v-icon color="purple" size="60px">
              mdi-fire
            </v-icon>
          </p>
          <v-card-text>
            Our company takes pride in making handmade brushes. Our toothbrushes
            are available in 4 different bristel types, from extra soft to hard.
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <span class="subheading">Select type</span>
          </v-card-text>

          <v-card-actions>
            <v-btn block class="white--text" color="deep-purple accent-4">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Price",
  components: {
    indexNav: () => import("../components/public/nav.vue")
  }
};
</script>

<style scoped>
.type-box {
  background: #26c6da; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fbe594,
    #26c6da
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 550px;
}

.type-content {
  width: 100%;
  height: 250px;
}

.type-content::before {
  content: "";
  display: block;
  width: 100%;
  height: 120px;
}

.type-content h1 {
  color: white;
  font-weight: lighter;
  font-size: 80px;
  font-family: PingFangLight, Microsoft YaHei, 黑体, sans-serif;
}

@media screen and (min-width: 300px) and (max-width: 755px) {
  .type-content h1 {
    font-size: 50px;
  }
}
</style>
