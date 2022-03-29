<template>
  <div>
    <div class="interestsHorizontal-container" v-if="judgeLength > 5">
      <div :class="[judgeLength > 5 ? 'shao-content' : 'more-content']" v-for="(item, index) in listData" :key="index">
        <img class="img-class" :src="item.imgUrl" alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <div class="interestsHorizontal-container" v-else-if="judgeLength == 5 " style="justify-content: space-around">
      <div :class="[judgeLength > 5 ? 'shao-content' : 'more-content']" v-for="(item, index) in listData" :key="index" @click="onClickItem(item)">
        <img class="img-class" :src="item.imgUrl" alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <div class="interestsHorizontal-container" v-else>
      <div :class="[judgeLength > 5 ? 'shao-content' : 'more-content']" v-for="(item, index) in listData" :key="index">
        <img class="img-class" :src="item.imgUrl" alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InterestsHorizontal',
    props: {
        listData: {
            type: Array,
            default: {}
        }
    },
    data() {
        return {
            judgeLength: 5
        }
    },
    mounted() {
        this.judgeLength = this.listData.length
        console.log(this.listData)
    },
    methods: {
        onClickItem(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
.interestsHorizontal-container {
    padding: 40px 36px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
    .shao-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 24px;
        .img-class {
            width: 68px;
            height: 68px;
            border-radius: 50%;
        }
        .title {
            margin-top: 20px;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.5);
        }
    }

    .shao-content:last-child {
        padding-right: 36px;
    }

    .more-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 24px;
        .img-class {
            width: 68px;
            height: 68px;
            border-radius: 50%;
        }
        .title {
            margin-top: 20px;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.5);
        }
    }

    .more-content:last-child {
        margin-right: 0px;
    }
}
</style>