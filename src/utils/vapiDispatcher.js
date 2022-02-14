import Taro from '@tarojs/taro'
import xengine from '@zkty-team/x-engine-core'
import { host } from './protocol'

export function directTo(obj) {
    // isHybrid == true  为手机端(ios/android)
    // isHybrid == false 为chrome的手机模式
    if (xengine.isHybrid()) {
        xengine.api(
            'com.zkty.jsi.direct',
            'push',
            {
                scheme: protocol(),
                host,
                pathname: '',
                fragment: obj.url,
                params: {
                    hideNavbar: true
                }
            },
            function(res) {}
        )
    } else {
        Taro.navigateTo({
            ...obj
        })
    }
}

export function directBack(obj) {
    // isHybrid == true  为手机端(ios/android)
    // isHybrid == false 为chrome的手机模式
    if (xengine.isHybrid()) {
        xengine.api(
            'com.zkty.jsi.direct',
            'back',
            {
                scheme: '',
                fragment: JSON.stringify(obj)
            },
            function(res) {}
        )
    } else {
        Taro.navigateBack({
            ...obj
        })
    }
}

const protocol = () => {
    const protocol = window.location.protocol
    if (/^http/.test(protocol)) {
        return 'omp'
    }
    return 'microapp'
}
