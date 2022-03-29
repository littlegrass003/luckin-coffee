<template>
  <div class="useCoupon-container">
    <div class="one">
      <div class="code-info">
        <div class="title">可爱兔子毛绒公仔陪玩伴侣创意玩具</div>
        <div class="time">2022.3.10 12:00 - 2023.3.9 12:00</div>
        <div class="img">没图</div>
        <div class="code">核销码：0782739373920</div>
      </div>
      <div class="card">
        <div class="title">关联会员卡信息</div>
        <div class="card-content">
          <div class="left">
            <img class="left-img" src="@/assets/image/tempImg/smallcard.png" alt="">
          </div>
          <div class="right">
            <div class="right-title">海豚卡</div>
            <div>
              <div>1141 5678 9022 3277</div>
              <div>2019/3/8-2020/3/9</div>
            </div>
          </div>
        </div>
        <div class="person-class" v-for="(item,index) in personInfo" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="card-num">{{item.cardNum}}</div>
        </div>
      </div>
      <div class="instructions">
        <div class="title">优惠券使用说明</div>
        <div class="subtitle">优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本优惠券使用说明文本</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UseCoupon',
    data() {
        return {
            personInfo: [
                {
                    name: 'qwer',
                    cardNum: 211282196104057836
                },
                {
                    name: '222',
                    cardNum: 211282196104057836
                },
                {
                    name: '555',
                    cardNum: 211282196104057836
                },
                {
                    name: '1111',
                    cardNum: 211282196104057836
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.useCoupon-container {
    padding: 28px 32px 124px;
    background: #f0f4f7;
    border-radius: 20px;
    .one {
        padding: 32px 60px;
        border-radius: 20px;
        height: calc(100vh - 160px);
        background: rgba(255, 255, 255, 0.4);
        .code-info {
            background-color: #fff;
            padding: 40px 30px 30px;
            border-radius: 20px;
            text-align: center;
            .title {
                font-size: 28px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #000000;
            }
            .time {
                margin-top: 12px;
                margin-bottom: 56px;
                font-size: 24px;
                font-weight: 500;
                color: #999999;
            }
            .code {
                margin-top: 66px;
                font-size: 28px;
                font-weight: 500;
                color: #999999;
            }
        }

        .card {
          border-radius: 20px;
            background-color: #fff;
            margin-top: 28px;
            padding: 14px 20px 16px;
            display: flex;
            flex-direction: column;
            text-align: center;
            .title {
                font-size: 24px;
                font-weight: 500;
                color: #080808;
            }
            .card-content {
                margin-top: 16px;
                display: flex;
                border-bottom: 1px dashed #e3e3e3;
                padding-bottom: 16px;
                .left {
                    width: 240px;
                    height: 140px;
                    margin-right: 48px;
                    .left-img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .right {
                    font-size: 24px;
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                    .right-title {
                        margin-bottom: 40px;
                    }
                }
            }
            .person-class{
              margin-top: 12px;
              display: flex;
              justify-content: space-between;
              font-size: 24px;
              color: #999999;
            }
        }
        .instructions {
            margin-top: 30px;
            .title {
                font-size: 28px;
                font-weight: 500;
                color: #999999;
            }
            .subtitle {
                margin-top: 14px;
                font-size: 24px;
                font-weight: 400;
                color: #999999;
            }
        }
    }
}
</style>