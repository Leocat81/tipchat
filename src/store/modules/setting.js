import db from '@/utils/localstorage'

export default {
  namespaced: true,
  state: {
    isMobile: true,
    systemName: '烟草流程管理',
    OrderDetailsData: '0',
    OrderID: '', // 点击处理时保存的id
    ThisNewRouter: '', // 当前路由
    gridParams: db.get('gridParams'),
    viewParams: db.get('viewParams'),
    ycloudToken: db.get('ycloudToken') // ycloudToken
  },
  mutations: {
    SetThisNewRouter (state, key) {
      state.ThisNewRouter = key
    },
    setGridParams (state, item) {
      db.save('gridParams', item)
      state.gridParams = item
    },
    setViewParams (state, item) {
      db.save('viewParams', item)
      state.viewParams = item
    },
    ycloudToken (state, ycloudToken) {
      db.save('ycloudToken', ycloudToken)
      state.ycloudToken = ycloudToken
      console.log(ycloudToken)
    }
  }
}
