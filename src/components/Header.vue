<template>
  <header>
    <div class="">
      <router-link :to="{ name: 'Home' }">Projetcs</router-link>
      <router-link :to="{ name: 'Favourite' }">Favourite</router-link>
    </div>
    <div class="owner">
      <img src="../assets/bell.svg" alt="bell">
      <small>John Doe</small>
      <img src="../assets/warwick.webp" alt="avatar">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
header {
  background: #fff;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
}
a {
  color: #333;
  text-decoration: none;
  margin: 16px 16px 16px 0;
  padding: 14px 0;
}
.router-link-active {
  border-bottom: 2px solid rgb(190, 190, 190);
  font-weight: bold;
}
div.owner {
  display: flex;
  align-items: center;
}
img {
  margin: 0 16px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #eee;
}
</style>