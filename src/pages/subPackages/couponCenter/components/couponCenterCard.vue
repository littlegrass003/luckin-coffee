<template>
  <div class="couponCenterCard-container">
    <ul class="coupon-ul">
      <li class="coupon-li" v-for="(item,index) in 10" :key="index">领取{{title}}的卷</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CouponCenterCard-container',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss">
.couponCenterCard-container {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    .coupon-ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        overflow-x: scroll;
        .coupon-li {
            color: white;
            width: 500px;
            align-items: center;
            height: 100%;
            margin-right: 20px;
            background-color: red;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
}
</style>