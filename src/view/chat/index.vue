<!--  -->
<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="黄伟" left-arrow style="background-color:#2196f3">
      <div slot="left">
        <van-icon name="arrow-left" size="20" color="white"
          ><span class="leftstl">消息</span></van-icon
        >
      </div>
      <div slot="right">
        <van-icon name="contact" size="20" color="white" />
      </div>
    </van-nav-bar>
    <div class="content">
      <div v-for="(item, index) in msg" :key="index">
        <div class="conleft" v-if="item.status === 0">
          <img :src="item.imgUrl" class="header" />
          <p class="text">{{ item.message }}</p>
        </div>
        <div class="conright" v-if="item.status === 1">
          <img :src="item.imgUrl" />
          <p>{{ item.message }}</p>
        </div>
      </div>
    </div>
    <!-- 顶部工具栏 -->
    <footer class="chat-footer ">
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1" disabled>
          <template slot="title">
            <input
              type="text"
              v-model="message"
              class="msgstl"
              @focus="inputChange"
            />
          </template>
          <template slot="right-icon">
            <van-icon
              :name="footerIconType === 'emoji' ? 'smile-o' : 'plus'"
              size="25px"
              @click="
                activeNames.length === 0
                  ? (activeNames = ['1'])
                  : (activeNames = [])
              "
            />
            <van-button
              type="primary"
              size="small"
              style="margin-left:10px;"
              @click="sendMes(message)"
              v-if="footerIconType === 'emoji'"
              >发送</van-button
            >
          </template>
          <div
            slot="default"
            class="emojistl"
            v-if="footerIconType === 'emoji'"
          >
            <div v-for="(item, index) in emoji.people" :key="index">
              <span style="font-size:20px;" @click="addEmoji(item)">{{
                item
              }}</span>
            </div>
          </div>
          <div
            slot="default"
            class="emojistl"
            v-if="footerIconType === 'upload'"
          >
            <i class="iconfont  icon-xiangce" style="font-size:30px"
              ><span class="alifonttext" @click="addRes">相册</span>
            </i>
          </div>
        </van-collapse-item>
      </van-collapse>
    </footer>
  </div>
</template>

<script>
import {
  NavBar,
  Icon,
  Cell,
  CellGroup,
  Button,
  Collapse,
  CollapseItem
} from 'vant'
import emoji from '@/utils/emoji'
import '@/assets/iconfont/xiangce/iconfont.css'
export default {
  data () {
    return {
      footerIconType: 'upload',
      activeNames: [],
      emoji: emoji,
      message: '',
      msg: [
        {
          imgUrl: 'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
          message: 'dsdsd',
          status: 0
        },
        {
          imgUrl:
            'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
          message: 'qwewe',
          status: 1
        }
      ]
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    console.log(emoji.people[0])
  },
  methods: {
    sendMes (message) {
      this.activeNames = []
      this.msg.push({
        imgUrl:
          'https://pipefeng.oss-cn-shanghai.aliyuncs.com/test1/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190725142654.jpg',
        message: message,
        status: 1
      })
      console.log(this.msg)
    },
    inputChange () {
      this.footerIconType = 'emoji'
      this.activeNames = []
    },
    addEmoji (data) {
      this.message += data
    },
    addRes () {
      alert('待开发')
    }
  },
  watch: {
    message (val) {
      if (!val) {
        this.footerIconType = 'upload'
      }
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.leftstl {
  font-size: 14px;
  position: relative;
  top: -5px;
}
.msgstl{
  width:95%;
  font-family:Times New Roman;
  color:#000000;
}
.chat-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.emojistl {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 150px;
}
.content {
  position: relative;
  display: block;
  height: 85%;
  zoom: 1;
  background-color: #eee;
  overflow: auto;
}
.conleft {
  display: block;
  float: left;
  width: 80%;
  margin-top: 20px;
  margin-left: 10px;
}
.header {
  width: 35px;
  float: left;
  display: block;
  height: 35px;
}
.text {
  float: left;
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
  margin-left: 10px;
  position: relative;
  border-radius: 4px;
  word-wrap: break-word;
  max-width: 80%;
  font-size: 14px;
  top: -10px;
}
.conright {
  display: block;
  float: right;
  width: 80%;
  margin-top: 20px;
  margin-right: 10px;
}
.conright img {
  width: 35px;
  float: right;
  display: block;
  height: 35px;
}
.conright p {
  float: right;
  background:#2196f3;
  padding: 8px;
  box-sizing: border-box;
  margin-right: 10px;
  position: relative;
  border-radius: 4px;
  word-wrap: break-word;
  max-width: 80%;
  font-size: 14px;
  top: -10px;
}
.alifonttext {
  display: block;
  font-size: 12px;
  text-align: center;
}
</style>
