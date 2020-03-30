<template>
  <main>
    {{appNumber}}
    <Controller :changeNumber="changeNumber"/>
  </main>
</template>

<script>
import Controller from "./Controller";
export default {
  components: {
    Controller
  },
  data() {
    return {
      appNumber: 0
    };
  },
  methods: {
    changeNumber(val) {
      this.appNumber = this.appNumber + val;
    }
  }
};
</script>

