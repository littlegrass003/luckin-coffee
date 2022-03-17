<template>
  <div class="advertising">
    <img class="advertising-img" :src="imgData" alt="">
  </div>
</template>

<script>
export default {
    name: 'advertising',
    props: {
        imgData: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.advertising {
    height: 200px;
    .advertising-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>