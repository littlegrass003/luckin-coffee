<template>
  <div class="interests-container">
    <div class="top">
      <InterestsHorizontal :listData="interestsData" @switchItem="onClikHorizontalItem" />
    </div>
    <div class="bottom">
      <InterestsList v-if="pageIndex == 0" :listData="couponCenterData" />
      <InterestsVip v-if="pageIndex == 1"/>
    </div>
  </div>
</template>

<script>
import InterestsHorizontal from './components/interestsHorizontal'
import InterestsList from './components/interestsList'
import InterestsVip from './components/interestsVip'
import pageData from '@/utils/mock/homeData'

export default {
    name: 'Interests',
    components: {
        InterestsHorizontal,
        InterestsList,
        InterestsVip
    },
    data() {
        return {
            ...pageData,
            pageIndex: 0
        }
    },
    methods: {
        onClikHorizontalItem(e) {
            this.pageIndex = e
        }
    }
}
</script>

<style lang="scss">
.interests-container {
    background: #f0f4f7;
    height: 100vh;
    .top {
        width: 100%;
        height: 190px;
        background-color: #fff;
    }
    .bottom {
        background: #f0f4f7;
        margin: 32px 32px 0;
    }
}
</style>