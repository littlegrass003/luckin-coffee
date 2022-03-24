<template>
  <div class="home-header">
    <div class="navigation" :style="{height:navHeight + 'px'}"></div>
    <div class="home-top">
      <div v-if="token" class="home-userinfo">
        <img @click="backLogin" class="home-top-icon" :src="userInfo.avatar" alt="">
        <span class="home-top-name" @click="gotoCoupon">{{userInfo.nickname}}</span>
      </div>
      <div v-else class="home-userinfo">
        <img @click="backLogin" class="home-top-icon" src="../../../assets/image/home/icon.png" alt="">
        <span class="home-top-name" @click="gotoCoupon">微信用户</span>
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
            navHeight: navStatusBarHeight,
            token: {},
            userInfo: {}
        }
    },
    mounted() {
        this.token = Taro.getStorageSync('wechat_token')
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
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
    .navigation {
        width: 100%;
    }
    .home-top {
        margin-bottom: 20px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        position: relative;
        .home-userinfo {
            display: flex;
            align-items: center;
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