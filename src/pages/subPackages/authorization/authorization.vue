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

import { AtCheckbox } from 'taro-ui-vue'

export default {
    name: 'Authorization',
    components: {
        AtCheckbox
    },
    data() {
        return {
            checkedList: [],
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
        gotoGetUserInfo() {
            if (this.checkedList.length != 0) {
                Taro.getUserProfile({
                    lang: 'zh_CN',
                    desc: '获取您的昵称和头像',
                    success: (res) => {
                        directTo({
                            url: '/pages/subPackages/authorizationPhone/authorizationPhone'
                        })
                    },
                    fail: (error) => {
                        console.log(error)
                    }
                })
            } else {
                Taro.showToast({
                    title:'请勾选用户协议',
                    icon:'none',
                    mask:'true'
                })
            }
        },
        onClickCheckbox(e) {
            this.checkedList = e
        },
        async getWechatInfo() {
            const res = await Taro.getUserInfo()
            console.log('userInfo==>', res)
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