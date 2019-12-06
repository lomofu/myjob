<template>
  <div class="price">
    <index-nav></index-nav>
    <div class="price-main">
      <div class="price-box text-center">
        <v-row class="price-content">
          <v-col>
            <p class="price-title animated fadeInDown">{{ config.title }}</p>
            <v-row class="animated fadeInUp" justify="center">
              <div
                v-for="(item, index) in config.card"
                :key="index"
                align="center"
                style="padding: 20px"
              >
                <card
                  :title="item.title"
                  :price="item.price"
                  :content="item.content"
                  :iconColors="item.icon.colors"
                  :icon="item.icon.data"
                  :button="item.button"
                  :class="item.className"
                  :isDisabled="item.isDisabled"
                ></card>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { PRICE } from "../common/view/Constant";
export default {
  name: "Price",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    card: () => import("../components/price/priceCard.vue")
  },
  data: () => ({
    config: {
      title: PRICE.VIEW.TITLE,
      card: PRICE.VIEW.CARD
    }
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/price/price.scss";
</style>
