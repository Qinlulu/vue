import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Breadcrumb:['数据报表',"活动管理分析表"],
    PageInfoTitle:"活动管理分析表"
  },
  mutations: {
    setBreadcrumb(state, obj) {
      state.Breadcrumb = obj
    },
    setPageInfoTitle(state, txt) {
      state.PageInfoTitle = txt
    },
  },
  getters: {
    getBreadcrumb: state => {
      return state.Breadcrumb
    },
    getPageInfoTitle: state => {
      return state.PageInfoTitle
    },
  },
  actions: {
   
  },
  modules: {
  }
})
