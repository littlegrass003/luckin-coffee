<template>
  <view class="mine-container">
        <BaseCard :data="data" />
  </view>
</template>

<script>
    import BaseCard from '@/components/BaseCard'

export default {
        components: {
            BaseCard
        },
  data() {return {
                data: [
                    {
                        id: 1,
                        title: 'MINE-Jump'
                    }
                ]
            }
  },
};
</script>


<style lang="scss">
</style>
