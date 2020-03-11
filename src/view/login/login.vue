<template>
  <div class="login">
    <div class="content">
      <form action="" name="form2">
        <div class="context-logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <Input v-model="username" type="text" placeholder="输入账号" />
        <br />
        <Input v-model="password" type="password" placeholder="输入密码" />
        <br />
        <div class="box box2" @click="submit">
          <i class="iconfont  icon-jiantou" style="font-size:50px"></i>
        </div>
      </form>
      <div class="bottom">
        <div class="register" @click="toRegister">注册</div>
        <div class="forgetpassword">忘记密码</div>
      </div>
      <h4>第三方登录</h4>
      <div class='weixin'>
          <i class="iconfont  icon-weixin" style="font-size:30px;color:#1afa29"></i>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/iconfont/jiantou/iconfont.css'
import '@/assets/iconfont/weixin/iconfont.css'
import { Button } from 'vant'
import Input from '@/components/input/index'
export default {
  name: 'login',
  data () {
    return {
      username: undefined,
      password: undefined
    }
  },
  components: {
    [Button.name]: Button,
    Input
  },
  methods: {
    submit () {},
    toRegister () {
      this.$router.push('/register')
    }
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
}
.mu-input {
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
.bottom-arguemnt {
  margin-top: 5px;
  text-align: center;
}
.bottom {
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-between;
}

h4 {
  display: flex;
  flex-direction: row;
  font-size: 11px;
}

h4:before,
h4:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid#C0C0C0;
  margin: auto;
}
.box {
  width: 80px;
  height: 80px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #2196f3 0%, #8fd3f4 100%);
}
.weixin{
  display: flex;
  justify-content: center;
}
.box2 {
  border-radius: 55% 45% 73% 27% / 70% 58% 42% 30%;
  animation: morph1 4s infinite;
}
@keyframes morph1 {
  0% {
    border-radius: 26% 74% 49% 51% / 21% 51% 49% 79%;
  }
  25% {
    border-radius: 74% 26% 50% 50% / 53% 29% 71% 47%;
  }
  50% {
    border-radius: 48% 52% 28% 72% / 45% 71% 29% 55%;
  }
  75% {
    border-radius: 48% 52% 76% 24% / 70% 49% 51% 30%;
  }
  100% {
    border-radius: 26% 74% 49% 51% / 21% 51% 49% 79%;
  }
}
</style>
