<template>
  <div class="myCoupon-container">
    <MyCouponCard :listData="myCouponData" class="list" />
    <div class="bottom">
      <div @click="onClickUsingRecord">已使用</div>
      <div class="line">|</div>
      <div @click="onClickCouponCenter">已过期</div>
    </div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
import MyCouponCard from './components/myCouponCard'
import pageData from '@/utils/mock/homeData'
export default {
    name: 'myCoupon',
    components: {
        MyCouponCard
    },
    data() {
        return {
            ...pageData
        }
    },
    mounted() {
        // Taro.getUserProfile()
        // const res = Taro.getSystemInfoSync()
        // console.log(res)
        // const viewingAreaHeight = res.windowHeight
        // const navHeight = res.screenHeight - res.windowHeight
        // console.log('viewingAreaHeight==>', viewingAreaHeight)
        // console.log('navHeight==>', navHeight)
    },
    methods: {
        onClickUsingRecord() {
            // directTo({
            //     url: '/pages/subPackages/usingRecord/usingRecord'
            // })
        },
        onClickCouponCenter() {
            // directTo({
            //     url: '/pages/subPackages/couponCenter/couponCenter'
            // })
        }
    }
}
</script>

<style lang="scss">
.myCoupon-container {
    position: relative;
    background-color: #f0f4f7;
    width: 100%;
    .list {
        padding: 30px 32px;
        margin-bottom: 100px;
    }
    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        position: fixed;
        color: #999;
        font-weight: 500;
        font-size: 32px;
        padding-top: 20px;
        bottom: 0;
        left: 0;
        height: 100px;
    }
}
</style>