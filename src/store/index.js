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
    user: auth.currentUser() ? auth.currentUser() : null
  },
  getters: {
    loggedIn: state => state.user !== null,
    userEmail: state => (state.user ? state.user.email : null)
  },
  mutations: {
    logIn(state, user) {
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    }
  },
  actions: {
    signUp(context, { email, password }) {
      auth
        .signup(email, password)
        .then(res => {
          console.log("User signed up.", res.created_at);
          // Consider auto-signing in the user
        })
        .catch(err => {
          console.log("Something went wrong while signing up.", err);
        });
    },
    logIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        auth
          .login(email, password, true)
          .then(res => {
            console.log("User logged in", res);
            commit("logIn", auth.currentUser());
            resolve();
          })
          .catch(err => {
            console.log("Something went wrong while logging in.", err);
            reject();
          });
      });
    },
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        auth
          .currentUser()
          .logout()
          .then(() => {
            console.log("User logged out.");
            commit("logOut");
            resolve();
          })
          .catch(err => {
            console.log("Failed to log out.", err);
            reject();
          });
      });
    }
  }
});
