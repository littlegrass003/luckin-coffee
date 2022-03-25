<template>
  <div class="home-card-container" :style="{backgroundImage: 'url(' + bgc + ')', backgroundSize:'contain'}" @click="onClickItem">
    <div class="title">{{title}}</div>
    <div class="sub-title">{{subTitle}}</div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'HomeCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        bgc: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            backgroundImg: ''
        }
    },
    mounted() {
        this.backgroundImg = this.bgc
    },
    methods: {
        // type == center 领券中心
        // type == bag    我的卷包
        onClickItem() {
            if (this.type == 'center') {
                // 领券中心
                directTo({
                    url: '/pages/subPackages/couponCenter/couponCenter'
                })
            } else {
                // 我的卷包
                directTo({
                    url: '/pages/subPackages/myCoupon/myCoupon'
                })
            }
        }
    }
}
</script>

<style lang="scss">
.home-card-container {
    margin: 0 30px;
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    padding: 50px;
    align-items: center;
    .title {
        color: #1a1a1a;
        font-size: 36px;
    }
    .sub-title {
        margin-left: 30px;
        color: #8f8f8f;
        font-size: 26px;
    }
}
</style>