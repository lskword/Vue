<template lang="html">
  <div>
    <ul>
      <li v-for="(item,index) in goods"><img :src="item.goods_thumb" alt=""> {{item.goods_name}}{{item.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: []
    }
  },
  methods: {
    getGoods(catId) {
      let url = 'http://h6.duchengjiu.top/shop/api_goods.php'
      if (catId) {
        url += "?cat_id=" + catId
      }
      this.$http.get(url)
        .then(res => {
          this.goods = res.data.data
        })
    }
  },
  watch: {
    $route (to, form) {
      console.log(1);
      const catId = to.params.id
      this.getGoods(catId)
    }
  }
}
</script>

<style lang="css">

</style>
