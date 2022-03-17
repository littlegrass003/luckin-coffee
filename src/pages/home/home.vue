<template>
  <div class="home-container">
    <HomeHeader :swiperData="swipers" />
    <HomePrompt class="custom-margin" />
    <GlobalBaseCard :title="测试" />
    <HomeAchievement class="custom-margin" />
    <HomeAdvertising class="custom-margin" :imgData="guanggao" />

    <!-- <Options class="custom-margin" /> -->
    <!-- <Advertising class="custom-margin" :imgData="guanggao" />
    <Welfare class="custom-margin" /> -->
    <!-- <List class="margin-10" /> -->
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import request from '@/utils/network'

import { directTo } from '@/utils/vapiDispatcher'
import pageData from '../../utils/mock/homeData'

import GlobalBaseCard from '@/components/home/GlobalBaseCard.vue'
import HomeHeader from './components/HomeHeader.vue'
import HomePrompt from './components/HomePrompt.vue'
import HomeAchievement from './components/HomeAchievement.vue'
import HomeAdvertising from './components/HomeAdvertising'

// import Welfare from '@/components/home/welfare.vue'
// import Options from '@/components/home/options.vue'


export default {
    components: {
        HomeHeader,
        HomePrompt,
        GlobalBaseCard,
        HomeAchievement,
        HomeAdvertising,
        // Options,
        // Welfare
    },
    data() {
        return {
            ...pageData,
            guanggao: ''
        }
    },
    mounted() {
        this.login()
        this.guanggao = require('@/assets/image/home/guanggao1.jpg')
        // this.initData()
    },
    methods: {
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
                console.log('1234')
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

        handleClick() {
            this.show = true
        },
        baseCardItemClick() {
            directTo({
                url: '/pages/subPackages/homeDetail/homeDetail?id=2222'
            })
        },
        handleClose() {
            this.show = false
        }
    }
}
</script>

<style lang="scss">
.home-container {
    background-color: #f7f7f7;
    .custom-margin {
        margin: 20px 20px 0;
    }
}
</style>
