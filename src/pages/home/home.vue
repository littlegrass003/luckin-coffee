<template>
  <div class="home-container" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <HomeHeader />
    <div class="placeholder-div" v-if="!token.sessionToken">
      <img class="background-img" :src="noLoginBgc" alt="">
      <div class="prompt">未登录用户</div>
      <div class="action" @click="onClickLogin">前往登录</div>
    </div>
    <!-- <div class="placeholder-div">
      <img class="background-img" :src="noVerificationBgc" alt="">
    </div>
    <div class="placeholder-div">
      <img class="background-img" :src="noVipBgc" alt="">
    </div> -->
    <div v-else>
      <HomeSwiper :cardData="homeData" />
      <HomeCard title="领券中心" subTitle="领取更多优惠券" style="margin-top:20px" :bgc="centerBgc" type="center" />
      <HomeCard title="我的优惠券" subTitle="查看我的优惠券" style="margin-top:20px" :bgc="bagBgc" type="bag" />
    </div>

  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import pageData from '../../utils/mock/homeData'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCard from './components/HomeCard'
import { OSS_URL } from '@/utils/globalConfig'
import { directTo } from '@/utils/vapiDispatcher'

export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeCard
    },
    data() {
        return {
            noLoginBgc: OSS_URL + '/home/nologin.png',
            noVipBgc: OSS_URL + '/home/novip.png',
            noVerificationBgc: OSS_URL + '/home/noverification.png',
            backgroundImg: OSS_URL + '/home/home_bg.png',
            centerBgc: OSS_URL + '/home/center.png',
            bagBgc: OSS_URL + '/home/bag.png',
            ...pageData,
            userInfo: {},
            token:{}
        }
    },
    mounted() {
        this.token = Taro.getStorageSync('wechat_token')
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
    },
    methods: {
        onClickLogin() {
            directTo({
                url: '/pages/subPackages/authorization/authorization'
            })
        }
    }
}
</script>

<style lang="scss">
.home-container {
    height: 100vh;
    background-color: #178cf6;
    .custom-margin {
        margin: 20px 20px 0;
    }
    .placeholder-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        .background-img {
            margin: 0 auto;
        }
        .prompt {
            margin-top: 20px;
            font-size: 32px;
            font-weight: 600;
            color: #ffffff;
        }
        .action {
            margin-top: 20px;
            width: 230px;
            height: 62px;
            border-radius: 20px;
            border: 2px solid #ffffff;
            color: #fff;
            font-size: 36px;
            line-height: 62px;
            text-align: center;
        }
    }
}
</style>
