<template>
  <div class="mine-container">
    <MineHeader :swiperData="swipers" />
    <MinePrompt class="custom-margin" />
    <MineChoose class="custom-margin" />
    <MineAchievement class="custom-margin" />
    <MineTask class="custom-margin" />
    <MineGift class="custom-margin" />
    <MineAdvertising class="custom-margin" :imgData="guanggao" />
    <MineKingkong class="custom-margin" style="paddingBottom:10px" />
  </div>
</template>

<script>
// import Taro from '@tarojs/taro'
// import request from '@/utils/network'

import { directTo } from '@/utils/vapiDispatcher'
import pageData from '../../utils/mock/mineData'

import MineHeader from './components/MineHeader.vue'
import MinePrompt from './components/MinePrompt'
import MineChoose from './components/MineChoose'
import MineAchievement from './components/MineAchievement'
import MineAdvertising from './components/MineAdvertising'
import MineTask from './components/MineTask'
import MineKingkong from './components/MineKingkong'
import MineGift from './components/MineGift'

export default {
    components: {
        MineHeader,
        MinePrompt,
        MineChoose,
        MineAchievement,
        MineAdvertising,
        MineTask,
        MineKingkong,
        MineGift
    },
    data() {
        return {
            ...pageData,
            guanggao: ''
        }
    },
    mounted() {
        // this.login()
        this.guanggao = require('@/assets/image/home/guanggao1.jpg')
        // this.initData()
    },
    methods: {
        // async login() {
        //     if (Taro.ENV_TYPE.WEAPP == 'WEAPP') {
        //         const res = await Taro.login()
        //         if (res.code) {
        //             this.wxLogin(res.code)
        //         } else {
        //             Taro.showToast({
        //                 title: '没有获取WechatCode',
        //                 duration: 2000
        //             })
        //         }
        //     } else {
        //         const res = await request({
        //             url: '/taro/issues',
        //             data: { per_page: 1, page: 2 }
        //         })
        //         this.baseCardData = res[0].labels
        //     }
        // },

        // async wxLogin(code) {
        //     const res = await request({
        //         method: 'POST',
        //         url: '/wechat/auth/mp/jscode2session',
        //         data: { jsCode: code }
        //     })
        //     if (res.result == 'success') {
        //         console.log('1234')
        //         // 这里应该是返回的token和用户信息
        //         // openid
        //         // session_key
        //         this.getWechatInfo()
        //     } else {
        //         Taro.showToast({
        //             title: res.errorMsg,
        //             icon: 'none',
        //             duration: 2000
        //         })
        //     }
        // },

        // async getWechatInfo() {
        //     const res = await Taro.getUserInfo()
        //     console.log('userInfo==>', res)
        // },

        handleClick() {
            this.show = true
        },
        baseCardItemClick() {
            directTo({
                url: '/pages/subPackages/MineDetail/MineDetail?id=2222'
            })
        },
        handleClose() {
            this.show = false
        }
    }
}
</script>

<style lang="scss">
.mine-container {
    background-color: #f9f9fa;
    .custom-margin {
        margin: 20px 20px 0;
    }
}
</style>
