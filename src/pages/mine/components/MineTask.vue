<template>
  <div class="mine-task">
    <GlobalBaseCard2 title="会员任务" subTitle="任务中心">
      <template #content>
        <div class="content">
          <div class="content-top">
            <div>消费任务 (¥5.00/190)</div>
            <div>
              <AtProgress isHidePercent :percent="80" status='progress' color="#37abc1" />
            </div>
          </div>
          <div class="content-bottom">
            <div class="content-bottom-left">
              <span>倒计时</span>
              <div class="content-bottom-left-time">
                <AtCountdown class="countdown" :format="{ hours: ':', minutes: ':', seconds: '' }" :seconds="20000" :onTimeUp="onTimeUp" />
                <span class="content-bottom-left-button">查看奖励</span>
              </div>
            </div>
            <div class="content-bottom-right">
              <span>签到</span>
              <span class="content-bottom-right-button">签到</span>
            </div>
          </div>
        </div>
      </template>
    </GlobalBaseCard2>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import GlobalBaseCard2 from '@/components/GlobalBaseCard2'
import pageData from '@/utils/mock/mineData'
import { AtCountdown } from 'taro-ui-vue'
import { AtProgress } from 'taro-ui-vue'

export default {
    name: 'MineTask',
    components: {
        GlobalBaseCard2,
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
.mine-task {
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
                .content-bottom-left-time {
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    .content-bottom-left-button {
                        border: 1px solid #3cacc2;
                        width: 150px;
                        padding: 10px 15px;
                        background-color: #ecf6fa;
                        color: #3cacc2;
                        border-radius: 30px;
                        text-align: center;
                    }
                    .countdown{
                      width: 200px;
                    }
                    .at-countdown--card .at-countdown__time-box {
                        background-color: #37abc1;
                        border: 1px solid #37abc1;
                    }
                    .at-countdown__time-box {
                        font-weight: 600;
                        font-family: none;
                        color: #37abc1;
                    }
                    .at-countdown__separator {
                        // padding: 0 20px;
                        color: #37abc1;
                        font-weight: 500;
                    }
                }
            }
            .content-bottom-right {
                width: 200px;
                .content-bottom-right-button {
                    border: 1px solid #3cacc2;
                    margin-top: 20px;
                    width: 150px;
                    padding: 10px 15px;
                    background-color: #ecf6fa;
                    color: #3cacc2;
                    border-radius: 30px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
