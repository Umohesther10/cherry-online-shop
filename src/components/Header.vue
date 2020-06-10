<template>
  <div class="head">
    <div>
      <b-navbar
        toggleable="lg"
        variant="faded"
        fixed="top"
        id="header"
        type="light
      "
      >
        <b-navbar-brand style="font-size: 30px" href="/"
          >CHERRY SHOP</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit="search">
              <input
                size="sm"
                id="in"
                v-model="src"
                class="mr-sm-2"
                placeholder=" Search products, brands, categories"
              />
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                variant
                id="search"
                >SEARCH</b-button
              >
            </b-nav-form>
            <div></div>

            <b-nav-item-dropdown right class="head1" style="line-height: 40px;">
              <template v-slot:button-content>
                <i class="far fa-question-circle mr-2"></i> 

                <strong>Help?</strong>
              </template>
              <b-dropdown-item href="#">Help Center?</b-dropdown-item>
              <b-dropdown-item href="#">How to shop on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to pay on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to use a Voucher</b-dropdown-item>
              <b-dropdown-item href="#">Cherry Express</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- <b-navbar-nav class="head2">
              <b-nav-item to="/cart">
                <strong>Cart</strong>
                <span id="cart">
                  <i class="fas fa-cart-plus"></i>
                  {{ totalQuantity }}
                </span>
              </b-nav-item>
            </b-navbar-nav> -->

            <b-navbar-nav class="head2">
              <b-nav-item to="/cart">
                <cart :total="total" />
              </b-nav-item>
            </b-navbar-nav>

            <!-- <span id="cart">
              <i class="fas fa-cart-plus"></i>
              {{cartCount }} Cart
            </span>-->

            <b-nav-item-dropdown
              right
              class="head3"
              dark
              style="line-height: 40px;"
            >
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                  <i class="fas fa-user mr-2"></i>
                <strong>Login</strong>
              </template>
              <b-dropdown-item href="/login">Log In</b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/signup" style="color: black;"
                  >Sign Up</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item href="/cart">Cart</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import cart from "@/components/cart.vue";
export default {
  name: "Header",
  components: {
    cart,
  },
  data() {
    return {
      src: "",
    };
  },
  methods: {
    search(evt) {
      evt.preventDefault();
      this.$router.push({ path: "search", query: { q: this.src } });
      this.$store.dispatch({
        type: "setSearch",
        item: this.src,
      });
    },
  },
  computed: {
    // get total cart quantity
    total() {
      return this.$store.getters.getCartQty;
    },
  },
};
</script>

<style>
#cart {
  padding-left: 0;
  padding-right: 0;
  background-color: transparent;
  color: #6e6e6e;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  text-transform: capitalize;
  text-align: left;
}


#in {
  width: 500px;
  height: 40px;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  background-color: white;
  outline: none;
  border: 1px #c7c7cd solid;
}
#search:hover{
  background-color: #f68b1e;
  
}
.head {
  margin-bottom: 56px;
}
#search {
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

#header {
  background-color: white !important;
}

.head1 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
.head2 {
  color: black !important;
  font-size: 16px !important;
  padding: 8px;
}

.head3 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
#focus:focus {
  outline: none !important;
}
</style>
