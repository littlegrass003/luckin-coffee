<template>
  <div class="phone-container">
    <div class="top">
      <div class="title">请输入会员手机号</div>
      <div class="subtitle">欢迎加入Times会员俱乐部</div>
    </div>

    <div class="content">
      <div class="phone-input-class">
        <AtInput name='phone' type='text' placeholder='请输入手机号' :value="value1" :onChange="handlePhoneInput" />
      </div>
      <div class="phone-input-class verification-class">
        <AtInput name='verification' type='text' placeholder='请输入短信验证码' :value="value1" :onChange="handleVerificationInput" />
      </div>

      <div class="read">
        我已阅读并同意<span class="book">《会员章程》</span> 及 <span class="book">《隐私政策》</span>
      </div>

      <div class="login-button" @click="loginOrRegister">登录/注册</div>
    </div>

  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtInput, AtForm } from 'taro-ui-vue'
export default {
    components: {
        // AtForm,
        AtInput
    },
    data() {
        return {
            phone: '',
            verification: ''
        }
    },
    methods: {
        handlePhoneInput(val) {
            this.phone = val
        },
        handleVerificationInput(val) {
            this.verification = val
        },
        loginOrRegister() {
            Taro.setStorageSync('loginStatus', false)
            Taro.reLaunch({
                url: '/pages/home/home'
            })
        }
    }
}
</script>

<style>
.content .phone-input-class .at-input {
    background-color: transparent;
}
</style>

<style lang="less">
.phone-container {
    padding: 0 40px;
    .top {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
            color: #333;
            font-size: 50px;
        }
        .subtitle {
            color: #9f9f9f;
            font-size: 26px;
        }
    }
    .content {
        display: flex;
        flex-direction: column;

        border-radius: 50px;
        .phone-input-class {
            margin-bottom: 10px;
            border-radius: 50px;
            padding: 10px 40px;
            background-color: #f8f8f8;
        }
        .read {
            margin: 40px auto;
            font-size: 24px;
            display: flex;
            color: #9a9a9a;
        }
        .book {
            color: #1f3d6c;
        }
        .login-button {
            color: #fff;
            background-color: #cccccc;
            padding: 30px 0;
            text-align: center;
            border-radius: 50px;
            font-weight: 500;
        }
    }
}
</style>