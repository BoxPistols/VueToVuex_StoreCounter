<template>
  <div>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    AppFooter
  }
};
</script>

<style>
</style>
