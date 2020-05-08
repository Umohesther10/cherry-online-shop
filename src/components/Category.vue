<template>
  <div class="cate">
    <div class="menu" v-for="category in categories" :key="category.id">
      <div style="padding: 10px">
        <span
          ><i
            :class="category.icon"
            style="display: inline-block; width: 40px;"
          ></i
        ></span>
        <a class="link" @click="goToCategory(category)">{{ category.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: `Weavons`,
          icon: "fas fa-cut"
        },
        {
          id: 2,
          name: `Baby Accessories`,
          icon: "fas fa-baby"
        },
        {
          id: 3,
          name: `Phones`,
          icon: "fas fa-mobile-alt"
        },
        {
          id: 4,
          name: `Electronics`,
          icon: "fas fa-user"
        },
        {
          id: 5,
          name: `Men shoes`,
          icon: "fas fa-shoe-prints"
        },
        {
          id: 6,
          name: `Women Dresses`,
          icon: "fas fa-female"
        },
        {
          id: 7,
          name: `Women Shoes`,
          icon: "fas fa-shoe-prints"
        },
        {
          id: 8,
          name: `Men Clothes`,
          icon: "fas fa-male"
        },
        {
          id: 9,
          name: `Laptops`,
          icon: "fas fa-laptop"
        },
        {
          id: 10,
          name: `Accessories`,
          icon: "fas fa-tshirt"
        }
      ]
    };
  },

  computed: {
    allCategory() {
      return this.$store.state.categories;
    }
  },
  methods: {
    goToCategory(category) {
      this.$store.commit("setSelectedCategoryValue", category);
      this.$router.push({ path: `/category/${category.id}-${category.name}` });
    }
  }
};
</script>
<style scoped>
.link {
  /* color: blue; */

  cursor: pointer;
}
.change {
  list-style-type: none;
  font-size: 12px;
  padding: 0px, 0px, 0px, 0px;
}
.change:hover {
  color: #0373fc;
  cursor: pointer;
}
.button {
  margin-bottom: 10px;
}
</style>
