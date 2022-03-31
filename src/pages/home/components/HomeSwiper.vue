<template>
  <div class="home-swiper-container" @click="onClickCardDetail">
    <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#fb8c00" current="0" :duration="500" :interval="2000" :circular="true" :autoplay="false" :indicator-dots="false">
      <swiper-item class="card" v-for="(item, index) in cardData" :key="index">
        <div class="card-top" :style="{ background: 'no-repeat url(' + item.card_img + ')', backgroundSize:'100% 100%'}">
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
        <image class="card-qrcode" src="@/assets/image/card/qrcode.png" @click="onClickQrCode" />
        <div class="card-bottom" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
          <div v-for="(quanyiItem, quanyiIndex) in item.quanyiArr" :key="quanyiIndex">
            <img class="quanyiItem-img" :src="quanyiItem.imgUrl" alt="">
          </div>
        </div>
      </swiper-item>
    </swiper>
    <!-- <div style="margin:0 auto; width:100%; text-align:center; font-size:40px;" @click="onClickCardDetail">Card Detail</div> -->
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
            cardImg: OSS_URL + '/card/card-detail-bg1.png'
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
        }
    }
}
</script>

<style lang="scss">
.home-swiper-container {
    padding: 0 30px;
    border-radius: 25px;
    .swiper {
        height: 532px;
        .card {
            position: relative;
            border-radius: 20px;
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
                bottom: -25px;
                left: 0px;
                width: 100%;
                height: 276px;
                background-color: red;
                display: flex;
                .quanyiItem-img{
                    width: 50px;
                    height: 50px;
                }
            }
        }

    }
}
</style>