<template>
  <div class="price">
    <index-nav></index-nav>
    <div class="price-main">
      <div class="price-box text-center">
        <v-row class="price-content">
          <v-col>
            <p class="price-title animated fadeInDown">计划和价格</p>
            <v-row class="animated fadeInUp" justify="center">
              <div
                v-for="(item, index) in card"
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
export default {
  name: "Price",
  components: {
    indexNav: () => import("../components/public/nav.vue"),
    card: () => import("../components/price/priceCard.vue")
  },
  data: () => ({
    card: [
      {
        icon: {
          colors: "green",
          data: "mdi-cloud-check"
        },
        title: "免费使用",
        price: "Free",
        content: [
          "创建你的项目的时间表,单账户可管理最多5个",
          "分享时间表给Team中的成员",
          "单个Team最多可以有10人"
        ],
        button: "免 费 注 册",
        className: "d-table-cell"
      },
      {
        icon: {
          color: "black",
          data: "mdi-star-circle"
        },
        title: "Plus +",
        price: "¥ 6.66/月",
        content: [
          "我们目前正在开发的一些更强大的功能",
          "不限Team的数量",
          "单个Team上线1000人"
        ],
        button: "Coming Soon",
        className: "d-table-cell",
        isDisabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/price/price.scss";
</style>
