<template>
  <div class="home-container">
    <HomeHeader :swiperData="swipers" />
    <HomePrompt class="custom-margin" />
    <HomeAchievement class="custom-margin" />
    <HomeTask class="custom-margin" />
    <HomeGift class="custom-margin" />
    <HomeAdvertising class="custom-margin" :imgData="guanggao" />
    <HomeKingkong class="custom-margin" style="paddingBottom:10px" />
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import request from '@/utils/network'
import { navStatusBarHeight } from '@/utils/globalConfig'
import { directTo } from '@/utils/vapiDispatcher'

import pageData from '../../utils/mock/homeData'

import HomeHeader from './components/HomeHeader.vue'
import HomePrompt from './components/HomePrompt'
import HomeAchievement from './components/HomeAchievement'
import HomeAdvertising from './components/HomeAdvertising'
import HomeTask from './components/HomeTask'
import HomeKingkong from './components/HomeKingkong'
import HomeGift from './components/HomeGift'

export default {
    components: {
        HomeHeader,
        HomePrompt,
        HomeAchievement,
        HomeAdvertising,
        HomeTask,
        HomeKingkong,
        HomeGift
    },
    data() {
        return {
            ...pageData,
            guanggao: ''
        }
    },
    created() {
    },
    mounted() {
        this.guanggao = require('@/assets/image/home/guanggao1.jpg')
    },
    methods: {
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
