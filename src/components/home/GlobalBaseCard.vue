<template>
  <div class="global-base-card">
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
    name: 'GlobalBaseCard',
    props: {
        title: {
            default: 'xxx',
            type: String
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.global-base-card {
  background-color: red;
  width: 100%;
  height: 200px;
}
</style>