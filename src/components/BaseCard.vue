<template>
    <view>
        <view
            class="base-card"
            v-for="(item, index) in data"
            :key="index"
            @tap="itemClick(item, index)"
        >
            <view>{{ item.node_id }}</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'BaseCard',
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
            itemClick(item, index) {
                this.$emit('itemClick', item.id)
            }
        }
    }
</script>

<style lang="scss">
    .base-card {
        border-radius: 60px;
        padding: 10px 30px;
        border: 2px solid orange;
        background: orange;
        display: flex;
        color: #fff;
        font-size: 32px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 20px;
    }
</style>
