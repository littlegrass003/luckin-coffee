<template>
  <div class="interests-container">
    <div class="top">
      <InterestsHorizontal :listData="interestsData" />
    </div>
    <div class="bottom">
      <InterestsList :listData="couponCenterData" />
    </div>
  </div>
</template>

<script>
import InterestsHorizontal from './components/interestsHorizontal'
import InterestsList from './components/InterestsList'
import pageData from '@/utils/mock/homeData'

export default {
  name:"Interests",
      components: {
        InterestsHorizontal,
        InterestsList
    },
    data() {
        return {
            ...pageData,
        }
    },
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