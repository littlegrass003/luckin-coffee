<template>
  <div class="cardDetail-container" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <div>
      <div class="card" :style="{ background: 'no-repeat url(' + cardImg + ')', backgroundSize:'100% 100%'}">
        <img @click="onClickTransform" class="transform-img" src="@/assets/image/card/transform.png" alt="">
        <div class="title">海豚卡</div>
        <div class="title">1234</div>
      </div>
    </div>
    <div class="quanyi">
      <AtGrid :data='cardDetail' :hasBorder="false" :columnNum="4" />
    </div>
    <div class="shuoming">
      <div class="title">会员卡介绍说明</div>
      <div class="subtitle">会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明</div>
    </div>
    <div class="zhangcheng">
      <div class="title">会员章程</div>
      <div class="subtitle">会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程</div>
    </div>
  </div>
</template>

<script>
import pageData from '@/utils/mock/homeData'
import { AtGrid } from 'taro-ui-vue'
import { directTo } from '@/utils/vapiDispatcher'
import { OSS_URL } from '@/utils/globalConfig'
export default {
    name: 'CardDetail',
    components: {
        AtGrid
    },
    data() {
        return {
            isTransform: false,
            backgroundImg: OSS_URL + '/card/cardDetail_bg.png',
            cardImg: OSS_URL + '/card/card_bg.png',
            ...pageData
        }
    },
    methods: {
        gotoQuanyiDetail() {
            directTo({
                url: '/pages/subPackages/interests/interests'
            })
        },
        onClickTransform() {}
    }
}
</script>

<style lang="scss">
.cardDetail-container {
    padding: 28px 52px;
    .card {
        position: relative;
        height: 280px;
        padding: 28px 28px 54px 36px;
        .transform-img {
            position: absolute;
            width: 80px;
            height: 80px;
            right: 28px;
            top: 28px;
        }
        .title {
            font-size: 48px;
            font-weight: 600;
            color: #ffffff;
        }
    }
    .quanyi {
        margin-top: -30px;
        border-radius: 20px;
        background-color: #fff;
        padding: 46px 24px 28px;
        .content-inner__text {
            font-size: 24px;
        }
    }
    .shuoming {
        margin-top: 28px;
        font-weight: 500;
        color: #999999;
        .title {
            font-size: 28px;
        }
        .subtitle {
            margin-top: 20px;
            font-size: 24px;
        }
    }
    .zhangcheng {
        margin-top: 28px;
        font-weight: 500;
        color: #999999;
        .title {
            font-size: 28px;
        }
        .subtitle {
            margin-top: 20px;
            font-size: 24px;
        }
    }
}
</style>