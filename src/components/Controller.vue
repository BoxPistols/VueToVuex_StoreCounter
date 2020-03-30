<template>
  <div>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script>
export default {
  props: {
    changeNumber: Function
  },
  methods: {
    plus() {
      this.changeNumber(1);
    },
    minus() {
      this.changeNumber(-1);
    }
  }
};
</script>

