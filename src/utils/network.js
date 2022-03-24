import Taro from '@tarojs/taro'

// 错误定义(根据业务自定义)
const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}


// 获取基础域名（根据业务自定义）
const getBaseUrl = (url) => {
    // let BASE_URL = "http://192.168.99.15:9090"
    let BASE_URL = "https://dev.pzone.spacenx.cn"
    // if (process.env.NODE_ENV === 'development') {
    //     if (url.includes('/repos/NervJS/')) {
    //         BASE_URL = '' //填写你的请求域名
    //     } else if (url.includes('/repos/NervJS/')) {
    //         BASE_URL = '' //填写你的请求域名
    //     }
    // } else {
    //     if (url.includes('/repos/NervJS/')) {
    //         BASE_URL = '' //填写你的请求域名
    //     } else if (url.includes('/repos/NervJS/')) {
    //         BASE_URL = '' //填写你的请求域名
    //     }
    // }
    return BASE_URL
}

// 拦截器（根据业务自定义）
const interceptor = (chain) => {
    const requestParams = chain.requestParams
    return chain.proceed(requestParams).then((res) => {
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            return Promise.reject('请求资源不存在')
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            return Promise.reject('服务端出现问题')
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            return Promise.reject('无权访问')
        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
            return Promise.reject('需要鉴权')
        } else {
            return res.data
        }
    })
}

// 添加拦截器
Taro.addInterceptor(interceptor)
Taro.addInterceptor(Taro.interceptors.logInterceptor)

// 请求(根据业务自定义)
const request = ({ url, data = {}, method = 'get', header = {} }) => {
    const BASE_URL = getBaseUrl(url)
    const handleHeader = {
        'content-type': 'application/json',
        ...header
    }
    return new Promise((resolve, reject) => {
        const options = {
            url: `${BASE_URL}${url}`,
            data,
            method,
            header: handleHeader
        }
        Taro.request({
            ...options,
            success(result) {
                resolve(result.data)
                // const { errcode, data: res, msg } = result
                // if (errcode !== 1) {
                //     // console.log(msg)
                // } else {
                //     resolve(res)
                // }
            },
            fail(e) {
                console.log('网络异常')
                reject(e)
            }
        })
    })
}
export default request
