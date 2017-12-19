<template>
<div>
  <div>
      <router-link :to="'/'+item.cat_id" v-for="(item, index) in cart">
        {{ item.cat_name }}</router-link>
        <router-view/>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      cart: []
    }
  },
  created() {
    this.$http.get('http://h6.duchengjiu.top/shop/api_cat.php')
      .then(res => {
        this.cart = res.data.data
      })
  }
}
</script>

<style>

</style>
