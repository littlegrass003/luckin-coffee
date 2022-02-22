<template>
  <div class="welfare">
    <div class="welfare-prompt">
      <span class="left-title">福利中心</span>
      <div class="right-title">查看全部</div>
    </div>

    <div class="welfare-sliding">
      <div class="item" v-for="(item, index) in 10" :key="index">
        <span class="title">#喝咖啡挑战</span>
        <span class="desc">再喝一杯达成</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Welfare'
}
</script>

<style lang="scss">
.welfare {
    border-radius: 10px;
    background-color: #fff;
    padding: 15px;
    .welfare-prompt {
        height: 20px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 14px;
        }
        .right-title {
            font-size: 10px;
            color: #999;
        }
    }
    .welfare-sliding {
        width: 100%;
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        .item {
            display: flex;
            flex-direction: column;
            padding: 15px 50px 15px 15px;
            border-radius: 5px;
            height: 100%;
            background-color: pink;
            margin-right: 5px;
            .title {
                font-size: 14px;
            }
            .desc {
                margin-top: 5px;
                font-size: 10px;
                color: #a81f24;
            }
        }
    }
}
</style>