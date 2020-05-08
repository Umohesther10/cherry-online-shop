<template>
    <div class="container">
        <b-row>
            <b-col cols="5">
                <div class="star"><i fas-fa-star></i></div>
                <span>sell on cherry</span>
            </b-col>
             <b-col cols="7"> </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: "Top"
}
</script>
<style scoped>
.container{
    background-color: #f1f1f1;
}
.star{
    width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #f68b1e;
}
</style>