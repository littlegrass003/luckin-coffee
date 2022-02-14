export const protocol = () => {
    const protocol = window.location.protocol
    if (/^http/.test(protocol)) {
        return 'omp'
    }
    return 'microapp'
}

// 根据业务需求配置相关环境地址
export const home =
    protocol() === 'omp'
        ? process.env.NODE_ENV === 'development'
            ? '10.222.22.22:8080/'
            : process.env.xxxx
        : 'com.company.microapp.mobuleName'

export const host = (
    microHost = 'com.company.microapp.taro',
    host = process.env.VUE_APP_TARO_BASE_URL
) => (protocol() === 'omp' ? host : microHost)
