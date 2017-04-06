const store = new Vuex.Store({
  state: {
    loadingShow: true
  },
  mutations: {
    changeLoading (state) {
      state.loadingShow = false;
    }
  }
})

module.exports = store;

//scars ------------
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {

//   },

//   mutations: {
//     setState: (state, newState) => Object.assign(state, newState),
//   },

//   getters: {

//   },

//   actions: {

//   },
// });
