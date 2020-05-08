<template>
  <div>
    <b-container>
      <li>
        <h6>{{category.name}}</h6>
      </li>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "CategoryDetail",
  
  computed: {
    category() {
      console.log(this.$store.state.selectedCategory);
      return this.$store.state.selectedCategory;
    }
  }
};
</script>