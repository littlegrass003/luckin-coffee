<template>
  <div class="useInterests-container">
    <div class="one">
      <div class="code-info">
        <div class="title">生日月礼物</div>
        <div class="time">2022.3.10 12:00 - 2023.3.9 12:00</div>
        <canvas style="width:220px; height:220px; background:#fff;" canvas-id="mycanvas" />
        <div class="code">核销码：0782739373920</div>
      </div>
      <div class="card">
        <div class="title">关联会员卡信息</div>
        <div class="card-content">
          <div class="left">
            <img class="left-img" src="@/assets/image/tempImg/coupon_small.png" alt="">
          </div>
          <div class="right">
            <div class="right-title">海豚卡</div>
            <div>
              <div>1141 5678 9022 3277</div>
              <div>2019/3/8-2020/3/9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QR from '@/utils/qrcode'
import Taro from '@tarojs/taro'
export default {
    name: 'UseInterests',
    data() {
        return {
            imagePath: ''
        }
    },
    mounted() {
        this.createQrCode('wxapp-qrcode', 'mycanvas', 220, 220)
    },
    methods: {
        createQrCode: function (content, canvasId, cavW, cavH) {
            //调用插件中的draw方法，绘制二维码图片
            //this.canvasToTempImage 为绘制完成的回调函数，可根据自己的业务添加
            QR.api.draw(content, canvasId, cavW, cavH, this, this.canvasToTempImage)
        },

        //获取临时缓存图片路径，存入data中
        canvasToTempImage: function (canvasId) {
            Taro.canvasToTempFilePath({
                canvasId, // 这里canvasId即之前创建的canvas-id
                success: function (res) {
                    let tempFilePath = res.tempFilePath
                    this.imagePath = tempFilePath
                },
                fail: function (res) {
                    console.log(res)
                }
            })
        }
    }
}
</script>

<style lang="scss">
.useInterests-container {
    padding: 28px 32px 124px;
    background: #f0f4f7;
    border-radius: 20px;
    .one {
        padding: 32px 60px;
        border-radius: 20px;
        height: calc(100vh - 160px);
        background: rgba(255, 255, 255, 0.4);
        .code-info {
            display: flex;
            flex-direction: column;
            align-items: center;
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
                font-size: 24px;
                font-weight: 500;
                color: #999999;
            }

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .code {
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
        }
    }
}
</style>