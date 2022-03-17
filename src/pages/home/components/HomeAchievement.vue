<template>
  <div class="home-achievement">
    <div class="header">
      <div class="prompt">会员成就</div>
      <div class="number-container">
        <span class="number">29999</span>
        <span class="numberText">积分</span>
      </div>
    </div>
    <div class="bottom">
      <div v-for="(item, index) in optionsData.bottom" :key="index" class="kingkong">
        <div class="item">
          <img class="img" :src="item.img" alt="">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageData from '@/utils/mock/homeData'
export default {
    name: 'HomeAchievement',
    data() {
        return {
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.home-achievement {
    padding: 30px 50px;
    background-color: #fff;
    .header {
        .prompt {
            font-size: 24px;
            color: #9f9f9f;
        }
        .number-container {
            display: flex;
            align-items: center;
            .number {
                color: #393939;
                font-size: 40px;
                font-weight: 500;
                margin-right: 10px;
            }
            .numberText {
                font-size: 24px;
            }
        }
    }
    .bottom {
        border-radius: 8px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        .kingkong {
            .item {
                width: calc(100vw / 5);
                display: flex;
                flex-direction: column;
                align-items: center;
                .img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                }
                .title {
                    margin-top: 10px;
                    font-size: 24px;
                }
                margin-bottom: 20px;
            }
        }
    }
}
</style>
