const swipers = [
  "http://img.zcool.cn/community/014056564bd8596ac7251c94eb5559.jpg",
  "http://img.zcool.cn/community/01e03b58047e96a84a0e282b09e8fc.jpg",
  "http://img.zcool.cn/community/0132dd55800bc700000059ffbe83e9.jpg@1280w_1l_2o_100sh.jpg",
  "http://img.zcool.cn/community/0154755a2df102a80120ba3828b5af.jpg@1280w_1l_2o_100sh.jpg",
  "http://img.zcool.cn/community/01a2a2594943d3a8012193a328e0fd.jpg@1280w_1l_2o_100sh.jpg"
]

const myCouponData = [
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子1',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子2',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: true

  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子3',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子4',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子5',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子6',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子7',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子8',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子9',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子10',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    detail: '轻微偶然间期我家人看起来为己任；可垃圾奥施康定了；发教案设计法来得快暗示着持续岸上记得开发和',
    isGuoqi: false
  }
]

const couponCenterData = [
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子1',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 2
  },
  {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子2',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 1
  }, {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子3',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 1
  }, {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子1',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 1
  }, {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子4',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 3
  }, {
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fwuhan%2F201604%2FW020160420642092910287.jpg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650786517&t=633cc6ccaca06f9310ef4fa28a222419',
    name: '可爱兔子5',
    time: '2022.3.10 12:00 - 2022.3.10 12:00',
    isGuoqi: false,
    isLingqu: 3
  },
]

export default {
  swipers,
  myCouponData,
  couponCenterData
}
