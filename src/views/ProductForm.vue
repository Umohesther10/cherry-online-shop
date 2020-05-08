<template>
  <div class="container">
    <div id="root">
      <h1>Adding Products</h1>
      <hr />
    </div>

    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Category Name:</label>
            <input type="text" class="form-control" v-model="categoryName" required />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Product Name:</label>
            <input type="text" class="form-control" v-model="productName" required />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Product Price:</label>
            <input type="number" class="form-control" v-model="productPrice" required />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Quantity in Stock:</label>
            <input type="number" class="form-control" v-model="quantity_in_stock" required />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Product Description</label>
            <input type="text" class="form-control" v-model="productDescription" required />
          </div>
        </form>
        <b-button type="submit" variant="primary" block @click="post">Post</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductForm",
  data: () => ({
    categoryName: "",
    productName: "",
    productPrice: "",
    quantity_in_stock: "",
    productDescription: ""
  }),

  methods: {
    post() {
      axios
        .post("http://localhost:5000/products", {
          name: this.productName,
          category_name: this.categoryName,
          price: this.productPrice,
          quantity_in_stock: this.quantity_in_stock,
          description: this.productDescription
        })
        .then(response => {
          alert(response.data.message);
        });
      this.productName = "";
      this.productPrice = "";
      this.categoryName = "";
      this.quantity_in_stock = "";
      this.productDescription = "";
    }
  }
};
</script>
<style scoped>
#wrapper {
  max-width: 320px;
  margin: 0 auto;
}

#root {
  padding-top: 0px;
}
.container {
  margin-top: 100px;
}
</style>
