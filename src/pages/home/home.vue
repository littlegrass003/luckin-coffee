<template>
  <div class="home-container" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <HomeHeader />
    <HomeSwiper :cardData="homeData" />
    <HomeCard title="领券中心" subTitle="领取更多优惠券" style="margin-top:40px" :bgc="centerBgc" type="center" />
    <HomeCard title="我的优惠券" subTitle="查看我的优惠券" style="margin-top:20px" :bgc="bagBgc" type="bag" />
  </div>
</template>

<script>
import { OSS_URL } from '@/utils/globalConfig'
import pageData from '../../utils/mock/homeData'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCard from './components/HomeCard'

export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeCard
    },
    data() {
        return {
            backgroundImg: OSS_URL + '/home/home_bg.png',
            centerBgc: OSS_URL + '/home/center.png',
            bagBgc: OSS_URL + '/home/bag.png',
            ...pageData
        }
    },
    methods: {}
}
</script>

<style lang="scss">
.home-container {
    height: 100vh;
    background-color: #178cf6;
    .custom-margin {
        margin: 20px 20px 0;
    }
}
</style>
