<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="signUp">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              id="email"
              class="form-control"
              type="email"
              required
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

          <div class="form-group">
            <label for="confirmPassword">Re-type password</label>
            <input
              id="confirmPassword"
              class="form-control"
              type="password"
              required
              v-model="confirmPassword"
            />
          </div>

          <button class="btn btn-primary">Sign up</button>
        </form>

        <p>
          Already have an account?
          <router-link to="/log-in">Log in!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    passwordsMatch() {
      return this.password == this.confirmPassword;
    }
  },
  methods: {
    signUp() {
      if (this.passwordsMatch) {
        this.$store
          .dispatch("signUp", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            // Need to show a success message
            this.$router.push("/log-in");
          });
      } else {
        this.$store.dispatch("alert", {
          type: "warning",
          message: "Passwords do not match!"
        });
      }
    }
  }
};
</script>
