<template>
  <div class="project-div">
    <h1>Favourite Projects</h1>
    <div id="cards">
      <div v-for="starr in starred" :key="starr.id" class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/project.jpg" alt="project-cover">
          <h3>{{ starr.name }}</h3>
          <p v-if="starr.description">{{ starr.description }}</p>
          <p v-else>This project doesn't have a description</p>
        </div>
        <div class="owner-div">
          <div>{{ starr.owner.login }}</div>
          <img class="owner-img" :src="starr.owner.avatar_url" :alt="starr.owner.name">
        </div>
      </div>     
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
// composables 
import getData from '../composables/getData'

export default {
  name: 'Favourite',
  setup() {
    const url = 'https://api.github.com/users/Im-Hassan-wd/starred';
    const { projects: starred, error, load } = getData(url)

    load()

    return { starred, error }
  }
}
</script>

<style scoped>
.project-div {
  margin: 24px 0;
}
#cards {
  margin: 16px 0;
  border-top: 1px solid #d3d3d3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  position: relative;
  box-shadow: 1px 2px 10px #d3d3d3;
  transition: all 0.5s ease;
}
.card:hover {
  box-shadow: none;
}
.card p {
  font-size: 16px;
  box-lines: 20px;
}
.card h3, .card p {
  padding: 8px 8px 0px 8px; 
}
.card p {
  padding-bottom: 16px
}
.desc img{
 width: 100%;
}
.love {
  width: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
}
.owner-div {
  margin-top: auto;
  text-align: end;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 8px;
  padding-right: 8px;
  /* flex-direction: column; */
}
.owner-div img {
  margin-left: 8px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
}
</style>