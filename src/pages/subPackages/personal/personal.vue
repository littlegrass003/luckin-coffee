<template>
  <div class="personal-container">
    <div class="content">
      <div class="top">
        <div class="title">头像</div>
        <div class="right">
          <img class="icon" :src="userInfo.avatar" alt="">
        </div>
      </div>
      <div class="top-name">
        <div class="title">昵称</div>
        <div class="right">
          <span>{{userInfo.nickname}}</span>
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <div class="item-title">邮箱</div>
          <div class="item-line"></div>
        </div>
        <div class="item">
          <div class="item-title">城市</div>
          <div class="item-line"></div>
          <img class="item-xia-img" src="@/assets/image/global/arrow_xia.png" alt="">
        </div>
        <div class="item">
          <div class="item-title">地址</div>
          <div class="item-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtInput, AtForm } from 'taro-ui-vue'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui-vue'
export default {
    name: 'Personal',
    components: {
        AtForm,
        AtInput,
        AtActionSheet,
        AtActionSheetItem
    },
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.userInfo = Taro.getStorageSync('wechat_userInfo')
    }
}
</script>

<style lang="scss">
.personal-container {
    background: #f0f4f7;
    height: 100vh;
    padding: 28px 32px 0;
    .content {
        background-color: #fff;
        width: 100%;
        border-radius: 20px;
        height: calc(100vh - 80px);

        .top-name{
          background-color: #fff;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 22px 48px 20px 32px;
            // height: 134px;
            .title {
                font-size: 32px;
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
        .top {
            background-color: #fff;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 22px 48px 10px 32px;
            // height: 134px;
            .title {
                font-size: 32px;
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
            background-color: white;
            border-radius: 20px;
            .item {
                position: relative;
                display: flex;
                justify-content: space-between;
                padding: 30px 48px 30px 30px;
                align-items: center;
                .item-title {
                    font-size: 32px;
                    font-weight: 400;
                    color: #000000;
                }
                .item-img {
                    width: 16px;
                    height: 30px;
                }
                .item-xia-img {
                    width: 30px;
                    height: 16px;
                }
                .item-line {
                    position: absolute;
                    bottom: 0px;
                    left: 30px;
                    right: 26px;
                    border: 1px solid #e3e3e3;
                }
                .item-address-line {
                    position: absolute;
                    bottom: 0px;
                    left: 140px;
                    right: 26px;
                    border: 1px solid #e3e3e3;
                }
            }
        }
    }
}
</style>