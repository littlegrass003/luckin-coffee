<template>
  <div class="cardDetail-container" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <div>
      <div class="card" :style="{ background: 'no-repeat url(' + cardImg + ')', backgroundSize:'100% 100%'}">
        <!-- 卡片 -->
        <img @click="onClickTransform" class="transform-img" src="@/assets/image/card/transform.png" alt="">
        <div class="title">海豚卡</div>
        <div class="card-number">1141 5678 9022 3277</div>
        <div class="card-info">
          <div class="card-info-left">
            <div class="card-prompt1">VALID</div>
            <div class="card-prompt2">THRU</div>
          </div>
          <div class="card-time">2030/3/9</div>
        </div>
      </div>
    </div>

    <!-- 权益 -->
    <div class="quanyi">
      <AtGrid :data='cardDetail' :hasBorder="false" :columnNum="4" :onClick="onClickGridItem" />
    </div>

    <!-- 关联人信息 -->
    <div class="person-info">
      <div class="person-info-prompt" @click="onClickPersonInfo">
        <span>关联人信息</span>
        <img v-if="isShowPersonInfo" class="person-info-arrow" src="@/assets/image/global/arrow_shang.png" alt="">
        <img v-else class="person-info-arrow" src="@/assets/image/global/arrow_xia.png" alt="">
      </div>
      <div class="person-info-list" v-if="isShowPersonInfo">
        <PersonCard :teamsData="teamsData" />
      </div>
    </div>

    <!-- 会员卡介绍说明 -->
    <div class="shuoming">
      <div class="title">会员卡介绍说明</div>
      <div class="subtitle">会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明会员卡介绍说明</div>
    </div>

    <!-- 会员章程 -->
    <div class="zhangcheng">
      <div class="title">会员章程</div>
      <div class="subtitle">会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程会员章程</div>
    </div>
  </div>
</template>

<script>
import pageData from '@/utils/mock/homeData'
import { AtGrid } from 'taro-ui-vue'
import PersonCard from './components/personCard.vue'
import { directTo } from '@/utils/vapiDispatcher'
import { OSS_URL } from '@/utils/globalConfig'
export default {
    name: 'CardDetail',
    components: {
        AtGrid,
        PersonCard
    },
    data() {
        return {
            isShowPersonInfo: false,
            isTransform: false,
            backgroundImg: OSS_URL + '/card/cardDetail_bg.png',
            cardImg: OSS_URL + '/card/card-detail-bg1.png',
            ...pageData
        }
    },
    methods: {
        onClickTransform() {},
        onClickPersonInfo() {
            this.isShowPersonInfo = !this.isShowPersonInfo
        },
        onClickGridItem(item, index) {
            console.log(item)
            console.log(index)
            directTo({
                url: '/pages/subPackages/interests/interests'
            })
        }
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
    .person-info {
        margin-top: 10px;
        background-color: #fff;
        border-radius: 20px;
        font-size: 24px;
        font-weight: 500;
        padding: 16px 0;
        .person-info-prompt {
            display: flex;
            align-items: center;
            justify-content: center;
            .person-info-arrow {
                margin-left: 8px;
                width: 14px;
                height: 8px;
            }
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
    .card-number {
        margin-top: 140px;
        color: #fff;
        font-size: 24px;
    }
    .card-info {
        margin-top: 20px;
        display: flex;
        .card-prompt1 {
            color: #cfcfcf;
            font-size: 12px;
        }
        .card-prompt2 {
            color: #cfcfcf;
            font-size: 12px;
        }
        .card-time {
            margin-left: 20px;
            color: #fff;
            font-size: 24px;
            text-align: center;
        }
    }
}
</style>