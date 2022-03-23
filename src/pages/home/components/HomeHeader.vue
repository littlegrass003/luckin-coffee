<template>
  <div class="home-header">
    <div class="navigation" :style="{height:navHeight + 'px'}"></div>
    <div class="home-top">
      <img @click="backLogin" class="home-top-icon" src="../../../assets/image/home/icon.png" alt="">
      <span class="home-top-name" @click="gotoCoupon">微信用户</span>
      <span class="home-top-level">LV.5</span>
      <div class="home-top-upgrade" @click="onClickUpgrade"><span class="home-top-upgrade-text">升级会员</span></div>
    </div>
    <div class="home-content">
      <div class="home-content-item">
        <div class="title">120</div>
        <div class="subtitle">优惠券</div>
      </div>
      <div class="home-content-item">
        <div class="title">99</div>
        <div class="subtitle">年卡</div>
      </div>
      <div class="home-content-item">
        <div class="title">1999</div>
        <div class="subtitle">工行联名卡</div>
      </div>
    </div>
    <div class="home-bottom">
      <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#fb8c00" current="0" :duration="500" :interval="2000" :circular="true" :autoplay="true" :indicator-dots="true">
        <swiper-item class="swiper-item" v-for="(item, index) in swiperData" :key="index">
          <image :src="item" class="swiper-image" />
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { directTo } from '@/utils/vapiDispatcher'
import { navStatusBarHeight } from '@/utils/globalConfig'
export default {
    name: 'HomeHeader',
    props: {
        swiperData: {
            type: Array,
            default: {}
        }
    },
    data() {
        return {
            autoplay: false,
            navHeight: navStatusBarHeight
        }
    },
    methods: {
        gotoCoupon() {
            directTo({
                url: '/pages/subPackages/myCoupon/myCoupon'
            })
        },
        onClickUpgrade() {
            directTo({
                url: '/pages/subPackages/homeDetail/homeDetail?id=2222'
            })
        },
        backLogin() {
            directTo({
                url: '/pages/subPackages/authorization/authorization'
            })
        }
    }
}
</script>

<style lang="scss">
.home-header {
    width: 100%;
    background: linear-gradient(to bottom, #fdd19b, #faf5f0);
    // padding: 0 20px;
    .navigation {
        width: 100%;
    }
    .home-top {
        padding: 0 20px;
        display: flex;
        align-items: center;
        position: relative;
        .home-top-icon {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
        }
        .home-top-name {
            margin-left: 30px;
            font-size: 36px;
            max-width: 200px;
        }
        .home-top-level {
            margin-left: 30px;
            font-size: 24px;
            background-color: #ff8500;
            color: #fff;
            padding: 2px 10px;
            border-radius: 20px;
        }
        .home-top-upgrade {
            background-color: #fbe8d7;
            position: absolute;
            right: 0;
            border: solid 2px #fdcaa3;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
            .home-top-upgrade-text {
                color: #784d46;
                padding: 15px 30px;
            }
        }
    }
    .home-content {
        margin: 20px 0;
        padding: 0 20px;
        display: flex;
        justify-content: space-around;
        .home-content-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            .title {
                font-weight: 500;
            }
            .subtitle {
                font-size: 24px;
                color: #333;
            }
        }
    }
    .home-bottom {
        margin: 0 20px;
        border-radius: 25px;
        .swiper {
            .swiper-item {
                border-radius: 20px;
                .swiper-image {
                    border-radius: 20px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>