<template>
  <div class="home">
    <Swiper :data="swipers" />
    <Options class="margin-10" />
    <Advertising class="margin-10" :imgData="guanggao" />
    <Welfare class="margin-10" />
    <List class="margin-10" />
  </div>
</template>

<script>
// import request from '@/utils/network'
import { directTo } from '@/utils/vapiDispatcher'
import pageData from '../../utils/mock/homeData'
import Swiper from '@/components/home/swiper.vue'
import Options from '@/components/home/options.vue'
import Advertising from '@/components/home/advertising.vue'
import Welfare from '@/components/home/welfare.vue'
import List from '@/components/home/list.vue'

export default {
    components: {
        Swiper,
        Options,
        Advertising,
        Welfare,
        List
    },
    data() {
        return {
            ...pageData,
            guanggao: ''
        }
    },
    mounted() {
        this.guanggao = require('@/assets/image/home/guanggao1.jpg')
        console.log(this.guanggao)
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

    .margin-10 {
        margin: 10px 10px 0;
    }

    // .welfare {
    //     margin: 30px;
    //     height: 200px;
    //     .top {
    //         padding: 30px;
    //         display: flex;
    //         justify-content: space-between;
    //         align-items: center;
    //     }
    //     .bottom {
    //         padding: 15px;
    //         position: relative;
    //         overflow: hidden;
    //         .scroll {
    //             text-align: center;
    //             overflow-x: scroll;
    //             overflow-y: hidden;
    //             display: inline-block;
    //             .item {
    //                 border-radius: 10px;
    //                 width: 200px;
    //                 height: 100px;
    //                 background-color: pink;
    //                 line-height: 100px;
    //                 padding: 20px;
    //                 display: flex;
    //                 flex-direction: column;
    //                 .title {
    //                     font-size: 14px;
    //                     font-weight: 500;
    //                 }
    //                 .desc {
    //                     font-size: 12px;
    //                     color: red;
    //                 }
    //             }
    //         }
    //     }
    // }
}
</style>
