<template>
  <div class="mine-header">
    <div class="navigation"></div>
    <div class="mine-header-content">
      <div class="mine-left">
        <div class="mine-left-top">
          <div class="mine-left-top-top">
            <img class="mine-top-icon" src="../../../assets/image/home/icon.png" alt="">
            <div>
              <div class="mine-top-name">Erich-Zhu</div>
              <img class="mine-top-gender" src="../../../assets/image/home/icon.png" alt="">
            </div>
          </div>
          <div class="mine-left-top-bottom">
            <div class="mine-left-top-bottom-level">LV.5</div>
            <div class="mine-left-top-bottom-img-container">
              <img class="mine-left-top-bottom-img" src="../../../assets/image/home/icon.png" alt="">
              <img class="mine-left-top-bottom-img" src="../../../assets/image/home/icon.png" alt="">
              <img class="mine-left-top-bottom-img" src="../../../assets/image/home/icon.png" alt="">
            </div>
          </div>
        </div>
        <div class="mine-left-bottom">
          <div class="mine-left-bottom-button">
            <span>升级会员 享好礼</span>
          </div>
        </div>
      </div>
      <div class="mine-right">
        <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#333" current="1" :duration="500" :interval="2000" :circular="true" :autoplay="true" :indicator-dots="true">
          <swiper-item class="swiper-item" v-for="(item, index) in swiperData" :key="index">
            <image :src="item" class="swiper-image" />
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MineHeader',
    props: {
        swiperData: {
            type: Array,
            default: {}
        }
    }
}
</script>

<style lang="scss">
.mine-header {
    width: 100%;
    padding: 0 20px;
    .navigation {
        width: 100%;
        height: 160px;
    }
    .mine-header-content {
        display: flex;
        .mine-left {
            flex: 0.4;
            display: flex;
            flex-direction: column;
            margin-right: 10px;
            .mine-left-top {
                flex: 0.6;
                .mine-left-top-top {
                    display: flex;
                    .mine-top-icon {
                        margin-right: 20px;
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                    .mine-top-gender {
                        margin-top: 20px;
                        width: 20px;
                        height: 30px;
                        object-fit: cover;
                    }
                }
                .mine-left-top-bottom {
                    margin-top: 20px;
                    display: flex;
                    .mine-left-top-bottom-level {
                        flex: 0.4;
                        border-radius: 40px;
                        background-color: #00b2cd;
                        color: white;
                        text-align: center;
                        padding: 2px 0;
                        font-size: 24px;
                    }
                    .mine-left-top-bottom-img-container {
                        flex: 0.6;
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        .mine-left-top-bottom-img {
                            width: 40px;
                            height: 40px;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                }
            }
            .mine-left-bottom {
                flex: 0.4;
                margin-top: 30px;
                .mine-left-bottom-button {
                    width: 100%;
                    border-radius: 40px;
                    background: linear-gradient(#00b2cd, #55d0ee);
                    color: white;
                    text-align: center;
                    padding: 15px 0;
                    font-size: 24px;
                }
            }
        }
        .mine-right {
            flex: 0.6;
            .swiper {
                margin-right: 40px;
                border-radius: 25px;
                .swiper-item {
                    border-radius: 20px;
                    .swiper-image {
                        border-radius: 20px;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>