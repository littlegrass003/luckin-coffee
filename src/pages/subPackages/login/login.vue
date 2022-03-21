<template>
  <div class="login-container">
    <div class="logo">
      <img class="logo-img" src="../../../assets/image/home/guanggao1.jpg" alt="">
      <span class="logo-title">欢迎加入Times会员俱乐部</span>
    </div>
    <div class="bottom">
      <div class="read">
        我已阅读并同意<span class="book">《会员章程》</span> 及 <span class="book">《隐私政策》</span>
      </div>
      <div class="wechat-button" @click="wechatLogin">微信手机号登录/注册</div>
      <div class="other-button" @click="phoneLogin">使用其他手机号</div>
      <div class="no-login" @click="noLogin">暂不登录</div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import request from '@/utils/network'
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'Login',
    data() {
        return {}
    },
    mounted() {},
    methods: {
        wechatLogin() {
            this.login()
        },

        async login() {
            if (Taro.ENV_TYPE.WEAPP == 'WEAPP') {
                const res = await Taro.login()
                if (res.code) {
                    this.wxLogin(res.code)
                } else {
                    Taro.showToast({
                        title: '没有获取WechatCode',
                        duration: 2000
                    })
                }
            } else {
                const res = await request({
                    url: '/taro/issues',
                    data: { per_page: 1, page: 2 }
                })
                this.baseCardData = res[0].labels
            }
        },

        async wxLogin(code) {
            const res = await request({
                method: 'POST',
                url: '/wechat/auth/mp/jscode2session',
                data: { jsCode: code }
            })
            if (res.result == 'success') {
                // 这里应该是返回的token和用户信息
                // openid
                // session_key
                this.getWechatInfo()
            } else {
                Taro.showToast({
                    title: res.errorMsg,
                    icon: 'none',
                    duration: 2000
                })
            }
        },

        async getWechatInfo() {
            const res = await Taro.getUserInfo()
            console.log('userInfo==>', res)
        },

        phoneLogin() {
            directTo({
                url: '/pages/subPackages/phoneLogin/phoneLogin'
            })
        },
        noLogin() {
            Taro.setStorageSync('loginStatus', false)
            Taro.reLaunch({
                url: '/pages/home/home'
            })
        }
    }
}
</script>

<style lang="less">
.login-container {
    background-color: white;
    width: 100%;
    .logo {
        margin-top: 400px;
        width: 100%;
        // height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .logo-img {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        .logo-title {
            margin-top: 20px;
            font-size: 50px;
            font-weight: 500;
        }
    }
    .bottom {
        padding: 0 20px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        .read {
            margin: 40px auto;
            font-size: 24px;
            display: flex;
            color: #9a9a9a;
        }
        .book {
            color: #1f3d6c;
        }
        .wechat-button {
            color: #fff;
            background-color: #b92a34;
            padding: 40px 0;
            text-align: center;
            border-radius: 50px;
            font-weight: 500;
        }
        .other-button {
            margin-top: 40px;
            color: #333;
            background-color: #fff;
            border: 2px solid #e8e8e8;
            padding: 40px 0;
            text-align: center;
            border-radius: 50px;
            font-weight: 400;
        }
        .no-login {
            color: #919191;
            margin: 60px auto;
        }
    }
}
</style>