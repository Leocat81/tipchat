<!--
  功能：功能描述
  作者：pipe
  邮箱：1173882893@qq.com
  时间：2020年08月12日 22:39:10
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div>
    <van-button type="primary" @click="show = true">展示</van-button>
    <van-popup v-model="show" position="top" :style="{ height: '30%' }">
      <van-radio-group v-model="radio" icon-size="60px" direction="horizontal">
        <van-radio :name="item" v-for="item in 10" :key="item">
          <template #icon="props">
            <van-button
              class="img-icon"
              size="mini"
              :type="props.checked ? 'primary' : 'default'"
              >{{ item }}</van-button
            >
          </template>
        </van-radio>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
import { RadioGroup, Radio, Button, Popup } from 'vant'
export default {
  data () {
    return {
      radio: '1',
      show: false
    }
  },
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.van-radio__icon {
  height: 3em;
}
</style>
