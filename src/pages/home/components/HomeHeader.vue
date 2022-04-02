<template>
  <div class="home-header">
    <div class="navigation" :style="{height:navHeight + 'px'}"></div>
    <div class="home-top">
      <div v-if="userInfo.avatar" class="home-userinfo">
        <img class="home-top-icon" :src="userInfo.avatar" alt="">
        <div class="home-top-right">
          <span class="home-top-name" @click="onClickName">{{userInfo.nickname}}</span>
          <img class="home-top-shiming" src="@/assets/image/home/yi-shiming.png" alt="">
        </div>
      </div>
      <div v-else class="home-userinfo">
        <img class="home-top-icon" src="@/assets/image/login/normal_icon.png" alt="">
        <div class="home-top-right">
          <span class="home-top-name" @click="onClickName">登录/注册</span>
          <img class="home-top-shiming" src="@/assets/image/home/no-shiming.png" alt="">
        </div>
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
        onClickName() {
            directTo({
                url: '/pages/subPackages/setup/setup'
            })
        },
        gotoAuthorization() {
            // directTo({
            //     url: '/pages/subPackages/authorization/authorization'
            // })
        }
    }
}
</script>

<style lang="scss">
.home-header {
    width: 100%;
    height: 550px;
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
            .home-top-right {
                display: flex;
                flex-direction: column;
                .home-top-shiming {
                    width: 94px;
                    height: 28px;
                    margin-left: 30px;
                }
            }
            .home-top-name {
                color: #fff;
                margin-left: 30px;
                font-size: 36px;
                font-weight: 500;
            }
        }
    }
}
</style>