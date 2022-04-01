<template>
  <div class="home-swiper-container" @click="onClickCardDetail">
    <swiper class="swiper" :previous-margin="24" :next-margin="24" indicatorColor="#999" indicatorActiveColor="#fb8c00" current="0" :duration="500" :interval="2000" :circular="true" :autoplay="false" :indicator-dots="false" @change="onClickSwiperChange">
      <!-- <view catchMove> -->
        <swiper-item v-for="(item, index) in cardData" :key="index" class="card" :item-id="index">
          <div :class="[currentIndex == index ? 'scale-current' : 'scale-normal', 'card-top']" :style="{ background: 'no-repeat url(' + item.card_img + ')', backgroundSize:'100% 100%'}">
            <div class="card-title">{{item.card_name}}</div>
            <div class="card-info">
              <div class="card-info-title">{{item.card_number}}</div>
              <div class="card-info-bottom">
                <div class="card-info-prompt">
                  <div>VALID</div>
                  <div>THRU</div>
                </div>
                <div class="card-info-time">{{item.card_time}}</div>
              </div>
            </div>
          </div>

          <!-- <image class="card-qrcode" mode="aspectFill" src="@/assets/image/card/qrcode.png" @click="onClickQrCode" /> -->

          <view catchMove :class="[currentIndex == index ? 'scale-current' : 'scale-normal', 'card-bottom']" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
            <!-- 这一层必须用view taro给view添加了catchmove事件 以用来防止事件穿透 -->
            <div class="quanyi-view" v-for="(quanyiItem) in item.quanyiArr" :key="quanyiItem.quanyi_id">
              <div class="quanyi-item">
                <img class="quanyi-item-img" :src="quanyiItem.imgUrl" alt="">
                <div class="quanyi-item-title">{{quanyiItem.value}}</div>
              </div>
            </div>
          </view>
        </swiper-item>
      <!-- </view> -->
    </swiper>
  </div>
</template>

<script>
import { OSS_URL } from '@/utils/globalConfig'
import { directTo } from '@/utils/vapiDispatcher'
import Taro from '@tarojs/taro'
export default {
    name: 'HomeSwiper',
    props: {
        cardData: {
            type: Array,
            default: {}
        }
    },
    data() {
        return {
            backgroundImg: OSS_URL + '/card/card-yifu.png',
            cardImg: OSS_URL + '/card/card-detail-bg1.png',
            currentIndex: 0
        }
    },
    methods: {
        onClickCardDetail() {
            directTo({
                url: '/pages/subPackages/cardDetail/cardDetail'
            })
        },
        onClickQrCode() {
            Taro.showToast({
                title: '点击了二维码',
                icon: 'none',
                mask: 'true'
            })
        },
        onClickSwiperChange(e) {
            console.log('changeCurrent ==> ', e)
            console.log('e.detail.current ==> ', e.detail.current)
            this.currentIndex = e.detail.current
            console.log('this.currentIndex ==> ', this.currentIndex)
        }
    }
}
</script>

<style lang="scss">
.home-swiper-container {
    padding: 0px;
    border-radius: 25px;
    .swiper {
        height: 532px;
        .card {
            position: relative;
            border-radius: 20px;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            .scale-current {
                -webkit-transition: -webkit-transform 0.3s linear;
                transform: scale(1);
            }
            .scale-normal {
                border-radius: 20px;
                // margin: 0 50px;
                transform: scale(0.9);
                -webkit-transition: -webkit-transform 0.3s linear;
            }
            .card-top {
                width: 90%;
                z-index: 10;
                margin: 0 19px;
                position: absolute;
                border-radius: 20px;
                height: 364px;
                top: 0px;
                left: 0px;
                padding: 40px 0 0 36px;
                .card-title {
                    font-size: 48px;
                    font-weight: 600;
                    color: #fff;
                }
                .card-info {
                    margin-top: 56px;
                    .card-info-title {
                        font-size: 24px;
                        color: #ffffff;
                        letter-spacing: 1px;
                    }
                    .card-info-bottom {
                        display: flex;
                        align-items: center;
                        margin-top: 20px;
                        .card-info-prompt {
                            display: flex;
                            flex-direction: column;
                            font-size: 12px;
                            color: #cfcfcf;
                            margin-right: 12px;
                        }
                        .card-info-time {
                            font-size: 24px;
                            color: #ffffff;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
            .card-qrcode {
                z-index: 30;
                position: absolute;
                width: 98px;
                height: 118px;
                top: 0px;
                right: 96px;
            }
            .card-bottom {
                position: absolute;
                z-index: 20;
                bottom: -35px;
                left: 0px;
                width: 100%;
                height: 307px;
                overflow-x: scroll;
                overflow-y: none;
                flex-wrap: nowrap;
                display: flex;
                .quanyi-view {
                    padding: 120px 60px 0 0;
                    .quanyi-item {
                        // background-color: red;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100px;
                        .quanyi-item-img {
                            width: 70px;
                            height: 70px;
                        }
                        .quanyi-item-title {
                            margin-top: 10px;
                            font-size: 24px;
                            color: #000000;
                        }
                    }
                }
                .quanyi-view:nth-of-type(1) {
                    padding-left: 40px;
                }
                .quanyi-view:last-child {
                    padding-right: 40px;
                }
            }
        }
    }
}
</style>