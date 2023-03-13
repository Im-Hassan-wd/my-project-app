<template>
  <div class="project-div">
    <div class="header">
      <h1>Projects</h1>
      <button>
        <img src="../assets/add.svg" alt="add">
        <span>New project</span>
      </button>
    </div>
    <div class="filter">
      <span>Last modified <img src="../assets/down.svg" alt="expand"></span>
      <span>Search <img src="../assets/search.svg" alt="search"></span>
    </div>
    <!-- if this an error -->
    <div v-if="error">{{ error }}</div>
    <!-- if loading data -->
    <div v-if="projects.length">
      <Project :projects="projects" />
    </div>
    <div v-else class="loading-div">
      <img class="loader-img" src="../assets/loader.png" alt="lader">
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter} from 'vue-router'
import Project from "../components/Project.vue"
import getProjects from '../composables/getProjects'

export default {
  name: 'Home',
  components: { Project },
  setup() {
    const route = useRoute()
    const url = 'https://api.github.com/users/im-hassan-wd/repos'
    const { projects, error, load} = getProjects(url)

    load()

    return { projects, error }
  }
}
</script>

<style>
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
  border: 1px solid #000;
  color: #f5f5f5;
  background: #000;
  cursor: pointer
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.filter span {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.filter img {
  width: 20px;
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
</style>