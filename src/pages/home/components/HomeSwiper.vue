<template>
  <div class="home-swiper-container">
    <!-- <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#fb8c00" current="0" :duration="500" :interval="2000" :circular="true" :autoplay="true" :indicator-dots="true">
      <swiper-item class="swiper-item" v-for="(item, index) in swiperData" :key="index">
        <image :src="item" class="swiper-image" />
      </swiper-item>
    </swiper> -->
    <div style="margin:0 auto; width:100%; text-align:center; font-size:40px;" @click="onClickCardDetail">Card Detail</div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'HomeSwiper',
    props: {
        swiperData: {
            type: Array,
            default: {}
        }
    },
    methods: {
        onClickCardDetail() {
            directTo({
                url: '/pages/subPackages/cardDetail/cardDetail'
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
        height: 300px;
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
</style>