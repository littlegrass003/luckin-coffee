<template>
  <div class="home">
    <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#333" current="current" :duration="duration" :interval="interval" :circular="isCircular" :autoplay="isAutoplay" :indicator-dots="hasIndicatorDots">
      <swiper-item v-for="(item, idx) in imgUrls" :key="idx">
        <image :src="item" class="slide-image" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import request from '@/utils/network'
import { directTo } from '@/utils/vapiDispatcher'
export default {
    components: {},
    data() {
        return {
            current: 1,
            duration: 500,
            interval: 1500,
            isCircular: false,
            isAutoplay: false,
            hasIndicatorDots: true,
            imgUrls: [
                'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
                'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
                'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
            ]
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        async initData() {
            if (process.env.TARO_ENV != 'weapp') {
                const res = await request({
                    url: '/taro/issues',
                    data: { per_page: 1, page: 2 }
                })
                this.baseCardData = res[0].labels
            }
        },
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
        .slide-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
