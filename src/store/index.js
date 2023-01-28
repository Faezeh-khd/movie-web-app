import { createStore } from "vuex";
import movies from "./modules/movies";
const SET_USER = "SET_USER";
export default createStore({
  state: {
    user: {},
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit, user }) {
      //call Api
      commit(SET_USER, user);
    },
  },
  modules: {
    movies
  },
  getters: {
    isUserAdmin: state => {
      return state.user.role === 'admin'
    }
  }

});
