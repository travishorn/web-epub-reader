<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-toggle="dropdown"
    >
      {{ userEmail }}
    </button>
    <div class="dropdown-menu">
      <button class="dropdown-item" type="button" @click="logOut">
        Log out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserControl",
  computed: {
    userEmail() {
      return this.$store.getters.userEmail;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut").then(() => {
        this.$router.push("/log-in");
      });
    }
  }
};
</script>
