import './app.scss'
import '@/assets/css/border.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'

const App = {
  onShow(options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
