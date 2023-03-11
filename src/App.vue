<template>
  <router-link :to="{ name: 'Home' }">Home</router-link> |
  <router-link :to="{ name: 'About' }">About</router-link> 
  <router-view />
</template>

<script>

export default {
  name: "App",
  components: {},
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
</style>
