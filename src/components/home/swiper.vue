<template>
  <div class="swiper">
    <swiper class="swiper" indicatorColor="#999" indicatorActiveColor="#333" current="1" :duration="500" :interval="1000" :circular="true" :autoplay="true" :indicator-dots="true">
      <swiper-item v-for="(item, index) in data" :key="index">
        <image :src="item" class="swiper-image" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'Swiper',
    props: {
        data: {
            type: Array,
            default: {}
        }
    }
}
</script>

<style lang="scss">
.swiper {
    height: 200px;
    .swiper-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>