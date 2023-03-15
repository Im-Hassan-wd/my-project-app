<template>
  <header>
    <div class="">
      <router-link :to="{ name: 'Home' }">Projetcs</router-link>
      <router-link :to="{ name: 'Favourite' }">Favourite</router-link>
    </div>
    <div class="owner">
      <button><img src="../assets/bell.svg" alt="bell"></button>
      <button>Im-Hassan-wd</button>
      <img src="https://avatars.githubusercontent.com/u/82989580?v=4" alt="avatar">
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
  height: 9vh;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
}
a {
  display: inline-block;
  color: #333;
  text-decoration: none;
  height: 9vh;
  margin-right: 24px;
  padding-top: 20px;
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
button {
  background: none;
  border: none;
  cursor: pointer;
}
@media (max-width: 640px) {
  header {
    padding: 0 16px;
  }
  .owner button {
    display: none;
  }
}
</style>