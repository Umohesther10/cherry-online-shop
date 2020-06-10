<template>
  <b-row class="mt-3">
    <b-col cols="12">
      <b-card
        bg-variant="default"
        header-bg-variant="danger"
        text-variant="black"
        header="Results"
        align="left"
      >
        <b-card-text>
          <b-row>
            <b-col v-for="item in searchItem" :key="item.id">
              <Product :product="item" />
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  name: "Search",
  components: {Product},
  
  computed: {
    searchItem() {
      return this.$store.state.searchitems;
    },
  },
};
</script>

<style>
.conatiner {
  margin-top: 100px;
}
</style>
