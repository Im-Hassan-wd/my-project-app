<template>
  <div class="project-details">
    <button @click="goBack" class="back">
      <img src="../assets/back.svg" alt="back" />
    </button>
    <!-- if this an error -->
    <div v-if="error">{{ error }}</div>
    <!-- if loading data -->
    <!-- <div v-if="!project.length" class="loading-div">
      <img class="loader-img" src="../assets/loader.png" alt="lader">
    </div> -->
    <div class="">
      <h1>{{ project.name }}</h1>
      <ul>
        <li>
            <span class="key">Status</span>
            <span class="val">In progress</span>
        </li>
        <li>
            <span class="key">Asignee</span>
            <span class="val">In progress</span>
        </li>
        <li>
            <span class="key">Due date</span>
            <span class="val">Nov 20 23</span>
        </li>
        <li>
            <span class="key">Languages</span>
            <span class="val">
              <span v-for="language in languages" :key="language" class="pill">{{ language }}</span>
            </span>
        </li>
      </ul>
      <div class="">
        <h3>Description</h3>
        <p>{{ project.description }}</p>

        <h3>Code</h3>   
        <div class="code">
          <div class="banner">
            <div class="">
              <span><img :src="project.owner.avatar_url" :alt="project.owner.login"></span>
              <span>{{ project.owner.login }}</span>
            </div>
          </div>
          <ul>
            <li v-for="content in contents" :key="content.name">
              <span class="fold">{{ content.name}}</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter} from 'vue-router'
import getProjects from '../composables/getProjects'

export default {
  name: 'ProjectDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const goBack = () => router.go(-1)
    // fetching data
    const url = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}`
    const contentUrl = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}/contents/`
    const languageUrl = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}/languages/`
    const { projects: project, error, load} = getProjects(url)
    const { projects: contents, load: loadContent} = getProjects(contentUrl)
    const { projects: languages, load: loadLanguage} = getProjects(languageUrl)

    load()
    loadContent()
    loadLanguage()

    return { 
      goBack, load, loadContent, loadLanguage, project, error, contents, languages 
    }
  }
}
</script>

<style scoped>
.project-details {
  margin: 24px 0;
  padding: 0 24px;
}
.project-details .back {
  background: none;
  cursor: pointer;
  border: none;
}
.key {
  color: #777;
  margin: 8px 0;
  margin-right: 8px;
  width: 100px;
  display: inline-block;
}
h1, h3{
  margin: 24px 0;
  font-weight: 300;
  font-size: 40px;
  max-width: 450px;
  line-height: 45px;
}
h3 {
  font-size: 25px;
  margin: 24px 0px 8px 0;
}
ul {
  list-style: none;
}
.pill {
  display: inline-block;
  margin: 0px 10px 0 0;
  padding: 6px 12px;
  background: #fff;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
}
.code {
  border: 1px solid #d3d3d3;
  border-radius: 10px;
}
.code ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #d3d3d3;
}
.banner {
  background: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px 0;
}
.banner div {
  display: flex;
  align-items: center;
}
.banner img {
  margin: 0 16px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eee;
}
.fold {
    font-weight: bold;
}
</style>