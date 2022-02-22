<template>
  <div class="list">
    <AtTabs :current="current" scroll tabList={[ { title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }, { title: '标签页4' }, { title: '标签页5' }, { title: '标签页6' } ]} :onClick="handleClick">
      <AtTabsPane :current="current" :index="0">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current" :index="1">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current" :index="2">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current" :index="3">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current" :index="4">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current" :index="5">
        <view style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</view>
      </AtTabsPane>
    </AtTabs>
  </div>
</template>

<script>
import { AtTabs, AtTabsPane } from 'taro-ui-vue'
export default {
    name: 'List',
    components: {
        AtTabs,
        AtTabsPane
    },
    methods: {
        handleClick(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
.list {
}
</style>