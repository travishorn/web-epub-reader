import Vue from "vue";
import Vuex from "vuex";
import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://web-epub-reader-8cde3e.netlify.com/.netlify/identity",
  setCookie: true
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: auth.currentUser() ? auth.currentUser() : null,
    alert: {
      type: "",
      message: ""
    }
  },
  getters: {
    loggedIn: state => state.user !== null,
    userEmail: state => (state.user ? state.user.email : null),
    alert: state => state.alert
  },
  mutations: {
    logIn(state, user) {
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    },
    alert(state, alert) {
      state.alert.type = alert.type;
      state.alert.message = alert.message;
    }
  },
  actions: {
    signUp({ dispatch }, { email, password }) {
      return new Promise((resolve, reject) => {
        auth
          .signup(email, password)
          .then(() => {
            dispatch("alert", {
              type: "success",
              message: "Your account has been created."
            });

            resolve();
            // Consider auto-signing in the user
          })
          .catch(() => {
            dispatch("alert", {
              type: "danger",
              message:
                "Something went wrong while signing you up. Please try again later."
            });
            reject();
          });
      });
    },
    logIn({ commit, dispatch }, { email, password }) {
      return new Promise((resolve, reject) => {
        auth
          .login(email, password, true)
          .then(() => {
            commit("logIn", auth.currentUser());
            resolve();
          })
          .catch(err => {
            dispatch("alert", {
              type: "danger",
              message: err.json.error_description
            });
            reject();
          });
      });
    },
    logOut({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        auth
          .currentUser()
          .logout()
          .then(() => {
            commit("logOut");
            resolve();
          })
          .catch(() => {
            dispatch("alert", {
              type: "danger",
              message:
                "Something went wrong while logging you out. Please try again later."
            });
            reject();
          });
      });
    },
    alert({ commit }, alert) {
      commit("alert", alert);
    }
  }
});
