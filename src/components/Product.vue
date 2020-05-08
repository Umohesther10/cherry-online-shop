<template>
  <div class="product">
    <div class="point">
      <b-card @click="goToProduct(product)">
        <!-- img-src img-alt="Image" img-top tag="article" style="max-width: 20rem;"
        class="mb-2" >-->
        <b-img
          src="http://res.cloudinary.com/dctmgu7mb/image/upload/v1588010737/rrwaoklynmnuszr2ito3.jpg"
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
      products: [
        {
          id: 1,
          name: "Curly wig",
          price: "22,000",
          imageLink: require("../assets/wig2.jpg"),
        },
        {
          id: 2,
          name: "Baby Hanger",
          price: "9,000",
          imageLink: require("../assets/hanger2.jpg"),
        },
        {
          id: 3,
          name: "I Phone 11",
          price: "289,000",
          imageLink: require("../assets/iphone.jpg"),
        },
        {
          id: 4,
          name: "Fridge",
          price: "223,000",
          imageLink: require("../assets/fridge.jpg"),
        },
        {
          id: 5,
          name: "Men shoes",
          price: "15,000",
          imageLink: require("../assets/shoe.jpg"),
        },
        {
          id: 6,
          name: "Gown",
          price: "6,000",
          imageLink: require("../assets/female dress.jpg"),
        },
        {
          id: 7,
          name: "Sneaker",
          price: "10,000",
          imageLink: require("../assets/sneakers.jpg"),
        },
        {
          id: 8,
          name: "Shirts",
          price: "5,000",
          imageLink: require("../assets/shirt.jpg"),
        },
        {
          id: 9,
          name: "HP Elite Book",
          price: "150,000",
          imageLink: require("../assets/hp.jpg"),
        },
        {
          id: 10,
          name: "Necklace",
          price: "2,000",
          imageLink: require("../assets/necklace.jpg"),
        },

        {
          id: 11,
          name: "Court Heels",
          price: "8,000",
          imageLink: require("../assets/heel.jpg"),
        },

        {
          id: 12,
          name: "Mac Book Pro",
          price: "350,000",
          imageLink: require("../assets/mac.jpg"),
        },
      ],
    };
  },

  methods: {
    goToProduct(product) {
      this.$store.commit("setSelectedProductValue", product);
      this.$router.push({ path: `/products/${product.id}-${product.name}` });
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
