<template>
  <div class="home">
    <Header />
    <b-container>
      <b-row>
        <b-col>
          <div class="side">
            <Category />
          </div>
        </b-col>
        <b-col cols="7">
          <Carousel />
        </b-col>
        <b-col>
          <div class="first">
            <img
              data-src="https://ng.jumia.is/cms/..//cms/Homepage/2020/W13-2/KE_TW_12_StaySafe_16032020_BF.jpg"
              src="https://ng.jumia.is//cms/Homepage/2020/W13-2/KE_TW_12_StaySafe_16032020_BF.jpg"
              class="-fw"
              alt="Covid-19"
              style="max-width: 20rem;"
              fluid
            />
          </div>
          <div class="second">
            <img
              src="../assets/image1.gif"
              class="-fw"
              alt="Mobile App"
              style="max-width: 20rem;"
              fluid
            />
          </div>
        </b-col>
      </b-row>
      <div style="margin-bottom:20px">
        <b-row>
          <b-col>
            <div class="center">
              <span style="display:inline-block; ">
                <img
                  data-src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/grocery-essentials.png"
                  src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/grocery-essentials.png"
                  style="width: 40px; height: 40px"
                  alt="Groceries"
                />
                Groceries
              </span>
            </div>
          </b-col>
          <b-col>
            <div class="center">
              <span style="display:inline-block; ">
                <img
                  data-src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/health-essentials.png"
                  src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/health-essentials.png"
                  style="width: 40px; height: 40px"
                  alt="Health"
                />
                Health
              </span>
            </div>
          </b-col>
          <b-col>
            <div class="center">
              <span style="display:inline-block;  ">
                <img
                  data-src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/stay-safe.png"
                  src="https://ng.jumia.is/cms/Homepage/2020/W13-2/quicklinks/stay-safe.png"
                  style="width: 40px; height: 40px"
                  alt="Stay Safe"
                />
                Stay Safe
              </span>
            </div>
          </b-col>
          <b-col>
            <div class="center">
              <span style="display:inline-block; ">
                <img
                  data-src="https://ng.jumia.is/cms/QuickLinks/74287750_2623128224418987_4410112749275709440_n.png"
                  src="https://ng.jumia.is/cms/QuickLinks/74287750_2623128224418987_4410112749275709440_n.png"
                  style="width: 40px; height: 40px"
                  alt="Free Delivery"
                />
                Free Delivery
              </span>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-row>
        <b-col cols="12">
          <b-card bg-variant="default" text-variant="black" header="Top Selling Items" align="left">
            <b-card-text>
              <b-row>
                <b-col v-for="product in allProduct" :key="product.product_id">
                  <Product :product="product" />
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col cols="12">
          <b-card
            bg-variant="default"
            header-bg-variant="danger"
            text-variant="black"
            header="Deals of the Day"
            align="left"
          >
            <b-card-text>
              <b-row>
                <b-col v-for="item in allProduct2" :key="item.id">
                  <Product :product="item" />
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col cols="12">
          <b-card>
            <b-row>
              <b-col cols="6">
                <div class="ar _16-7" id="ar">
                  <img
                    data-src="https://ng.jumia.is/cms/Homepage/2020/W14/NG_W14_MERCH2_Floor.jpg"
                    src="https://ng.jumia.is/cms/Homepage/2020/W14/NG_W14_MERCH2_Floor.jpg"
                    class="-rad4"
                    alt="NG_W12_DB1.1_Cozy"
                  />
                </div>
              </b-col>
              <b-col cols="6" fluid>
                <div class="ar _16-7" id="ar">
                  <img
                    data-src="https://ng.jumia.is/cms/Homepage/2020/W15/image-(21).png"
                    src="https://ng.jumia.is/cms/Homepage/2020/W15/image-(21).png"
                    class="-rad4"
                    alt="NG_W15_DB1.2_Contactless"
                  />
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col cols="12">
          <b-card
            bg-variant="default"
            header-bg-variant="success"
            header-border-variant="success"
            hea
            text-variant="black"
            header="Featured Product"
            align="left"
          >
            <b-card-text>
              <b-row>
                <!-- <b-col v-for="item in allProduct" :key="item.id">
                  <Product :product="item" />
                </b-col> -->
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col cols="12">
          <b-card>
            <b-row>
              <b-col cols="6">
                <div class="ar _16-7" id="ar">
                  <img
                    data-src="https://ng.jumia.is/cms/Homepage/2020/W19/grocery-desktop.jpg"
                    src="https://ng.jumia.is/cms/Homepage/2020/W19/grocery-desktop.jpg"
                    class="-rad4"
                    alt="NG_W19_DB2.1_Groceries"
                  />
                </div>
              </b-col>
              <b-col cols="6" fluid>
                <div class="ar _16-7" id="ar">
                  <img
                    data-src="https://ng.jumia.is/cms/Homepage/2020/W20/Artboard-1-copy-2-(1).jpg"
                    src="https://ng.jumia.is/cms/Homepage/2020/W20/Artboard-1-copy-2-(1).jpg"
                    class="-rad4"
                    alt="NG_W20_DB1.1_StayFit"
                  />
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/Header.vue";
import Category from "@/components/Category.vue";
import Carousel from "@/components/Carousel.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";
import Top from "@/components/Top.vue";
export default {
  name: "Home",
  data: () => ({
    items: null
  }),
  components: {
    Header,
    Category,
    Carousel,
    Product,
    Footer,
    Top
  },
  created () {
    axios.get("http://localhost:5000/products").then(response => {
      this.$store.commit("setProduct", response.data);
    });
  },
  computed: {
    allProduct () {
      let x = this.$store.state.products.filter(item =>
        item.product_id <= 4
        );
        return x
    },
    allProduct2() {
      let x = this.$store.state.products.filter(item =>
        [5, 6, 7, 8].includes(item.product_id)
      );
      return x;
    },
    // allProduct3() {
    //   let x = this.$store.state.products.filter(item =>
    //     [9, 10, 11, 12].includes(item.id)
    //   );
    //   return x;
    // }
  },
  methods: {}
};
</script>

<style scoped>
.center {
  width: 100%;
  background-color: white;
  display: inline-block;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 20px;
}
.side {
  margin-top: 50px;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 12px;
  padding-bottom: 20px;
}

.first {
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 0px;
  border: 1px solid white;
  border-style: none;
}
.second {
  border: 1px solid white;
  border-radius: 5px;
  height: 200px;
}
img {
  width: 100%;
  height: 200px;
  border-style: none;
}
.top {
  margin-top: 50px;
}
.col-6 {
  padding: 0px !important;
}
.home {
  width: 100%;
  height: fit-content;
  background-image: url(https://ng.jumia.is/cms/Homepage/2020/W17/upd-Ramdan_BG.jpg);
}
</style>
