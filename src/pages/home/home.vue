<template>
  <div class="home-container" :style="{ background: 'no-repeat url(' + backgroundImg + ')', backgroundSize:'100% 100%'}">
    <HomeHeader />

    <!-- 0未登录 -->
    <div class="placeholder-div" v-if="judgeShowPage == 0">
      <img class="background-img" :src="noLoginBgc" alt="">
      <div class="prompt">未登录用户</div>
      <div class="action" @click="onClickLogin">前往登录</div>
    </div>

    <!-- 1未认证 -->
    <div class="placeholder-div" v-else-if="judgeShowPage == 1">
      <img class="background-img" :src="noVerificationBgc" alt="">
      <div class="prompt">未实名认证用户</div>
      <div class="action" @click="onClickVerification">前往认证</div>
    </div>

    <!-- 2无会员卡 -->
    <div class="placeholder-div" v-else-if="judgeShowPage == 2">
      <img class="background-img" :src="noVipBgc" alt="">
      <div class="prompt">暂无会员卡</div>
      <div class="action" @click="onClickLogin">快加入海昌会员吧~</div>
    </div>

    <!-- 3有会员卡 -->
    <div v-else>
      <HomeSwiper :cardData="cardList" />
      <HomeCard title="领券中心" subTitle="领取更多优惠券" style="margin-top:20px" :bgc="centerBgc" type="center" />
      <HomeCard title="我的优惠券" subTitle="查看我的优惠券" style="margin-top:20px" :bgc="bagBgc" type="bag" />
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import pageData from '../../utils/mock/homeData'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCard from './components/HomeCard'
import { OSS_URL } from '@/utils/globalConfig'
import { directTo } from '@/utils/vapiDispatcher'
import request from '@/utils/network'

export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeCard
    },
    data() {
        return {
            noLoginBgc: OSS_URL + '/home/nologin.png',
            noVipBgc: OSS_URL + '/home/novip.png',
            noVerificationBgc: OSS_URL + '/home/noverification.png',
            backgroundImg: OSS_URL + '/home/home_bg.png',
            centerBgc: OSS_URL + '/home/center.png',
            bagBgc: OSS_URL + '/home/bag.png',
            ...pageData,
            // 0==未登录 1==未认证 2==无会员卡 3==有会员卡
            judgeShowPage: 0,
            cardList: []
        }
    },
    mounted() {
        const token = Taro.getStorageSync('wechat_token')
        const memberId = Taro.getStorageSync('member_id')
        if (!token.sessionToken) {
            this.judgeShowPage = 0
        } else if (!memberId) {
            this.judgeShowPage = 1
        } else if (memberId) {
            this.initData()
        }
    },
    methods: {
        async initData() {
            const res = await request({
                method: 'POST',
                url: '/card/auth/c/mbrCard/getCardsByMbrId',
                data: {
                    // 状态：0：未激活 1：启用 2：已禁用 3已过期
                    memberCardStatus: 1,
                    memberId: 1
                }
            })
            if (res.code == 0) {
                this.judgeShowPage = 3
                this.cardList = res.data.cardsByMbrIdResults
            } else {
                this.judgeShowPage = 2
                Taro.showToast({
                    title: res.message,
                    icon: 'none'
                })
            }
        },
        async getInterestList() {
            const res = await request({
                method: 'POST',
                url: '/interest/c/cardInterest/getList',
                data: {
                    cardId:''
                }
            })
            console.log(res)
        },
        onClickLogin() {
            directTo({
                url: '/pages/subPackages/authorization/authorization'
            })
        },
        onClickVerification() {
            directTo({
                url: '/pages/subPackages/realName/realName'
            })
        }
    }
}
</script>

<style lang="scss">
.home-container {
    height: 100vh;
    background-color: #178cf6;
    .custom-margin {
        margin: 20px 20px 0;
    }
    .placeholder-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        .background-img {
            margin: 0 auto;
        }
        .prompt {
            margin-top: 20px;
            font-size: 32px;
            font-weight: 600;
            color: #ffffff;
        }
        .action {
            margin-top: 20px;
            width: 230px;
            height: 62px;
            border-radius: 20px;
            border: 2px solid #ffffff;
            color: #fff;
            font-size: 36px;
            line-height: 62px;
            text-align: center;
        }
    }
}
</style>
