<template>
  <main>
    <!-- {{appNumber}} -->
    {{ appNumber }}
    <Controller :changeNumber="changeNumber"/>
  </main>
</template>

<script>
import Controller from "./Controller";
export default {
  components: {
    Controller
  },
  methods: {
    changeNumber(val) {
      // this.appNumber = this.appNumber + val;
      this.$store.dispatch("changeNumber", val);
    }
  },
  computed: {
    appNumber() {
      return this.$store.getters.appNumber;
    }
  }
};
</script>

