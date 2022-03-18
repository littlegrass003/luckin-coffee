<template>
  <div class="mine-choose">
    <ul class="ul-container">
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
      <li><img src="../../../assets/image/home/icon.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MineChoose'
}
</script>

<style lang="scss">
.mine-choose {
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;

    .ul-container {
        display: flex;
        flex-wrap: wrap;
        li {
            flex: 0 0 16.6%;
            height: 100px;
        }
        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>