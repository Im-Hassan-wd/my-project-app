<template>
  <Navbar />
  <router-view />  
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name: "App",
  components: { Navbar, },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

:root {
  --primary: #BA68C8;
  --black: #333;
  --white: #eee;
  --gray: #d3d3d3;
}
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
