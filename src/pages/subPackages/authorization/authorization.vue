<template>
  <div class="authorization-container">
    <div class="welcome">欢迎使用 海昌小程序</div>
    <div class="prompt">授权微信头像、昵称 </div>
    <img class="logo" src="../../../assets/image/home/guanggao1.jpg" alt="">
    <div class="prompt">为提供优质服务, 小程序需要获取你的以下信息:</div>
    <div class="prompt">· 你的公开信息(头像、昵称等)</div>
    <button class="auth-button" open-type="getUserInfo" @click="gotoGetUserInfo">授权进入小程序</button>
    <div class="agree">
      <AtCheckbox :onChange="onClickCheckbox" :options="checkboxOption" :selectedList="checkedList" />
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
            if (this.checkedList.length != 0) {
                Taro.getUserProfile({
                    lang: 'zh_CN',
                    desc: '获取您的昵称和头像',
                    success: (res) => {
                        let userInfo = {}
                        userInfo.avatarUrl = res.userInfo.avatarUrl
                        userInfo.nickName = res.userInfo.nickName
                        Taro.setStorageSync('wechat_userInfo', userInfo)
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
            if (res.result == 'success') {
                Taro.setStorageSync('wechat_code', res.data.openid)
                this.businessLogin(res.data.openid)
            } else {
                Taro.showToast({
                    title: res.errorMsg,
                    icon: 'none',
                    duration: 2000
                })
            }
        },

        // 4- 业务登录
        async businessLogin(openId) {
            const res = await request({
                method: 'POST',
                url: '/member/auth/user/login',
                data: { openId: openId }
            })
            console.log(res)
            // if (res.code == 0) {
                
            //     // Taro.setStorageSync('token', res.)
            //     Taro.showToast({
            //         title: '登录成功',
            //         mask: 'none'
            //     })
            //     wx.navigateBack({
            //         delta: 1
            //     })
            // } else {
            //     Taro.showToast({
            //         title: res.message,
            //         icon: 'none',
            //         mask: true
            //     })
            //     directTo({
            //         url: '/pages/subPackages/authorizationPhone/authorizationPhone'
            //     })
            // }
        },
        onClickCheckbox(e) {
            this.checkedList = e
        }
    }
}
</script>

<style lang="less">
.authorization-container {
    background-color: white;
    width: 100%;
    margin-top: 40px;
    .welcome {
        padding-left: 30px;
        font-size: 44px;
        color: #333;
    }
    .prompt {
        padding-left: 30px;
        margin-top: 20px;
        font-size: 30px;
        color: #91979d;
    }

    .logo {
        width: 100%;
        margin-top: 60px;
        object-fit: cover;
    }
    .auth-button {
        margin: 30px 50px 0;
        color: #fff;
        background-color: #b92a34;
        text-align: center;
        border-radius: 50px;
        font-size: 30px;
        font-weight: 400;
    }
    .agree {
        position: absolute;
        bottom: 40px;
        .at-checkbox__title {
            font-size: 24px;
        }
        .at-checkbox__option-cnt {
            align-items: center;
        }
    }
}
</style>