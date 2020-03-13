<!--  -->
<template>
<div style="display:block">
<van-tabbar v-model="active" route style="position:fixed">
  <van-tabbar-item icon="home-o" to="/Loan">消息</van-tabbar-item>
  <van-tabbar-item icon="notes-o" to="/maillist">通讯录</van-tabbar-item>
  <van-tabbar-item icon="search" >发现</van-tabbar-item>
  <van-tabbar-item icon="friends-o" >我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
