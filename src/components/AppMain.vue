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
  // data() {
  //   return {
  //     appNumber: 0
  //   };
  // },
  methods: {
    changeNumber(val) {
      // this.appNumber = this.appNumber + val;
      this.$store.commit("changeNumber", val);
    }
  },
  computed: {
    appNumber() {
      return this.$store.state.appNumber;
    }
  }
};
</script>

