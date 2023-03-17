<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>Something went <b>WRONG</b></p>
      <router-link :to="{ name: 'Home' }">
        Back to Homepage
      </router-link>
    </div>
    <div class="img-div">
      <img src="../assets/404.svg" alt="page not found">
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.not-found {
  display: flex;
  align-items: center;
  color: var(--black);
  background: var(--white);
  margin: 64px auto;
  max-width: 1200px;
  padding: 0 32px;
}
.not-found h1 {
  font-size: 8rem;
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
  background: var(--primary);
  text-decoration: none;
}
.not-found .img-div {
  width: 500px;
}
.not-found img {
  width: 100%;
}
@media (max-width: 746px) {
  .not-found {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .not-found .img-div {
    width: 300px;
    margin-left: 24px;
  }
}
</style>