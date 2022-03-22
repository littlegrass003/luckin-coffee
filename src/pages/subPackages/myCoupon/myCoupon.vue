<template>
  <div class="myCoupon-container">
    <div class="list">
      <MyCouponCard v-for="(item, index) in 10" :key="index" />
    </div>
    <div class="bottom">
      <div @click="onClickUsingRecord">使用记录</div>
      <div>|</div>
      <div @click="onClickCouponCenter">领券中心</div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { directTo } from '@/utils/vapiDispatcher'
import MyCouponCard from './components/myCouponCard'
export default {
    name: 'myCoupon',
    components: {
        MyCouponCard
    },
    data() {
        return {}
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
            directTo({
                url: '/pages/subPackages/usingRecord/usingRecord'
            })
        },
        onClickCouponCenter() {
            directTo({
                url: '/pages/subPackages/couponCenter/couponCenter'
            })
        }
    }
}
</script>

<style lang="scss">
.myCoupon-container {
    position: relative;
    width: 100%;
    height: 100vh;
    .list {
        width: 100%;
        height: calc(100vh - 100px);
    }
    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #f2f2f2;
        position: fixed;
        padding-top: 20px;
        bottom: 0;
        left: 0;
        height: 100px;
    }
}
</style>