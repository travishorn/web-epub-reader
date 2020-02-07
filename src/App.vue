<template>
  <div>
    <alert-bar />
    <router-view />
  </div>
</template>

<script>
import AlertBar from "@/components/AlertBar.vue";

export default {
  components: {
    AlertBar
  }
};
</script>
