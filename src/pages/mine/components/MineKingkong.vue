<template>
  <div class="home-kingkong">
    <GlobalBaseCard2>
      <template #content>
        <div class="content-bottom">
          <div v-for="(item, index) in kingkongData" :key="index" class="kingkong">
            <div class="item">
              <img class="img" :src="item.img" alt="">
              <div class="title">{{item.title}}</div>
            </div>
          </div>
        </div>
      </template>
    </GlobalBaseCard2>
  </div>
</template>

<script>
import GlobalBaseCard2 from '@/components/GlobalBaseCard2'
import pageData from '@/utils/mock/homeData'
export default {
    name: 'HomeKingkong',
    components: {
        GlobalBaseCard2
    },
    data() {
        return {
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.home-kingkong {
    .content-bottom {
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
                    width: 60px;
                    height: 60px;
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