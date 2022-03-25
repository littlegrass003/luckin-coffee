<template>
  <div class="home-container">
    <HomeHeader />
    <HomeSwiper :swiperData="swipers"/>
    <HomeCard title="领券中心" subTitle="领取更多优惠券" style="margin-top:40px" :bgc="centerBgc" type="center" />
    <HomeCard title="我的卷包" subTitle="查看我的优惠券" style="margin-top:20px" :bgc="bagBgc" type="bag" />
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
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
            centerBgc: OSS_URL + '/home/center.png',
            bagBgc: OSS_URL + '/home/bag.png',
            ...pageData
        }
    },
    created() {},
    mounted() {},
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
    height: 100vh;
    background-color: #178cf6;
    .custom-margin {
        margin: 20px 20px 0;
    }
}
</style>
