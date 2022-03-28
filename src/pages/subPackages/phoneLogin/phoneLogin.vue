<template>
  <div class="phone-container">
    <div class="content">
      <div class="input-top">
        <AtInput name='phone' type='text' placeholder='请输入手机号' :value="value1" :onChange="handlePhoneInput" />
      </div>
      <div class="phone-input-class code-div">
        <AtInput name='verification' type='text' placeholder='请输入短信验证码' :value="value1" :onChange="handleVerificationInput" />
        <div class="getCode">获取验证码</div>
      </div>

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

      <div class="login-button" @click="loginOrRegister">同意协议并登录</div>
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
            isChecked: false,
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

<style>
.content .phone-input-class .at-input {
    background-color: transparent;
}
</style>

<style lang="less">
.phone-container {
    padding: 30px;
    background: #f0f4f7;
    height: 100vh;
    .content {
        height: calc(100vh - 60px);
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 40px;
        .code-div {
            position: relative;
            .getCode {
                top: 12px;
                right: 40px;
                position: absolute;
                width: 222px;
                height: 65px;
                border-radius: 20px;
                color: #5588ec;
                border: 2px solid #5588ec;
                text-align: center;
                line-height: 65px;
            }
        }
        .at-input {
            margin-left: 30px;
            margin-bottom: 0;
            width: 90%;
        }
        .agree-container {
            margin-top: 120px;
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

        .login-button {
            color: #fff;
            margin: 34px 44px;
            background-color: #5588ec;
            text-align: center;
            border-radius: 20px;
            font-weight: 500;
            height: 98px;
            line-height: 98px;
        }
    }
}
</style>