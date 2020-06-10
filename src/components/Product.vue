<template>
  <div class="product">
    <div class="point">
      <b-card @click="goToProduct(product)">
        <!-- img-src img-alt="Image" img-top tag="article" style="max-width: 20rem;"
        class="mb-2" >-->
        <b-img
          :src="product.image"
          rounded
          alt="Rounded image"
          style="width: 200px; height: 200px; border: 2px solid #e6e6e6;"
        ></b-img>
        <b-card-text>
          <div style="padding: 10px">
            <h6 style="font-size: 15px">{{ product.name }}</h6>
            <p>
              <b>&#8358; {{ product.price }}</b>
            </p>
          </div>
        </b-card-text>
        <b-button href="#" variant="warning" block>Buy Now</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  props: ["product"],
  data() {
    return {
    };
  },
  methods: {
    goToProduct(product) {
      this.$router.push({ path: `/products/${product.product_id}-${product.name.replace(/[' ']+/g,'-').toLowerCase()}` });
    },
  },
};
</script>
<style>
.product {
  display: inline-block;
}
.point {
  cursor: pointer;
}
.point:hover {
  border: 1px solid rgb(238, 231, 231);
}
p {
  text-align: center;
}
</style>
