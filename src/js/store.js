const store = new Vuex.Store({
  state: {
    loadingShow: true
  },

  mutations: {
    changeLoading (state) {
      state.loadingShow = false
    }
  },

  getters: {

  },

  actions: {
    changeLoading ({ commit }) {
      commit('changeLoading')
    }
  }
})

module.exports = store;
