export default {
    pages: ['pages/home/home', 'pages/menu/menu', 'pages/order/order', 'pages/mine/mine'],
    subPackages: [
        {
            root: 'pages/subPackages',
            pages: [
                'homeDetail/homeDetail',
                'mineDetail/mineDetail'
            ]
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
                pagePath: 'pages/menu/menu',
                iconPath: 'assets/image/tabbar/bbs-nor.png',
                selectedIconPath: 'assets/image/tabbar/bbs-sel.png',
                text: '菜单'
            },
            {
                pagePath: 'pages/order/order',
                iconPath: 'assets/image/tabbar/shopping-nor.png',
                selectedIconPath: 'assets/image/tabbar/shopping-sel.png',
                text: '订单'
            },
            {
                pagePath: 'pages/mine/mine',
                iconPath: 'assets/image/tabbar/mine-nor.png',
                selectedIconPath: 'assets/image/tabbar/mine-sel.png',
                text: '我的'
            }
        ]
    }
}

