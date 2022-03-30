<template>
  <div class="couponCenter-container">
    <div class="top-container" :style="{backgroundImage: 'url(' + bgc + ')', backgroundSize:'100% 100%'}">

      <div class="top">
        <img class="top-img" src="@/assets/image/coupon/center_qiang.png" alt="">
        <div class="time">距本场结束 01:53:21</div>
      </div>

      <div class="middle">
        <div class="middle-item">
          <div :class="[isActive==1 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(1)">10:00</div>
          <div class="middle-title">已开抢</div>
        </div>
        <div class="middle-item">
          <div :class="[isActive==2 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(2)">11:00</div>
          <div class="middle-title-active">热抢中</div>
        </div>
        <div class="middle-item">
          <div :class="[isActive==3 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(3)">12:00</div>
          <div class="middle-title">未开始</div>
        </div>
        <div class="middle-item">
          <div :class="[isActive==4 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(4)">13:00</div>
          <div class="middle-title">未开始</div>
        </div>
        <div class="middle-item">
          <div :class="[isActive==5 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(5)">14:00</div>
          <div class="middle-title">未开始</div>
        </div>
      </div>

      <div class="bottom">
        <div v-if="isActive==1">
          <CouponCenterCard title="10:00" />
        </div>
        <div v-else-if="isActive==2">
          <CouponCenterCard title="14:00" />
        </div>
        <div v-else>
          <CouponCenterCard title="20:00" />
        </div>
      </div>

    </div>

    <div class="bottom-list">
      <CouponCenterList :listData="couponCenterData" />
    </div>
  </div>
</template>

<script>
import pageData from '@/utils/mock/homeData'
import CouponCenterCard from './components/CouponCenterCard'
import CouponCenterList from './components/CouponCenterList'
import { OSS_URL } from '@/utils/globalConfig'
export default {
    name: 'CouponCenter',
    components: {
        CouponCenterCard,
        CouponCenterList
    },
    data() {
        return {
            ...pageData,
            isActive: 1,
            bgc: OSS_URL + '/coupon/center_bg.png'
        }
    },
    methods: {
        onClickChooseButton(e) {
            this.isActive = e
        }
    }
}
</script>

<style lang="scss">
.couponCenter-container {
    background-color: #f0f4f7;
    padding: 30px;
    .top-container {
        border-radius: 20px;
        height: 360px;
        padding: 22px 30px;
        .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .top-img {
                width: 136px;
                height: 34px;
            }
            .time {
                background-color: #fcfcfc;
                border-radius: 20px;
                font-size: 24px;
                color: #5588ed;
                padding: 6px 14px;
            }
        }
        .middle {
            display: flex;
            justify-content: space-between;
            .middle-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                .middle-title {
                    margin-top: 10px;
                    color: #fff;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 24px;
                    padding: 10px 14px 5px;
                }
                .middle-title-active {
                    margin-top: 10px;
                    color: #5588ed;
                    font-weight: 500;
                    font-size: 24px;
                    background-color: #fff;
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    padding: 10px 14px 5px;
                    line-height: 24px;
                }
            }
            .custom-button {
                flex: 1;
                text-align: center;
                padding: 0px 30px;
                border-radius: 30px;
                // background-color: red;
                color: #fff;
                font-size: 24px;
                font-weight: 500;
                line-height: 24px;
            }
            .active-button {
                flex: 1;
                padding: 0px 30px;
                text-align: center;
                border-radius: 30px;
                // background-color: red;
                color: #fff;
                font-size: 24px;
                font-weight: 500;
                line-height: 24px;
            }
        }
    }

    .bottom-list {
        margin-top: 36px;
    }
}
</style>