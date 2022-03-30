<template>
  <div class="couponCenterCard-container">
    <ul class="coupon-ul">
      <li class="coupon-li" v-for="(item,index) in 10" :key="index">
        <img class="coupon-li-img" src="@/assets/image/coupon/getCard_bg.png" alt="">
        <div class="coupon-li-title">美人鱼餐厅美人鱼餐厅 双人套餐一份</div>
        <div class="coupon-li-time">2022.03.10</div>
        <div class="button" @click="onClickGetCard"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
export default {
    name: 'CouponCenterCard-container',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {
        onClickGetCard() {
            Taro.showToast({
                title: '领取成功',
                icon: 'none',
                mask: 'true'
            })
        }
    }
}
</script>

<style lang="scss">
.couponCenterCard-container {
    background-color: #fff;
    border-radius: 20px;
    padding: 26px 0px 15px 26px;
    .coupon-ul {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        // overflow-y: none;
        .coupon-li {
            position: relative;
            color: white;
            // width: 500px;
            margin-right: 20px;
            // width: 270px;
            height: 178px;
            .coupon-li-img {
                width: 270px;
                height: 178px;
            }
            .coupon-li-title {
                position: absolute;
                // background-color: red;
                top: 30px;
                left: 20px;
                font-size: 24px;
                font-weight: 400;
                color: #000;
                width: 180px;
                height: 68px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .coupon-li-time {
                position: absolute;
                bottom: 40px;
                left: 10px;
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                transform: scale(0.9);
                font-weight: 500;
                color: #999999;
                line-height: 11px;
            }
        }
        // .coupon-li:nth-of-type(1) {
        //     padding-left: 26px;
        // }
        .coupon-li:last-child {
            padding-right: 26px;
        }
        .button {
            position: absolute;
            right: 0px;
            top: 0px;
            width: 70px;
            height: 178px;
            background-color: transparent;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
}
</style>