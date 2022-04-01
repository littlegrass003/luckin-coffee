<template>
  <div class="changeHistory-container">
    <div class="content">
      <div class="content-top">
        <div class="prompt">超级会员</div>
        <div class="number">剩余兑换次数:3次</div>
        <div class="use-button" @click="onClickUse">立即使用</div>
      </div>
      <div class="content-bottom">
        <div class="one-row">
          <div>使用人</div>
          <div>证件号码</div>
          <div>兑换时间</div>
        </div>
        <ul class="content-bottom-list">
          <li v-for="(item, index) in historyData" :key="index" class="li-class">
            <div>{{item.name}}</div>
            <div>{{item.idCard}}</div>
            <div>{{item.time}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
import pageData from '@/utils/mock/homeData'
export default {
    name: 'ChangeHistory',
    data() {
        return {
            ...pageData
        }
    },
    methods: {
        onClickUse() {
            directTo({
                url: '/pages/subPackages/useInterests/useInterests'
            })
        }
    }
}
</script>

<style lang="scss">
.changeHistory-container {
    background-color: #f0f4f7;
    padding: 32px;
    height: 100vh;
    .content {
        padding: 32px 30px;
        background-color: #fff;
        border-radius: 20px;
        .content-top {
            position: relative;
            .prompt {
                font-size: 28px;
                font-weight: 500;
                color: #000000;
            }
            .number {
                font-size: 28px;
                color: #5588ed;
            }
            .use-button {
                right: 0;
                bottom: 0;
                width: 168px;
                height: 44px;
                line-height: 44px;
                position: absolute;
                text-align: center;
                border-radius: 20px;
                font-size: 24px;
                border: 2px solid #5588ed;
                color: #5588ed;
                background-color: #fff;
            }
        }
        .content-bottom {
            margin-top: 32px;
            .one-row {
                padding: 0 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: left;
                background: rgba(107, 118, 217, 0.1);
                border-radius: 20px 20px 0px 0px;
                height: 56px;
                font-size: 24px;
                color: #000;
            }
            .content-bottom-list {
                .li-class {
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: left;
                    height: 56px;
                    font-size: 24px;
                    color: #000;
                    border-bottom: 2px dashed #E3E3E3;
                }
                .li-class:last-child {
                  border-bottom: none;
                }
            }
        }
    }
}
</style>