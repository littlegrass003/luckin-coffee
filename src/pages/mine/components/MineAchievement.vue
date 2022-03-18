<template>
  <div class="mine-achievement">
    <GlobalBaseCard2 title="会员成就">
      <template #content>
        <div class="content">
          <div class="content-top">
            <div class="number-container">
              <span class="number">29999</span>
              <span class="numberText">积分</span>
            </div>
            <div class="progress-container">
              <AtProgress :percent="50" status='progress' isHidePercent color="#37abc1" :strokeWidth="8" class="progress" />
              <div class="progress-title">29999/60000</div>
            </div>
          </div>
          <div class="content-bottom">
            <div v-for="(item, index) in optionsData.bottom" :key="index" class="kingkong">
              <div class="item">
                <img class="img" :src="item.img" alt="">
                <div class="title">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </GlobalBaseCard2>
  </div>
</template>

<script>
import GlobalBaseCard2 from '@/components/GlobalBaseCard2'
import pageData from '@/utils/mock/mineData'
import { AtProgress } from 'taro-ui-vue'
export default {
    name: 'MineAchievement',
    components: {
        GlobalBaseCard2,
        AtProgress
    },
    data() {
        return {
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.mine-achievement {
    .content {
        border-radius: 8px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        .content-top {
            margin-bottom: 30px;
            .progress-container {
                display: flex;
                .progress {
                  flex: 1;
                  margin-right: 30px;
                }
                .progress-title {
                    font-size: 24px;
                    color: #afafaf;
                }
            }
            .number-container {
                display: flex;
                align-items: center;
                .number {
                    color: #393939;
                    font-size: 40px;
                    font-weight: 500;
                    margin-right: 10px;
                }
                .numberText {
                    font-size: 24px;
                }
            }
        }

        .content-bottom {
            display: flex;
            flex-wrap: wrap;
            .kingkong {
                .item {
                    width: calc(100vw / 5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .img {
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                    }
                    .title {
                        margin-top: 10px;
                        font-size: 24px;
                    }
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>
