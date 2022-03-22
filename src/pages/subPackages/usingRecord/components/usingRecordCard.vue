<template>
  <div class="usingRecordCard-container">
    {{title}}
    {{title}}
  </div>
</template>

<script>
export default {
    name: 'UsingRecordCard',
    props: {
        title: String,
        default: ''
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss">
.usingRecordCard-container {
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
    background-color: blueviolet;
}
</style>