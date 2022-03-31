<template>
  <div class="person-card-container">
    <div v-for="(item, index) in teamsData" :key="index" class="row">
      <div class="name">{{item.name}}</div>
      <div class="row-item">
        <div>手机</div>
        <div>{{item.phone}}</div>
      </div>
      <div class="row-item">
        <div>身份证</div>
        <div>{{item.idCard}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PersonCard',
    props: {
        teamsData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.person-card-container {
    padding: 30px;
    .row {
        padding: 10px 0;
        border-bottom: 2px dashed #e3e3e3;
        .name {
            font-size: 24px;
            color: #000;
        }
        .row-item {
          margin-top: 5px;
            color: #999999;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>