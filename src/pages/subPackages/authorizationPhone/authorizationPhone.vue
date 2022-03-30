<template>
  <div class="authorizationPhone-container">
    <div class="top">
      <img class="logo" src="@/assets/image/global/logo.png" alt="">
    </div>
    <div class="bottom">
      <div class="wechat-container">
        <button class="auth-button" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
          <img class="wechat-logo" src="@/assets/image/login/wechat_logo.png" alt="">
          <span style="margin-left:40px">微信用户一键登录</span>
        </button>
      </div>
      <button class="other-button" @click="onClickCustomPhone">使用其他手机号</button>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import request from '@/utils/network'
import { directTo } from '@/utils/vapiDispatcher'

export default {
    name: 'Authorization',
    components: {},
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
    },
    methods: {
        async getPhoneNumber(e) {
            if (e.detail.errMsg == 'getPhoneNumber:ok') {
                // 最新代码不用传给后台iv和encryptedData
                let params = {
                    code: e.detail.code,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                }
                console.log('phone-code', params.code)
                const res = await request({
                    method: 'POST',
                    url: '/wechat/auth/mp/getUserPhoneNumber',
                    data: {
                        code: params.code
                    }
                })
                if (res.code == 0) {
                    this.registerAccount(res.data.phoneNumber)
                } else {
                    Taro.showToast({
                        title: res.message,
                        icon: 'none',
                        mask: 'true',
                        duration: 1500
                    })
                }
            }
        },
        async registerAccount(phoneNum) {
            Taro.showLoading({
                title: '正在登录...'
            })
            const userInfo = Taro.getStorageSync('wechat_userInfo')
            const openId = Taro.getStorageSync('wechat_openId')
            console.log('userInfo==>', userInfo)
            console.log('openId==>', openId)
            const res = await request({
                method: 'POST',
                url: '/member/auth/user/createUser',
                data: {
                    avatar: userInfo.avatarUrl,
                    nickname: userInfo.nickName,
                    phoneNum: phoneNum,
                    openId: openId
                }
            })
            if (res.code == 0) {
                const token = {
                    sessionToken: res.data.sessionToken,
                    userToken: res.data.userToken
                }
                Taro.setStorageSync('wechat_token', token)
                Taro.hideLoading()
                Taro.showToast({
                    title: '登录成功',
                    icon: 'none',
                    mask: 'true',
                    duration: 1500
                })
                setTimeout(() => {
                    Taro.reLaunch({
                        url: '/pages/home/home'
                    })
                }, 1500)
            } else {
                Taro.showToast({
                    title: res.message,
                    icon: 'none',
                    mask: 'true'
                })
            }
        },
        onClickCustomPhone(e) {
            directTo({
                url: '/pages/subPackages/phoneLogin/phoneLogin'
            })
        }
    }
}
</script>

<style lang="less">
.authorizationPhone-container {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    .top {
        width: 100%;
        position: absolute;
        top: 200px;
        display: flex;
        .logo {
            margin: 0 auto;
            height: 400px;
        }
    }

    .bottom {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .wechat-container {
            position: relative;
            .auth-button {
                height: 96px;
                line-height: 96px;
                width: 600px;
                color: #fff;
                background-color: #5588ec;
                text-align: center;
                border-radius: 10px;
                font-size: 30px;
                font-weight: 400;
            }

            .wechat-logo {
                z-index: 100;
                position: absolute;
                bottom: 29px;
                left: 150px;
                width: 52px;
                height: 42px;
            }
        }

        .other-button {
            margin: 36px;
            height: 96px;
            line-height: 96px;
            width: 600px;
            color: #5588ec;
            border: 2px solid #5588ec;
            background-color: #f0f2f5;
            text-align: center;
            border-radius: 10px;
            font-size: 30px;
            font-weight: 400;
        }
    }
}
</style>