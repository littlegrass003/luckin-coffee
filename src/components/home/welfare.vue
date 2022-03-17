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
    border-radius: 20px;
    background-color: #fff;
    padding: 30px;
    .welfare-prompt {
        height: 40px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 28px;
        }
        .right-title {
            font-size: 20px;
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
            padding: 30px 100px 30px 30px;
            border-radius: 10px;
            height: 100%;
            background-color: pink;
            margin-right: 10px;
            .title {
                font-size: 28px;
            }
            .desc {
                margin-top: 10px;
                font-size: 20px;
                color: #a81f24;
            }
        }
    }
}
</style>