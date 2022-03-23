<template>
  <div class="authorization-container">
    <div class="welcome">欢迎使用 海昌小程序</div>
    <div class="prompt">立即登录，享受优质服务</div>
    <!-- <img class="logo" src="../../../assets/image/home/guanggao1.jpg" alt=""> -->
    <div class="user-info">
      <div class="user-info-avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
    </div>
    <button class="auth-button" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信用户一键登录</button>
    <button class="auth-button" @click="onClickCustomPhone">手机号码登录</button>
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
        return {}
    },
    mounted() {},
    methods: {
        async getPhoneNumber(e) {
            if (e.detail.errMsg == 'getPhoneNumber:ok') {
                let params = {
                    code: e.detail.code,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                }
                console.log(params)
                const res = await request({
                    method: 'POST',
                    url: '/wechat/auth/mp/getUserPhoneNumber',
                    data: {
                        code: params.code
                    }
                })
                console.log(res)
            }
            // console.log(`是否成功调用${e.detail.errMsg}`)
            // console.log(`加密算法的初始向量:${e.detail.iv}`)
            // console.log(`包括敏感数据在内的完整用户信息的加密数据:${e.detail.encryptedData}`)
            // console.log('kafhlihawflksdklfd==>', e)
            // console.log(e.detail.code)
            // let params = {
            //   encryptedData: e.detail.encryptedData,
            //   iv: e.detail.iv,
            // }
            // console.log(params)
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

    .user-info {
        margin: 80px 0;
        position: relative;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        .user-info-avatar {
            overflow: hidden;
            display: block;
            width: 200px;
            height: 200px;
            margin: 0 auto;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        }
    }
    .auth-button {
        margin: 30px 50px 0;
        color: #fff;
        background-color: #80c684;
        text-align: center;
        border-radius: 50px;
        font-size: 30px;
        font-weight: 400;
    }
}
</style>