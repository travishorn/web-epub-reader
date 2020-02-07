<template>
  <div class="alert alert-dismissable fade" :class="alertClass">
    {{ message }}
    <button class="close" type="button" data-dismiss="alert">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AlertBar",
  data() {
    return {
      show: false
    };
  },
  computed: {
    message() {
      return this.$store.getters.alert.message;
    },
    type() {
      return this.$store.getters.alert.type;
    },
    alertClass() {
      const showClass = this.show ? "show" : "";
      const typeClass = `alert-${this.type}`;
      return `${showClass} ${typeClass}`;
    }
  },
  watch: {
    message(newValue) {
      if (newValue !== "") {
        this.show = true;

        setTimeout(() => {
          this.show = false;
          this.$store.dispatch("alert", { type: "", message: "" });
        }, 10000);
      }
    }
  }
};
</script>
