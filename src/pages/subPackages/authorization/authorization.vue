<template>
  <div class="authorization-container">
    <div class="top">
      <img class="logo" src="@/assets/image/global/logo.png" alt="">
    </div>
    <div class="bottom">
      <div class="auth-prompt">授权微信头像、昵称</div>
      <div class="prompt">
        <div>为提供优质服务, 小程序需要获取你的以下信息:</div>
        <div>您的公开信息(头像、昵称等)</div>
      </div>
      <button class="auth-button" open-type="getUserInfo" @click="gotoGetUserInfo">授权进入会员中心</button>
      <div class="agree-container">
        <div class="quan" @click="onClickAgree" v-if="!isChecked"></div>
        <div class="active-quan" @click="onClickAgree" v-else></div>
        <div class="agree">
          我已经阅读并同意
          <span class="book" @click="onClickHuiyuanzhangcheng">《会员章程》</span>
          及
          <span class="book" @click="onClickYinsizhengce">《隐私政策》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { directTo } from '@/utils/vapiDispatcher'
import request from '@/utils/network'
import { AtCheckbox } from 'taro-ui-vue'

export default {
    name: 'Authorization',
    components: {
        AtCheckbox
    },
    data() {
        return {
            isChecked: false,
            backgroundImg: '@/assets/image/global/logo.png',
            checkedList: ['1'],
            checkboxOption: [
                {
                    value: '1',
                    label: '选中登录代表您已同意《用户服务协议》《隐私权政策》'
                }
            ]
        }
    },
    mounted() {},
    methods: {
        // 1-吊起授权弹框 保存用户信息
        gotoGetUserInfo() {
            if (this.isChecked) {
                Taro.getUserProfile({
                    lang: 'zh_CN',
                    desc: '获取您的昵称和头像',
                    success: (res) => {
                        let userInfo = {}
                        userInfo.avatar = res.userInfo.avatarUrl
                        userInfo.nickname = res.userInfo.nickName
                        Taro.setStorageSync('wechat_userInfo', userInfo)
                        console.log(Taro.getStorageSync('wechat_userInfo'))
                        this.getWxCode()
                    },
                    fail: (error) => {
                        console.log('error==>', error)
                    }
                })
            } else {
                Taro.showToast({
                    title: '请勾选用户协议',
                    icon: 'none',
                    mask: 'true'
                })
            }
        },

        // 2-获取wechat code
        async getWxCode() {
            const loginRes = await Taro.login()
            if (loginRes.code) {
                this.getOpenID(loginRes.code)
            }
        },

        // 3-通过wechat code 获取openid
        async getOpenID(code) {
            const res = await request({
                method: 'POST',
                url: '/wechat/auth/mp/jscode2session',
                data: { jsCode: code }
            })
            if (res.code == 0) {
                Taro.setStorageSync('wechat_openId', res.data.openid)
                // this.businessLogin(res.data.openid)
                this.testServer(res.data.openid)
            } else {
                Taro.showToast({
                    title: res.errorMsg,
                    icon: 'none',
                    duration: 2000
                })
            }
        },

        async testServer(openId){
            Taro.showLoading()
            const res = await request({
                method: 'POST',
                url:'/member/auth/user/checkUser',
                data: { openId: openId },
                header:{
                    'content-type':'application/x-www-form-urlencoded',
                }
            })
            Taro.hideLoading()
            Taro.showToast({
                title:res.message,
                icon:'none',
                mask:'true'
            })
            console.log('testServer==>', res)
        },

        // 4- 业务登录
        async businessLogin(openId) {
            Taro.showLoading({
                title: '授权中...'
            })
            const res = await request({
                method: 'POST',
                url: '/member/auth/user/login',
                data: { openId: openId }
            })
            if (res.code == 0) {
                const token = {
                    sessionToken: res.data.sessionToken,
                    userToken: res.data.userToken
                }
                Taro.setStorageSync('wechat_token', token)
                Taro.hideLoading()
                Taro.showToast({
                    title: '授权成功',
                    icon: 'none',
                    mask: 'none',
                    duration: 1500
                })
                setTimeout(() => {
                    Taro.reLaunch({
                        url: '/pages/home/home'
                    })
                }, 1500)
            } else {
                Taro.hideLoading()
                Taro.showToast({
                    title: res.message,
                    icon: 'none',
                    mask: true
                })
                directTo({
                    url: '/pages/subPackages/authorizationPhone/authorizationPhone'
                })
            }
        },
        onClickAgree() {
            this.isChecked = !this.isChecked
        },
        onClickHuiyuanzhangcheng() {
            console.log('会员章程')
        },
        onClickYinsizhengce() {
            console.log('隐私政策')
        }
    }
}
</script>

<style lang="less">
.authorization-container {
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
        .auth-prompt {
            font-size: 36px;
            font-weight: 600;
            color: #000000;
        }
        .prompt {
            font-size: 28px;
            font-weight: 400;
            color: #999999;
            margin: 32px 0;
        }
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
        .agree-container {
            margin: 32px 0;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;

            .active-quan {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                border: 2px solid #5588ec;
                background: #5588ec;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .active-quan::before {
                content: '';
                display: block;
                width: 17px;
                height: 10px;
                // color: #fff;
                border: 3px solid #fff;
                border-right: none;
                border-top: none;
                transform: rotate(-45deg) translate(2px, -3px);
            }
            .quan {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                border: 2px solid #999999;
            }
            .agree {
                margin-left: 12px;
                color: #999999;
                font-size: 24px;
                display: flex;
                justify-content: center;
                .book {
                    color: #ff7834;
                }
            }
        }
    }
}
</style>