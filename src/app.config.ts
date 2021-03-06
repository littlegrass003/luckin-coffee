export default {
    pages: ['pages/home/home', 'pages/mine/mine'],
    subPackages: [
        {
            root: 'pages/subPackages',
            pages: ['homeDetail/homeDetail', 'mineDetail/mineDetail']
        }
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        //未选中字体颜色
        color: '#a9b7b7',
        //选中字体颜色
        selectedColor: '#11cd6e',
        // tabbar背景色
        backgroundColor: '#fff',
        // tabbar 上边框的颜色， 仅支持 black / white
        borderStyle: 'black',
        list: [
            {
                pagePath: 'pages/home/home',
                iconPath: 'assets/image/tabbar/home-nor.png',
                selectedIconPath: 'assets/image/tabbar/home-sel.png',
                text: '首页'
            },
            {
                pagePath: 'pages/mine/mine',
                iconPath: 'assets/image/tabbar/mine-nor.png',
                selectedIconPath: 'assets/image/tabbar/mine-sel.png',
                text: '我的'
            }
        ]
    },
    permission: {
        'scope.userLocation': {
            desc: '你的位置信息将用于小程序位置接口的效果展示'
        }
    }
}
