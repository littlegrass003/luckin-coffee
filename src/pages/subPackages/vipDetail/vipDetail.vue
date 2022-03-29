<template>
  <div class="vipDetail-container">
    <div @click="gotoQuanyiDetail">前往权益详情</div>
  </div>
</template>

<script>
import { directTo } from '@/utils/vapiDispatcher'
export default {
    name: 'VipDetail',
    methods: {
        gotoQuanyiDetail() {
            directTo({
                url: '/pages/subPackages/interests/interests'
            })
        }
    }
}
</script>

<style lang="scss">
.vipDetail-container {
}
</style>