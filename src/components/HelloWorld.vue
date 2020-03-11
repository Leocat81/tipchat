<template>
  <div class="login">
    <div class="content">
      <form action="" name="form2">
        <div class="context-logo">
          <img src="https://s3.qiufengh.com/webchat/webchat-logo-160.png" alt="">
        </div>
        <Input v-model="username" type="text" placeholder="输入账号" />
        <br />
        <Input v-model="password" type="password" placeholder="输入密码" />
        <br />
        <div class="box box2" @click="submit">
          <Arrow></Arrow>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import Input from './input/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: undefined,
      password: undefined,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    [Button.name]: Button,
    Input
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #eaeaea;
  background-size: 100% 100%;
  background-position: center center;
}
  .content {
    width: 80vw;
    margin: 60px auto 20px;

  }    .mu-input {
      width: 100%;
    }
      .context-logo {
      width: 70vw;
      margin: 0 auto 20px;
      display: flex;
      justify-content: center;
      align-items: center;

    }
          img {
        width: 80px;
        height: 80px;
      }
</style>
