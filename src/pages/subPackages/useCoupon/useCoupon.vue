<template>
  <div class="useCoupon-container">
    <div class="one">
      <div class="code-info">
        <div class="title">可爱兔子毛绒公仔陪玩伴侣创意玩具</div>
        <div class="time">2022.3.10 12:00 - 2023.3.9 12:00</div>
        <div class="img">没图</div>
        <div class="code">核销码：0782739373920</div>
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
    name: 'UseCoupon'
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
        // background: ;
        .code-info {
            background-color: #fff;
            padding: 40px 30px 16px;
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
                font-size: 20px;
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