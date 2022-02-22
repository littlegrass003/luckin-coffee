<template>
  <div class="options">
    <!-- 横条 -->
    <div class="options-tips">
      <div class="options-tips-left">
        <AtIcon value='sketch' size='16' color='#F00'></AtIcon>
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
        padding: 10px 15px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        .options-tips-left {
            display: flex;
            align-items: center;
        }
    }
    .options-kingkong {
        padding: 10px;
        background-color: #fff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        .options-kingkong-top {
            display: flex;
            justify-content: space-around;
            .img {
                width: 40px;
                height: 40px;
                object-fit: cover;
                display: inline-block;
            }
        }

        .options-kingkong-bottom {
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
            .img {
                width: 25px;
                height: 25px;
                object-fit: cover;
                display: inline-block;
            }
        }
        .title {
            font-size: 12px;
            margin-top: 5px;
        }
        .desc {
            color: #999;
            font-size: 10px;
            margin-top: 5px;
        }
    }
}
</style>