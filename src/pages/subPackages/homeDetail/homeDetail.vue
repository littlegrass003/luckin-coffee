<template>
  <view class="testPage-container">
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view>传递过来的id为==>{{ showID }}</view>
    <view @tap="clickBack">点我返回</view>
  </view>
</template>

<script>
import request from '@/utils/network'
import { directBack } from '@/utils/vapiDispatcher'
import { getCurrentInstance } from '@tarojs/taro'
export default {
    data() {
        return {
            showID: 0
        }
    },
    mounted() {
        this.showID = getCurrentInstance().router.params.id
        this.initData()
    },
    methods: {
        async initData() {
            const res = await request({
                method: 'POST',
                url: '/cardCoupon/auth/getCardInfoListOfPae',
                data: { jsCode: code }
            })
            console.log(res)
        },
        clickBack() {
            directBack(-1)
        }
    }
}
</script>

<style lang="scss"></style>
