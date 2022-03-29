<template>
  <div class="couponCenterList-container">
    <div class="couponCenterList-row" v-for="(item, index) in listData" :key="index">
      <div class="one-row">
        <div class="left">
          <img class="img" :src="item.imgUrl" alt="">
        </div>
        <div class="right">
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}</span>
          <div>
            <div v-if="item.isLingqu==1" class="get-class">领取</div>
            <div v-else-if="item.isLingqu==2" class="use-class" @click="onClickUse">立即使用</div>
            <div v-else class="guoqi-class">领取</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'InterestsList',
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
        },
        onClickUse() {
            directTo({
                url: '/pages/subPackages/useCoupon/useCoupon'
            })
        }
    }
}
</script>

<style lang="scss">
.couponCenterList-container {
    background-color: #f0f4f7;
    .couponCenterList-row {
        position: relative;
        border-radius: 20px;
        background-color: #fff;
        padding: 14px 20px 14px 14px;
        margin-bottom: 30px;
        .one-row {
            display: flex;
            .left {
                margin-right: 26px;
                width: 148px;
                height: 148px;
                .img {
                    border-radius: 20px;
                    width: 148px;
                    height: 148px;
                    margin-right: 26px;
                }
            }
            .right {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;
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
                .use-class {
                    background-color: #5588ed;
                    position: absolute;
                    bottom: 20px;
                    right: 0px;
                    width: 134px;
                    height: 44px;
                    border-radius: 20px;
                    border: 2px solid #5588ed;
                    color: #fff;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 48px;
                    text-align: center;
                }
                .get-class {
                    position: absolute;
                    bottom: 20px;
                    right: 0px;
                    width: 134px;
                    height: 44px;
                    border-radius: 20px;
                    border: 2px solid #5588ed;
                    color: #5588ed;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 48px;
                    text-align: center;
                }
                .guoqi-class {
                    position: absolute;
                    bottom: 20px;
                    right: 0px;
                    width: 134px;
                    height: 44px;
                    border-radius: 20px;
                    border: 2px solid #e3e3e3;
                    background-color: #e3e3e3;
                    color: #fff;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 48px;
                    text-align: center;
                }
            }
        }
    }
}
</style>