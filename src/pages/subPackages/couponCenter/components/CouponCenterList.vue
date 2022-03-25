<template>
  <div class="couponCenterList-container">
    <div class="myCouponCard-row" v-for="(item, index) in listData" :key="index">
      <div class="one-row">
        <div class="left">
          <img class="img" :src="item.imgUrl" alt="">
        </div>
        <div class="right">
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}</span>
        </div>
      </div>
      <div class="two-row">
        <div @click="onClickInstructions" class="instructions">
          <span>使用规则说明</span>
          <img v-if="isShowDetail" class="instructions-img" src="@/assets/image/global/arrow_shang.png" alt="">
          <img v-else class="instructions-img" src="@/assets/image/global/arrow_xia.png" alt="">
        </div>
        <div :class="[isShowDetail ? 'active-button' : 'normal-button']">使用核销</div>
      </div>
      <div class="three-row" v-show="isShowDetail">{{item.detail}}
      </div>
      <img class="guoqi-class" v-if="item.isGuoqi" src="@/assets/image/coupon/guoqi.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'myCouponCard',
    props: {
        listData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            isShowDetail: false
        }
    },
    methods: {
        onClickInstructions() {
            this.isShowDetail = !this.isShowDetail
        }
    }
}
</script>

<style lang="scss">
.couponCenterList-container {
    background-color: #f0f4f7;
    .myCouponCard-row {
        position: relative;
        border-radius: 20px;
        background-color: #fff;
        padding: 14px 20px 14px 14px;
        margin-bottom: 30px;
        .one-row {
            display: flex;
            border-bottom: 1px dashed #e3e3e3;
            padding-bottom: 20px;
            .img {
                border-radius: 20px;
                width: 148px;
                height: 148px;
                margin-right: 26px;
                object-fit: cover;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .name {
                    color: #000;
                    font-weight: 500;
                    font-size: 24px;
                    margin-bottom: 14px;
                }
                .time {
                    color: #9f9f9f;
                    font-weight: 500;
                    font-size: 20px;
                }
            }
        }
        .two-row {
            transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            align-items: center;
            .instructions {
                display: flex;
                align-items: center;
                color: #999;
                font-size: 20px;
                .instructions-img {
                    margin-left: 20px;
                    width: 14px;
                    height: 8px;
                }
            }
            .normal-button {
                margin-right: 14px;
                color: #fff;
                background-color: #5790ee;
                border-radius: 20px;
                font-size: 24px;
                width: 168px;
                line-height: 44px;
                height: 44px;
                text-align: center;
            }
            .active-button {
                color: #5790ee;
                border: 2px solid #5790ee;
                background-color: #fff;
                border-radius: 20px;
                font-size: 24px;
                width: 168px;
                line-height: 43px;
                height: 43px;
                text-align: center;
            }
        }
        .three-row {
            margin-top: 12px;
            font-size: 20px;
            color: #999999;
        }
        .guoqi-class {
            position: absolute;
            top: 0px;
            right: 34px;
            width: 168px;
            height: 40px;
        }
    }
}
</style>