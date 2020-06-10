<template>
  <div class="product">
    <b-container>
      <b-row class="mt-5">
        <b-col cols="9">
          <b-card>
            <b-row>
              <b-col cols="4">
                <div style="margin-bottom:20px;">
                  <b-img
                    :src="picture"
                    fluid
                    alt="Responsive image"
                    style="width:200px; height: 200px; border: 1px; solid; grey;"
                  ></b-img>
                  <!-- <span v-for="img in image" :key="img.image" style="padding:10px;">
                    <b-img :src="img" fluid alt="Responsive image" id="small" @click="change(img)"></b-img>
                  </span> -->
                  <hr />
                  <h6>SHARE THIS PRODUCT</h6>
                  <div class="arrow">
                    <span>
                      <i id="share" class="fab fa-facebook-f"></i>
                    </span>
                  </div>
                  <div class="arrow">
                    <span>
                      <i id="share" class="fab fa-twitter"></i>
                    </span>
                  </div>
                </div>
              </b-col>
              <b-col cols="8">
                <div>
                  <h5>
                    <div id="icon">
                      <i id="ico" class="fas fa-heart"></i>
                    </div>
                    {{ product.name }}
                  </h5>
                </div>
                <span class="dis">
                  <i id="star" class="fas fa-star"></i>
                </span>
                <span class="dis">
                  <i id="star" class="fas fa-star"></i>
                </span>
                <span class="dis">
                  <i id="star" class="fas fa-star"></i>
                </span>
                <span class="dis">
                  <i id="star" class="fas fa-star"></i>
                </span>
                <span class="dis">
                  <i id="star" class="far fa-star"></i>
                </span>
                <a href="#">
                  <span style="color: #264996; font-size: 13px;">(19 ratings)</span>
                </a>
                <hr />
                <h4>
                  <strong>&#8358; {{ product.price }}</strong>
                </h4>
                <span>
                  <h6 style="text-decoration: line-through; color: #75757A;">
                    &#8358; {{ product.price  }}
                    <button
                      class="pass"
                      style="padding: 5px"
                    >{{ product.percent }}</button>
                  </h6>
                </span>
                <hr />
                <h6 v-if="product.choice">SELECT VARIATION</h6>
                <div
                  v-if="product.variant"
                  style="margin-bottom: 10px; padding: 0px; margin-left: 0px"
                >
                  <span class="varie">
                    <button id="variation">39</button>
                  </span>
                  <span class="varie">
                    <button id="variation">40</button>
                  </span>
                  <span class="varie">
                    <button id="variation">41</button>
                  </span>
                  <span class="varie">
                    <button id="variation">42</button>
                  </span>
                  <span class="varie">
                    <button id="variation">43</button>
                  </span>
                </div>
                <div v-if="product.size" style="margin-bottom: 5px; padding: 0px; margin-left: 0px">
                  <span class="varie">
                    <button id="variation">S</button>
                  </span>
                  <span class="varie">
                    <button id="variation">M</button>
                  </span>
                  <span class="varie">
                    <button id="variation">L</button>
                  </span>
                  <span class="varie">
                    <button id="variation">XL</button>
                  </span>
                  <span class="varie">
                    <button id="variation">2XL</button>
                  </span>
                </div>
                <div>
                  <b-button
                    v-b-modal.modal-center
                    variant
                    block
                    id="style"
                    @click="addToCart(product)"
                  >
                    <b style="color: #FFFFFF; font-size:16px;">ADD TO CART</b>
                    <div id="cart">
                      <i class="fas fa-cart-plus"></i>
                    </div>
                  </b-button>
                  <b-modal
                    id="modal-center"
                    ref="my-modal"
                    centered
                    title="Add to Cart"
                    hide-footer
                    hide-header
                  >
                    <h4>Add to Cart​</h4>
                    <br />
                    <h6>{{ product.name }} added to cart</h6>
                    <div>
                      <button class="add1" @click="hideModal">CONTINUE SHOPPING</button>
                      <!-- <button class="add1" @click="remove(product.id)">REMOVE FROM CART</button> -->

                      <button class="add" @click="openCart">VIEW CART AND CHECKOUT</button>
                    </div>
                  </b-modal>
                </div>

                <hr />

                <p style="text-align: left">PROMOTIONS</p>
                <b-row>
                  <b-col cols="1">
                    <ul>
                      <li>
                        <i id="promo" class="fas fa-shipping-fast" style="color: #0373fc"></i>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i id="promo" class="fas fa-star"></i>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i id="promo" class="fas fa-star"></i>
                      </li>
                    </ul>
                  </b-col>
                  <b-col>
                    <a href="#">
                      <ul>
                        <li>
                          Stay safe go cashless with cherry pay, Get additional
                          5% off
                        </li>
                      </ul>
                    </a>

                    <a href="#">
                      <ul>
                        <li>Enjoy unlimited free delivery with Cherry Prime</li>
                      </ul>
                    </a>
                    <a href="#">
                      <ul>
                        <li>
                          Buy airtime and data on Cherry one and get up to
                          &#8358;500 back
                        </li>
                      </ul>
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="3">
          <b-card class="p-0">
            <h6 style="text-align: left; font-size: 14px">
              <p style="text-align:left;">DELIVERY AND RETURNS</p>
            </h6>
            <hr />
            <b-card-text>
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
export default {
  name: "ProductContent",
  data() {
    return {
      picture: this.$store.state.selectedProduct.image
    };
  },
  computed: {
    // ...mapState(['product', 'image']),
    product() {
      return this.$store.state.selectedProduct;
    },
    image() {
      return this.$store.state.selectedProduct.image;
    },
    cartItem() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart(x) {
      let itemExist = false;
      let quantity = null;
      //check if item exist
      this.$store.state.cart.forEach(item => {
        if (item.id === x.product_id) {
          itemExist = true;
          quantity = item.quantity + 1;
        }
      });
      if (itemExist) {
        // remove item if it exist
        let item1 = this.cartItem.filter(item => {
          return item.id != x.product_id;
        });
        this.$store.commit("setRemoveItemCart", item1);
        // set removed item with its new quantity
        let item = {
          id: x.product_id,
          img: x.image,
          name: x.name,
          quantity: quantity,
          unitPrice: x.price,
          subTotal: parseInt(x.price) * quantity
        };
        this.$store.commit("setCart", item);
        this.setCart();
      } else {
        let item = {
          id: x.product_id,
          img: x.image,
          name: x.name,
          quantity: 1,
          unitPrice: x.price,
          subTotal: x.price
        };
        this.$store.commit("setCart", item);
        this.setCart();
      }
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },

    change(img) {
      this.picture = img;
    },
    openCart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style scoped>
#style {
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}
.add {
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}
.add1 {
  background-color: #ffffff;
  height: 45px;
  border-radius: 5px;
  color: #f68b1e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
  margin: 5px;
}
.arrow {
  width: 30px;
  display: inline-block;
  margin: 5px;
  padding: 4px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
}
.arrow:hover {
  color: #f68b1e;
  border: 2px solid #f68b1e;
}
#share {
  font-size: 20px;
}
#cart {
  float: left;
  color: white;
  font-size: 20px;
}
.product {
  background-color: #f1f1f1;
  height: max-content;
  width: 100%;
}
#small {
  width: 70px;
  height: 70px;
  border: 1px solid black;
}
#small:hover {
  border: 2px solid #f68b1e;
  cursor: pointer;
}
#promo {
  font-size: 20px;
}
li {
  list-style-type: none;
}

#icon {
  float: right;
}
#ico {
  color: #f68b1e;
}
.dis {
  padding: 5px;
}
#star {
  font-size: 13px;
  color: #f68b1e;
}
.varie {
  margin: 4px;
}
#variation {
  padding: 4px;
  width: 40px;
}
</style>
