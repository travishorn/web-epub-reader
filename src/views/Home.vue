<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <UserControl />
  </div>
</template>

<script>
import UserControl from "@/components/UserControl.vue";

export default {
  name: "Home",
  components: {
    UserControl
  }
};
</script>
