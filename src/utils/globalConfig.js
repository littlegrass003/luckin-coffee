
import Taro from '@tarojs/taro'

const systemInfo = Taro.getSystemInfoSync()
// 状态栏高度
export const statusBarHeight = Number(systemInfo.statusBarHeight)
// 获取胶囊按钮位置
const menu = Taro.getMenuButtonBoundingClientRect()
//导航栏高度
export const navBarHeight = menu.height + (menu.top - statusBarHeight) * 2
//状态栏加导航栏高度
export const navStatusBarHeight = statusBarHeight + menu.height + (menu.top - statusBarHeight) * 2

// 有导航条 没有tabbar的可视区域高度
export const viewingArea = Taro.getSystemInfoSync().windowHeight

console.log('状态栏高度', statusBarHeight)
console.log('导航栏高度', navBarHeight)
console.log('状态栏加导航栏高度', navStatusBarHeight)
console.log('有导航条、没有tabbar的可视区域高度', viewingArea)
