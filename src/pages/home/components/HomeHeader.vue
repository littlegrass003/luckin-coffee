<template>
  <div class="home-header" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <div class="navigation" :style="{height:navHeight + 'px'}"></div>
    <div class="home-top">
      <div v-if="userInfo.avatar" class="home-userinfo">
        <img @click="backLogin" class="home-top-icon" :src="userInfo.avatar" alt="">
        <span class="home-top-name" @click="gotoCoupon">{{userInfo.nickname}}</span>
      </div>
      <div v-else class="home-userinfo">
        <img @click="backLogin" class="home-top-icon" src="../../../assets/image/home/icon.png" alt="">
        <span class="home-top-name" @click="gotoCoupon">微信用户</span>
      </div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { directTo } from '@/utils/vapiDispatcher'
import { navStatusBarHeight } from '@/utils/globalConfig'
import { OSS_URL } from '@/utils/globalConfig'
export default {
    name: 'HomeHeader',

    data() {
        return {
            autoplay: false,
            navHeight: navStatusBarHeight,
            token: {},
            userInfo: {},
            backgroundImg: OSS_URL + '/home/bgc.png'
        }
    },
    mounted() {
        this.token = Taro.getStorageSync('wechat_token')
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
    },
    methods: {
        gotoCoupon() {
            directTo({
                url: '/pages/subPackages/realName/realName'
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
    height: 600px;
    .navigation {
        width: 100%;
    }
    .home-top {
        padding: 0 30px;
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
                color: #fff;
                margin-left: 30px;
                font-size: 48px;
                max-width: 200px;
            }
        }
    }
}
</style>