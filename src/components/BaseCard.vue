<template>
  <view>
    <view class="base-card">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
        data: {}
    },
    methods: {}
}
</script>

<style lang="scss">
.base-card {
    border-radius: 15px;
    background: #fff;
}
</style>
