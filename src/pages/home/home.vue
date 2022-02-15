<template>
  <div class="home">
    <!-- swiper -->
    <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#333" current="1" :duration="500" :interval="1000" :circular="true" :autoplay="true" :indicator-dots="true">
      <swiper-item v-for="(item, idx) in swiperImgs" :key="idx">
        <image :src="item" class="slide-image" />
      </swiper-item>
    </swiper>

    <!-- tips -->
    <div class="tips">
      <div class="tips-left">
        <AtIcon value='sketch' size='16' color='#F00'></AtIcon>
        <div style="margin-left:5px">luckin You ~ 跟幸运打个招呼</div>
      </div>
      <div>Lv4.小咕鹿</div>
    </div>

    <!-- kingkong -->
    <div class="kingkong global-flex-column global-padding-30">
      <div class="global-flex-around">
        <div class="kingkong-top" v-for="(item, index) in tipsData.top" :key="index">
          <div>
            <img class="kingkong-top-img" :src="item.img" alt="">
          </div>
          <div class="global-fontsize-14" style="font-size:16px; margin-bottom:5px">{{item.title}}</div>
          <div class="global-fontsize-12" style="color:#999">{{item.desc}}</div>
        </div>
      </div>
      <div class="global-flex-around" style="margin-top:20px;">
        <div class=" kingkong-bottom" v-for="(item, index) in tipsData.bottom" :key="index">
          <div>
            <img class="kingkong-bottom-img" :src="item.img" alt="">
          </div>
          <div class="global-fontsize-14" style="font-size:14px; margin-bottom:5px">{{item.title}}</div>
          <div class="global-fontsize-12" style="color:#999">{{item.desc}}</div>
        </div>
      </div>
    </div>

    <!-- Advertising -->
    <BaseCard class="advertising">
      <img :src="guanggao" alt="">
    </BaseCard>

    <!-- Advertising -->
    <BaseCard class="welfare">
      <div class="top">
        <div style="fontSize:20px">福利中心</div>
        <div style="fontSize:12px">查看更多</div>
      </div>
      <div class="bottom">
        <div class="scroll">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
          <div class="item">7</div>
          <div class="item">8</div>
          <div class="item">9</div>
          <div class="item">X</div>
          <div class="item">XI</div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import { AtIcon } from 'taro-ui-vue'
// import request from '@/utils/network'
import { directTo } from '@/utils/vapiDispatcher'
import pageData from '../../utils/mock/homeData'
import BaseCard from '@/components/BaseCard.vue'
export default {
    components: { AtIcon, BaseCard },
    data() {
        return {
            ...pageData,
            guanggao: ''
        }
    },
    mounted() {
        this.guanggao = require('@/assets/image/home/guanggao1.jpg')
        // this.initData()
    },
    methods: {
        // async initData() {
        //     if (process.env.TARO_ENV != 'weapp') {
        //         const res = await request({
        //             url: '/taro/issues',
        //             data: { per_page: 1, page: 2 }
        //         })
        //         this.baseCardData = res[0].labels
        //     }
        // },
        handleClick() {
            this.show = true
        },
        baseCardItemClick() {
            directTo({
                url: '/pages/subPackages/homeDetail/homeDetail?id=2222'
            })
        },
        handleClose() {
            this.show = false
        }
    }
}
</script>

<style lang="scss">
.home {
    background-color: #f2f2f2;
    .swiper {
        height: 400px;
        position: relative;
        .slide-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .tips {
        z-index: 10;
        padding: 20px 30px;
        width: 84%;
        position: absolute;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        top: 336px;
        left: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        .tips-left {
            display: flex;
            align-items: center;
        }
    }
    .kingkong {
        margin: 0 30px;
        background-color: #fff;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        display: flex;
        flex-direction: column;
        text-align: center;
        .kingkong-top-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            display: inline-block;
        }
        .kingkong-bottom-img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            display: inline-block;
        }
    }
    .advertising {
        margin: 30px;
        // height: 200px;
        img {
            border-radius: 15px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .welfare {
        margin: 30px;
        height: 200px;
        .top {
            padding: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .bottom {
            .scroll {
                text-align: center;
                white-space: nowrap;
                overflow-x: scroll;
                overflow-y: hidden;
                .item {
                    width: 100px;
                    height: 50px;
                    background-color: aqua;
                    border-right: 1px solid;
                    white-space: nowrap;
                    display: inline-block;
                }
            }
        }
    }
}
</style>
