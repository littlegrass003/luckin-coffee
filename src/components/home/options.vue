<template>
  <div class="options">
    <!-- 横条 -->
    <div class="options-tips">
      <div class="options-tips-left">
        <AtIcon value='sketch' size='22' color='#F00'></AtIcon>
        <div style="margin-left:5px">luckin You ~ 跟幸运打个招呼</div>
      </div>
      <div>Lv4.小咕鹿</div>
    </div>

    <!-- 金刚区 -->
    <div class="options-kingkong">
      <!-- top -->
      <div class="options-kingkong-top">
        <div v-for="(item, index) in optionsData.top" :key="index">
          <div>
            <img class="img" :src="item.img" alt="">
          </div>
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
      <!-- bottom -->
      <div class="options-kingkong-bottom">
        <div v-for="(item, index) in optionsData.bottom" :key="index">
          <div>
            <img class="img" :src="item.img" alt="">
          </div>
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AtIcon } from 'taro-ui-vue'
import pageData from '../../utils/mock/homeData'
export default {
    components: { AtIcon },
    name: 'Options',
    data() {
        return {
            ...pageData
        }
    }
}
</script>

<style lang="scss">
.options {
    .options-tips {
        color: #fff;
        background-color: fff;
        padding: 20px 30px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        .options-tips-left {
            display: flex;
            align-items: center;
        }
    }
    .options-kingkong {
        padding: 20px;
        background-color: #fff;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        flex-direction: column;
        text-align: center;
        .options-kingkong-top {
            display: flex;
            justify-content: space-around;
            .img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                display: inline-block;
            }
        }

        .options-kingkong-bottom {
            margin-top: 30px;
            display: flex;
            justify-content: space-around;
            .img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                display: inline-block;
            }
        }
        .title {
            font-size: 24px;
            margin-top: 10px;
        }
        .desc {
            color: #999;
            font-size: 20px;
            margin-top: 10px;
        }
    }
}
</style>