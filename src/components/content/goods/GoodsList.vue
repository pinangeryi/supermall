<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :key='item.title' :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props:{
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
  .goods {
    display: flex;

    /* 让弹性盒元素在必要的时候拆行  ,  默认值nowrap 不拆行 */
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* padding: 2px; */
  }
</style>