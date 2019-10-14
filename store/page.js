export const state = () => ({
  scroll: null,
  logOn: false,
});

export const mutations = {
  loadScroll(state, payload) {
    state.scroll = payload;
  },
  logOn(state, payload) {
    state.logOn = payload;
  }
}

export const actions = {
  loadScroll({ commit }, payload) {
    commit('loadScroll', payload);
  },
  logOn({ commit }, payload) {
    commit('logOn', payload);
  }
}