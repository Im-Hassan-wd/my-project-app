<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>Something went <b>WRONG</b></p>
      <router-link :to="{ name: 'Home' }">
        Back to Homepage
      </router-link>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.not-found {
  color: #333;
  background: #eee;
}
.not-found .container {
  margin: 64px auto;
  max-width: 1200px;
  padding: 0 16px;
}
.not-found h1 {
  font-size: 6rem;
  font-weight: bold;
}
.not-found p {
  font-size: 3rem;
  max-width: 500px;
}
.not-found a {
  padding: 10px;
  display: inline-block;
  margin: 16px 0;
  color: #fff;
  background: #333;
  text-decoration: none;
}
</style>