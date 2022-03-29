<template>
  <div class="usingRecord-container">
    <div class="top" id="top-id">
      <div :class="[isActive ? 'active-button' : 'custom-button']" @click="onClickChooseButton(true)">已使用</div>
      <div :class="[!isActive ? 'active-button' : 'custom-button']" @click="onClickChooseButton(false)">已过期</div>
    </div>
    <div class="content" :style="style">
      <div v-if="isActive">
        <div v-for="(item,index) in 20" :key="index">
          <UsingRecordCard title="using" />
        </div>
      </div>
      <div v-else>
        <div v-for="(item,index) in 20" :key="index">
          <UsingRecordCard title="timeout" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import UsingRecordCard from './components/UsingRecordCard'
export default {
    name: 'UsingRecord',
    components: {
        UsingRecordCard
    },
    data() {
        return {
            isActive: true,
            topHeight: 0
        }
    },
    computed: {
        style() {
            let style
            style = `margin-top:${this.topHeight}px`
            return style
        }
    },
    mounted() {
        // 获取不同手机top的高度
        setTimeout(() => {
            const query = Taro.createSelectorQuery()
            query
                .select('#top-id')
                .boundingClientRect((rect) => {
                    console.log(rect)
                    this.topHeight = rect.height
                })
                .exec()
        }, 100)
    },
    methods: {
        onClickChooseButton(e) {
            this.isActive = e
        }
    }
}
</script>

<style lang="scss">
.usingRecord-container {
    background-color: #f2f2f2;
    .top {
        display: flex;
        justify-content: space-between;
        background-color: orange;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        .custom-button {
            flex: 1;
            margin: 20px 30px;
            padding: 0px 30px;
            line-height: 60px;
            text-align: center;
            border-radius: 30px;
            background-color: #f2f2f2;
            color: #333;
        }
        .active-button {
            flex: 1;
            margin: 20px 30px;
            padding: 0px 30px;
            line-height: 60px;
            text-align: center;
            border-radius: 30px;
            background-color: red;
            color: #fff;
        }
    }
}
</style>
