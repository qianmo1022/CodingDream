<template>
  <div class="login">
    <h1>注册</h1>
    <div class="login-wrapper">
      <div class="avatar">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d40b566-1f0a-4f8d-bc97-c513df8775b3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706790486&t=fc1d0acda06eb28bda1c145c853b23e0" alt="">
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="state.nickname"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
          />
          <van-field
            v-model="state.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="state.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block color="#7232dd" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>

    </div>
    <p class="register" @click="login">已有账号？点击登录</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../api'
import { showSuccessToast } from 'vant';

const router = useRouter()
const state = reactive({  // 将对象变成响应式
  username: '',
  password: '',
  nickname: ''
})

const onSubmit = async() => {
  // 发请求,将state.username, state.password, nickname传给后端
  // console.log(state.nickname, state.username, state.password);
  const data = await axios.post('/register', {
    username: state.username,
    password: state.password,
    nickname: state.nickname
  })
  // console.log(data);
  showSuccessToast(data.msg)
  setTimeout(() => {
    router.push('/login')
  }, 1500)
}

const login = () => {
  router.push('/login')
}

</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h1{
    height: 0.6933rem;
    text-align: center;
    margin-top: 1.12rem;
    font-size: 0.48rem;
  }
  .login-wrapper{
    width: 7.44rem;
    height: 10.77rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    .avatar{
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 1rem auto 0.77rem;
      img{
        width: 100%;
      }
    }
  }
  .register{
    position: absolute;
    bottom: 30px;
    width: 80%;
    left: 50%;
    text-align: center;
    font-size: 0.374rem;
    transform: translateX(-50%);
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(16, 16, 16, 1);
  }
}
</style>

<style>
.van-cell__title.van-field__label{
  width: 45px;
}
</style>