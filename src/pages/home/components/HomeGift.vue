<template>
  <div class="home-kingkong">
    <GlobalBaseCard title="会员礼遇" subTitle="更多礼遇">
      <template #content>
        <div class="content">
          <div class="content-top">
            <div class="progress-margin">
              <div v-for="(item, index) in liyuData" :key="index">
                <div class="item">
                  <img class="img" :src="item.img" alt="">
                  <div class="point">·</div>
                </div>
              </div>
            </div>
            <div class="content-top-two">
              <AtProgress isHidePercent :percent="80" status='progress' color="#ff7e33" />
            </div>
            <div class="progress-margin">
              <div v-for="(item, index) in numberArr" :key="index">
                <div class="item number">
                  <span>{{item}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="content-bottom">
            <div class="content-bottom-left">
              <div class="content-bottom-left-top">卡券</div>
              <div class="content-bottom-left-bottom">
                <img class="img" src="../../../assets/image/home/icon.png" alt="">
                <img class="img" src="../../../assets/image/home/icon.png" alt="">
              </div>
            </div>
            <div class="content-bottom-right">
              <div class="content-bottom-right-top">礼物</div>
              <div class="content-bottom-right-bottom">
                <img class="img" src="../../../assets/image/home/icon.png" alt="">
                <img class="img" src="../../../assets/image/home/icon.png" alt="">
              </div>
            </div>

          </div>
        </div>
      </template>
    </GlobalBaseCard>
  </div>
</template>

<script>
import GlobalBaseCard from '@/components/GlobalBaseCard'
import pageData from '@/utils/mock/homeData'
import { AtProgress } from 'taro-ui-vue'
export default {
    name: 'HomeGift',
    components: {
        GlobalBaseCard,
        AtProgress
    },
    data() {
        return {
            numberArr: ['50', '100', '200', '300', '500', '1000'],
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.home-kingkong {
    .content {
        margin-top: 20px;
        .content-top {
            .progress-margin {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .content-top-two {
            }
            .number {
                width: 40px;
                font-size: 24px;
                color: #9f9f9f;
                text-align: center;
                margin-top: 20px;
            }
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                .img {
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                }
                .point {
                    color: #ff7700;
                    font-size: 60px;
                    line-height: 20px;
                    margin-top: 10px;
                }
                margin-bottom: 5px;
            }
        }
        .content-bottom {
            margin-top: 30px;
            display: flex;
            .content-bottom-left {
                flex: 0.5;
                .content-bottom-left-top {
                    margin-bottom: 20px;
                }
                .content-bottom-left-bottom {
                    display: flex;
                    .img {
                        width: 120px;
                        height: 100px;
                    }
                    :nth-child(2){
                      margin-left: 20px;
                    }
                }
            }
            .content-bottom-right {
                flex: 0.5;
                .content-bottom-right-top {
                    margin-bottom: 20px;
                }
                .content-bottom-right-bottom {
                    display: flex;
                    width: 100%;
                    .img {
                        width: 120px;
                        height: 100px;
                    }
                    :nth-child(2){
                      margin-left: 20px;
                    }
                }
            }
        }
    }
}
</style>