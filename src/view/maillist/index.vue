<!--  -->
<template>
  <div style="body">
    <Narbar title="通讯录"></Narbar>
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template slot="title">
        <span class="custom-title">创建群聊</span>
      </template>
      <template slot="icon">
        <i class="iconfont icon-Plus" style="font-size:30px;color:#2196f3"></i>
      </template>
    </van-cell>
        <van-cell value="共有3个群聊" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template slot="title">
        <span class="custom-title">群聊</span>
      </template>
      <template slot="icon">
        <i class="iconfont icon-qunliao" style="font-size:30px;color:#2196f3"></i>
      </template>
    </van-cell>
    <div class="contractstl">
      <div v-for="(item, index) in friendArr" :key="index">
        <div class="groupName">
          <span>{{ item.groupName }}</span>
        </div>
        <div
          class="mailstl"
          v-for="it in item.children"
          :key="it.friendId"
          @click="
            $router.push({
              path: '/maillist/friviewmore',
              query: { friendId: it.friendId }
            })
          "
        >
          <img v-lazy="it.hUrl" class="header" />
          <div class="friendname">
            <span>{{ it.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/tabbar'
import Narbar from '@/components/narbar/narbar'
import '@/assets/iconfont/plus/iconfont.css'
import '@/assets/iconfont/qunliao/iconfont.css'
import { Search, Cell, Icon } from 'vant'
export default {
  data () {
    return {
      searchValue: undefined,
      friendArr: [
        {
          groupName: 'A',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '123'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '3232'
            }
          ]
        },
        {
          groupName: 'B',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '554545'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '554'
            }
          ]
        },
        {
          groupName: 'C',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '54'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '54000'
            }
          ]
        },
        {
          groupName: 'D',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '5400'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '540'
            }
          ]
        },
        {
          groupName: 'E',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '5'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '55'
            }
          ]
        },
        {
          groupName: 'F',
          children: [
            {
              hUrl:
                'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
              name: '黄伟',
              friendId: '33'
            },
            {
              hUrl:
                'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
              name: 'pipe',
              friendId: '333332'
            }
          ]
        }
      ]
    }
  },
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    Tabbar,
    Narbar
  },

  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  methods: {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.contractstl {
  height: auto;
  overflow: auto;
}
.groupName {
  background-color: #f0f0f0;
  font-size: 10px;
  padding: 5px 5px 5px 18px;
}
.mailstl {
  background-color: white;
}
.mailstl:active {
  background-color: #e8e8e8;
}
.header {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-top: 10px;
}
.friendname {
  float: right;
  width: 80%;
  height: 34px;
  margin-top: 14px;
  margin-left: 10px;
  border-bottom: 1px solid#F0F0F0;
}
.custom-title{
  margin-left: 10px;
}
</style>
