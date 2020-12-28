<!--  -->
<template>
  <div>
    <Narbar msgNum="10"></Narbar>
    <div class="msgliststl ">
      <div v-for="(item, index) in arr" :key="index">
        <van-swipe-cell>
          <van-card style="padding: 9px, 13px,0px,13px;" class="van-hairline--bottom" @click="toChat">
            <div slot="title">
              <span class="title-name">黄伟</span>
              <span class="title-time">晚上10：54</span>
            </div>
            <template slot="thumb">
              <van-badge :content="5">
              <van-image width="60" height="60"  lazy-load  src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </van-badge>
            </template>
            <!-- <div slot="tag" class="msg-tag">
              <van-tag round type="danger">3</van-tag>
            </div> -->
            <div slot="desc" class="descstl">
              <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略1111111111s</div>
            </div>
          </van-card>
          <van-button slot="right" square text="删除" type="danger" class="delete-button" />
        </van-swipe-cell>

      </div>
    </div>
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import { Card, Button, SwipeCell, Tag, Image, Badge } from 'vant'
import Tabbar from '@/components/tabbar/tabbar'
import Narbar from '@/components/narbar/narbar'
export default {
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 7, 2, 2, 2, 2]
    }
  },
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell,
    [Tag.name]: Tag,
    [Image.name]: Image,
    [Badge.name]: Badge,
    Tabbar,
    Narbar
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
.title-name {
  font-size: 19px;
}
.title-time {
  float: right;
  color: Gainsboro;
}
.descstl {
  display: block;
  margin-top: 20px;
  font-size: 12px;
  color:#B0C4DE;
}
.delete-button {
  height: 100%;
}
.msgliststl {
  height: 92%;
  overflow: auto;
}
.msg-tag {
  position: absolute;
  left: 50px;
  top:-7px;
}
</style>
