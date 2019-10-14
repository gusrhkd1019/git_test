export const state = () => ({
  user: null,
});

export const mutations = {
  setMe(state, payload) {
    state.user = payload;
  },
  selectField(state, payload) {
    state.user.field = payload;
  },
}

export const actions = {
  signUp({ commit }, payload) {
    commit('setMe', payload);
  },
  logIn({ commit }, payload) {
    commit('setMe', payload);
  },
  selectField({ commit }, payload) {
    commit('selectField', payload);
  }
}