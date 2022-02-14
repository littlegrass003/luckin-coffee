<template>
    <view class="home">
        <AtNoticebar marquee> 欢迎参考模板项目 </AtNoticebar>
        <AtButton style="margin-top:20px" type="primary" :on-click="handleClick"
            >点我出提示</AtButton
        >
        <AtToast :is-opened="show" :text="msg" :on-close="handleClose"></AtToast>
        <AtButton style="margin-top:10px" type="primary" :on-click="baseCardItemClick"
            >跳转下一页</AtButton
        >
        <view class="list" v-if="platform != 'weapp'">
            <view class="prompt">以下是请求回来的数据</view>
            <BaseCard class="base-card-list" :data="baseCardData" @itemClick="baseCardItemClick" />
        </view>
    </view>
</template>

<script>
    // 按需引入, 更小的应用体积
    import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue'
    import BaseCard from '@/components/BaseCard'
    import 'taro-ui-vue/dist/style/components/button.scss'
    import 'taro-ui-vue/dist/style/components/toast.scss'
    import 'taro-ui-vue/dist/style/components/noticebar.scss'
    import request from '@/utils/network'
    import { directTo } from '@/utils/vapiDispatcher'
    export default {
        components: {
            AtButton,
            AtToast,
            AtNoticebar,
            BaseCard
        },
        data() {
            return {
                platform: '',
                msg: '我被点击了',
                show: false,
                baseCardData: []
            }
        },
        mounted() {
            this.platform = process.env.TARO_ENV
            this.initData()
        },
        methods: {
            async initData() {
                if (process.env.TARO_ENV != 'weapp') {
                    const res = await request({
                        url: '/taro/issues',
                        data: { per_page: 1, page: 2 }
                    })
                    this.baseCardData = res[0].labels
                }
            },
            handleClick() {
                this.show = true
            },
            baseCardItemClick() {
                directTo({
                    url: '/pages/subPackages/homeDetail/homeDetail?id=2222'
                })
            },
            handleClose() {
                this.show = false
            }
        }
    }
</script>

<style lang="scss">
    .home {
        padding: 30px;
        background-color: #f2f2f2;
        height: 100vh;
        .list {
            margin-top: 20px;
            .prompt {
                font-size: 28px;
                margin-bottom: 10px;
            }
        }
    }
</style>
