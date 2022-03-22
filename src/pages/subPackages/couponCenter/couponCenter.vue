<template>
  <div class="couponCenter-container">
    <div class="top">
      <div :class="[isActive==1 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(1)">10:00</div>
      <div :class="[isActive==2 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(2)">14:00</div>
      <div :class="[isActive==3 ? 'active-button' : 'custom-button']" @click="onClickChooseButton(3)">20:00</div>
    </div>
    <div class="coupon-content">
      <div v-if="isActive==1">
        <CouponCenterCard title="10:00" />
      </div>
      <div v-else-if="isActive==2">
        <CouponCenterCard title="14:00" />
      </div>
      <div v-else>
        <CouponCenterCard title="20:00" />
      </div>
    </div>
  </div>
</template>

<script>
import CouponCenterCard from './components/couponCenterCard.vue'
export default {
    name: 'CouponCenter',
    components: {
        CouponCenterCard
    },
    data() {
        return {
            isActive: 1
        }
    },
    methods: {
        onClickChooseButton(e) {
            this.isActive = e
        }
    }
}
</script>

<style lang="scss">
.couponCenter-container {
    background-color: #f2f2f2;
    margin: 30px;
    .top {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        .custom-button {
            flex: 1;
            text-align: center;
            padding: 10px 30px;
            border-radius: 30px;
            background-color: #f2f2f2;
            color: #333;
        }
        .active-button {
            flex: 1;
            padding: 10px 30px;
            text-align: center;
            border-radius: 30px;
            background-color: red;
            color: #fff;
        }
    }
}
</style>