<template>
  <div class="setup-container">
    <div class="top" @click="onClickPersonal">
      <div class="title">个人资料</div>
      <div class="right">
        <img class="icon" :src="userInfo.avatar" alt="">
        <img class="arrow" src="@/assets/image/global/arrow-right.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <div class="item-title">账号绑定设置</div>
        <img class="item-img" src="@/assets/image/global/arrow-right.png" alt="">
        <div class="item-line"></div>
      </div>
      <div class="item" @click="onClickShimingrenzheng">
        <div class="item-title">实名认证</div>
        <img class="item-img" src="@/assets/image/global/arrow-right.png" alt="">
        <div class="item-line"></div>
      </div>
      <div class="item">
        <div class="item-title">关于我们</div>
        <img class="item-img" src="@/assets/image/global/arrow-right.png" alt="">
        <div class="item-line"></div>
      </div>
      <div class="item">
        <div class="item-title">用户协议</div>
        <img class="item-img" src="@/assets/image/global/arrow-right.png" alt="">
        <div class="item-line"></div>
      </div>
      <div class="item">
        <div class="item-title">隐私政策</div>
        <img class="item-img" src="@/assets/image/global/arrow-right.png" alt="">
        <div class="item-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
import Taro from '@tarojs/taro'
export default {
    name: 'Setup',
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
    },
    methods: {
        onClickPersonal() {
            directTo({
                url: '/pages/subPackages/personal/personal'
            })
        },
        onClickShimingrenzheng() {
            directTo({
                url: '/pages/subPackages/realName/realName'
            })
        }
    }
}
</script>

<style lang="scss">
.setup-container {
    background: #f0f4f7;
    height: 100vh;
    padding: 28px 32px 0;
    .top {
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 48px 0px 32px;
        height: 134px;
        .title {
            font-size: 36px;
            font-weight: 500;
            color: #000000;
        }
        .right {
            display: flex;
            align-items: center;
            .icon {
                width: 88px;
                height: 88px;
                border-radius: 50%;
            }
            .arrow {
                margin-left: 26px;
                width: 16px;
                height: 30px;
            }
        }
    }
    .bottom {
        height: calc(100vh - 200px);
        margin-top: 14px;
        background-color: white;
        border-radius: 20px;
        .item {
            position: relative;
            display: flex;
            justify-content: space-between;
            padding: 30px 48px 30px 30px;
            .item-title {
                font-size: 32px;
                font-weight: 400;
                color: #000000;
            }
            .item-img {
                width: 16px;
                height: 30px;
            }
            .item-line {
                position: absolute;
                bottom: 0px;
                left: 30px;
                right: 26px;
                border: 1px solid #e3e3e3;
            }
        }
    }
}
</style>