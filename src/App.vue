<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header"

export default {
  name: "App",
  components: { Header },
  data() {
    return {
    }
  },
  methods: {},
  created() {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #eee;
}
</style>
