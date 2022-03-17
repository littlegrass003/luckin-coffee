<template>
  <div class="home-prompt">
    <div class="left">
      <img class="prompt" src="@/assets/image/home/home-prompt.png" alt="">
      <span>今日会员价大放送, 买一送一</span>
    </div>

    <img class="arrow" src="@/assets/image/home/home-right-arrow.png" alt="">
  </div>
</template>

<script>
export default {
    name: 'HomePrompt'
}
</script>

<style lang="scss">
.home-prompt {
    background-color: #f0f2fa;
    border-radius: 10px;
    height: 80px;
    display: flex;
    color: #acaeb8;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    color: #9b9da9;
    .left {
        font-size: 28px;
        // line-height: 28px;
        align-items: center;
        display: flex;
        .prompt {
            margin-right: 20px;
            width: 50px;
            height: 50px;
        }
    }
    .arrow {
        width: 40px;
        height: 40px;
    }
}
</style>