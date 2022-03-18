<template>
  <div class="home-task">
    <GlobalBaseCard title="会员任务" subTitle="任务中心">
      <template #content>
        <div class="content">
          <div class="content-top">
            <div>消费任务 (¥5.00/190)</div>
            <div>
              <AtProgress isHidePercent :percent="80" status='progress' color="#ff7e33" />
            </div>
          </div>
          <div class="content-bottom">
            <div class="content-bottom-left">
              <span>倒计时</span>
              <div class="conteng-bottom-left-time">
                <AtCountdown isCard :format="{ hours: ':', minutes: ':', seconds: '' }" :seconds="20000" :onTimeUp="onTimeUp" />
              </div>
            </div>
            <div class="content-bottom-right">
              <span>签到</span>
              <span class="content-bottom-right-button">签到</span>
            </div>
          </div>
        </div>
      </template>
    </GlobalBaseCard>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import GlobalBaseCard from '@/components/GlobalBaseCard'
import pageData from '@/utils/mock/homeData'
import { AtCountdown } from 'taro-ui-vue'
import { AtProgress } from 'taro-ui-vue'

export default {
    name: 'HomeTask',
    components: {
        GlobalBaseCard,
        AtCountdown,
        AtProgress
    },
    data() {
        return {
            ...pageData
        }
    },
    methods: {
        onTimeUp() {
            Taro.showToast({
                title: '时间到',
                icon: 'success',
                duration: 2000
            })
        }
    }
}
</script>

<style lang="scss">
.home-task {
    .content {
        border-radius: 8px;
        margin-top: 20px;
        .content-top {
            margin-bottom: 40px;
            :nth-child(2) {
                margin-top: 10px;
            }
        }
        .content-bottom {
            display: flex;
            .content-bottom-left {
                flex: 1;
                margin-bottom: 10px;
                .conteng-bottom-left-time {
                    margin-top: 30px;
                    .at-countdown--card .at-countdown__time-box {
                        background-color: #fdd2b2;
                        border: 1px solid #fdd2b2;
                    }
                    .at-countdown__separator {
                        // padding: 0 20px;
                        color: #ff7715;
                        font-weight: 500;
                    }
                }
            }
            .content-bottom-right {
                width: 200px;
                .content-bottom-right-button {
                    // border: 1px solid #fff;
                    box-shadow: 2px 6px 20px #fcd7c9;
                    // -moz-box-shadow: 2px 2px 5px #333333;
                    // -webkit-box-shadow: 2px 2px 5px #333333;
                    // box-shadow: 2px 2px 5px #333333;

                    margin-top: 20px;
                    width: 200px;
                    padding: 10px 15px;
                    background-color: #ff9032;
                    // box-shadow: #ff9032;
                    color: #fff;
                    border-radius: 30px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
