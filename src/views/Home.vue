<template>
  <!-- <router-view></router-view> -->
  <div class="project-div">
    <div class="header">
      <h1>Projects</h1>
      <button>
        <img src="../assets/add.svg" alt="add">
        <span>New project</span>
      </button>
    </div>
    <!-- if this an error -->
    <div v-if="error">{{ error }}</div> 
    <!-- if loading data -->
    <div class="project-wrapper" v-if="projects.length">
      <Project :projects="paginatedData" @toggleUrl="updateUrl" />
    </div>
    <div v-else class="loading-div">
      <img class="loader-img" src="../assets/loader.png" alt="lader">
    </div>
    <div id="controls">
      <button @click="backPage">prev</button>
      <button 
        v-for="item in Math.ceil(data.length / perPage)" 
        :key="item" 
        @click="() => goToPage(item)"> 
      {{ item }}
      </button>
      <button @click="nextPage">next</button>
   </div>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
import Project from "../components/Project.vue"
// composables
import getData from '../composables/getData'
// pagination
import handlePagination from "../handlePagination.js";

export default {
  name: 'Home',
  components: { Project },
  setup() {
    let url = ref('https://api.github.com/users/Im-Hassan-wd/repos?per_page=300')

    const updateUrl = () => {
      url.value = 'https://api.github.com/users/Im-Hassan-wd/repos?per_page=300&sort=created_at&order=desc'
    }

    const { projects, error, load} = getData(url.value)
    
    const handlePaginationValue = handlePagination(projects);

    watchEffect(() => {
      load()
      console.log(load(), url.value)
    })

    return { projects, error, ...handlePaginationValue, updateUrl  }
  }
}
</script>

<style>
.project-wrapper {
  margin: 32px 0;
  margin-bottom: 128px;
}
.project-div {
  padding: 0 32px;
}
.project-div .header {
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 24px;
  font-weight: 300;
}
.project-div .header button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 40px;
  border: 1px solid var(--primary);
  color: #f5f5f5;
  background: var(--primary);
  cursor: pointer
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.filter span {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.filter img {
  width: 20px;
}
#controls {
  padding: 8px 0;
  box-shadow: 2px 2px 10px #d3d3d3;
  background: #fff;
  margin-top: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
#controls button {
  padding: 7px 16px;
  margin: 8px;
  background: none;
  border: none;
  border-bottom: 2px solid var(--primary);
  cursor: pointer;
  transition: 0.5s ease;
}
#controls button:hover {
  background: var(--primary);
  color: #fff;
}
/* loading message */
.loading-div {
  text-align: center;
}
.loader-img {
  width: 100px;
  animation: loading 2s ease-in-out infinite;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .project-wrapper {
    margin-bottom: 160px;
  }
  .project-div {
    padding: 0 16px;
  }
}
</style>