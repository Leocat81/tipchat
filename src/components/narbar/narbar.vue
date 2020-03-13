<!--  -->
<template>
  <div>
  <!-- 固定在顶部 -->
<van-sticky>
 <van-nav-bar :title="title" :fixed="true">
      <div slot="left" v-if="$route.path==='/Loan'">
        <b>消息({{ msgNum }})</b>
      </div>
      <div slot="right" v-if="$route.path==='/Loan'">
        <van-icon name="search" slot="right" size="20" @click="show=true"/>
      </div>
    </van-nav-bar>
    <van-popup
  v-model="show"
  position="top"
  :style="{ height: 'auto' }"
>
 <van-field v-model="searchVal" placeholder="请输入搜索信息" />
 <van-button type="info" block>搜索</van-button>
</van-popup>
</van-sticky>
  </div>
</template>

<script>
import { NavBar, Icon, Popup, Field, Button, Sticky } from 'vant'
export default {
  data () {
    return {
      show: false,
      searchVal: undefined
    }
  },
  props: ['title', 'msgNum'],
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Sticky.name]: Sticky
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
