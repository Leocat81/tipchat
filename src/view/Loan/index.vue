<!--  -->
<template>
  <div>

    <div v-for="(item, index) in arr" :key="index" class="van-hairline--bottom">
          <van-swipe-cell>
      <van-card
        tag="2"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        style="padding: 0px 13px;"
        @click="toChat"
      >
        <div slot="title">
          <span class="namestl">黄伟</span>
        </div>
        <div slot="desc" class="descstl">
          <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
        </div>
      </van-card>
  <van-button
    slot="right"
    square
    text="删除"
    type="danger"
    class="delete-button"
  />
          </van-swipe-cell>
    </div>

  </div>
</template>

<script>
import { Card, Button, SwipeCell } from 'vant'
export default {
  data () {
    return {
      arr: [1, 2, 3]
    }
  },
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  methods: {
    toChat () {
      this.$router.push('/Loan/chat')
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.namestl {
  font-size: 19px;
}
.descstl {
  display: block;
  margin-top: 20px;
  font-size: 12px;
}
.delete-button {
  height: 100%;
}
</style>
