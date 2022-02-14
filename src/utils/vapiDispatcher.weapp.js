import Taro from '@tarojs/taro'

export function directTo(obj) {
    Taro.navigateTo({
        ...obj
    })
}

export function directBack(obj) {
    Taro.navigateBack({
        ...obj
    })
}
