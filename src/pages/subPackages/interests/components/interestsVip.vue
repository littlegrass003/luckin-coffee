<template>
  <div class="interestsVip-container">
    <div class="top">
      <div class="prompt">超级会员</div>
      <div class="number">剩余兑换次数：3次</div>
    </div>
    <div class="content">
      富文本
    </div>
    <div class="bottom">
      <div class="button1" @click="onClickHistory">兑换历史</div>
      <div class="button2" @click="onClickUse">立即使用</div>
    </div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'InterestsVip',
    methods: {
        onClickHistory() {
            directTo({
                url: '/pages/subPackages/useInterests/useInterests'
            })
        },
        onClickUse() {
            directTo({
                url: '/pages/subPackages/changeHistory/changeHistory'
            })
        }
    }
}
</script>

<style lang="scss">
.interestsVip-container {
    .top {
        padding: 26px 32px;
        background-color: #fff;
        .prompt {
            font-size: 28px;
            font-weight: 500;
            color: #000000;
        }
        .number {
            font-size: 28px;
            font-weight: 400;
            color: #5588ed;
        }
    }
    .content {
        margin: 32px 0 40px 0;
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        line-height: 22px;
        .button1 {
            color: #5588ed;
            padding: 26px 60px;
            text-align: center;
            border: 2px solid #5588ed;
            border-radius: 20px;
            margin-right: 40px;
        }
        .button2 {
            color: #ffffff;
            padding: 26px 60px;
            text-align: center;
            background-color: #5588ed;
            border-radius: 20px;
        }
    }
}
</style>