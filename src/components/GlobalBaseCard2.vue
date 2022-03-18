<template>
  <div class="global-base-card2">
    <div class="header"  v-if="title.length!=0">
      <div class="title">{{title}}</div>
      <div class="sub-container" v-if="subTitle.length!=0">
        <span class="sub-title">{{subTitle}}</span>
        <img class="arrow" src="@/assets/image/home/home-right-arrow.png" alt="">
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
    name: 'GlobalBaseCard2',
    props: {
        title: {
            default: '',
            type: String
        },
        subTitle: {
            default: '',
            type: String
        }
    },
    methods: {}
}
</script>

<style lang="scss">
.global-base-card2 {
    background-color: red;
    padding: 30px 30px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px #f6f6f6;
    background-color: #fff;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 24px;
            color: #afafaf;
        }
        .sub-container {
            display: flex;
            .sub-title {
                font-size: 26px;
                color: #9f9f9f;
                margin-right: 10px;
            }
            .arrow {
                margin-top: 5px;
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>