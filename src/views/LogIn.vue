<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="logIn">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              id="email"
              class="form-control"
              type="email"
              required
              autofocus
              v-model="email"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              class="form-control"
              type="password"
              required
              v-model="password"
            />
          </div>

          <button class="btn btn-primary">Log in</button>
        </form>

        <p>
          Don't have an account?
          <router-link to="/sign-up">Sign up!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    logIn() {
      this.$store
        .dispatch("logIn", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>
