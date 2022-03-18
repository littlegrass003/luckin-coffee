<template>
  <div class="mine-kingkong">
    <GlobalBaseCard>
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
    </GlobalBaseCard>
  </div>
</template>

<script>
import GlobalBaseCard from '@/components/GlobalBaseCard'
import pageData from '@/utils/mock/mineData.js'
export default {
    name: 'MineKingkong',
    components: {
        GlobalBaseCard
    },
    data() {
        return {
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.mine-kingkong {
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