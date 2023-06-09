<template>
  <div class="project-details">
    <button @click="goBack" class="back">
      <img src="../assets/back.svg" alt="back" />
    </button>
    <!-- if this an error -->
    <div v-if="error">{{ error }}</div>
    <!-- if loading data -->
    <div class="">
      <h1 v-if="project.name.includes('_')">{{ project.name.replace(/_/gi, '-') }}</h1>
      <h1 v-else>{{ project.name }}</h1>
      <table>
        <thead>
          <tr>
            <th class="key">Status</th>
            <th class="val"><strong>message: </strong> {{ commits[0].commit.message }} <strong>by: </strong> {{ commits[0].commit.author.email }} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="key">Created at</td>
            <td class="val">{{ project.created_at }}</td>
          </tr>
          <tr>
            <td class="key">Owner</td>
            <td class="val"><img class="owner" :src="project.owner.avatar_url" :alt="project.owner.id"></td>
          </tr>
          <tr>
            <td class="key">Tools</td>
            <td class="val">
              <span v-for="language in Object.keys(languages)" :key="language">
                <span :class=" [language ? language.toLowerCase() : '', 'pill']">{{ language }}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="">
        <h3>Description</h3>
        <p v-if="project.description === null">This particular project doesn't have a description.</p>
        <p v-else>{{ project.description }}</p>

        <h3>Overview</h3>   
        <div class="code">
          <div class="banner">
            <div class="">
              <span><img :src="commits[0].committer.avatar_url" :alt="commits[0].committer.login"></span>
              <span>{{ commits[0].committer.login }}</span>
            </div>
          </div>
          <ul>
            <li v-for="content in contents" :key="content.name">
              <span class="fold">
              <img v-if="content.type === 'dir'" src="../assets/folder.svg" alt="folder">
              <img v-if="content.type === 'file'" src="../assets/file.svg" alt="file">
              {{ content.name}}
            </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="loading-div">
      <img class="loader-img" src="../assets/loader.png" alt="lader">
    </div> -->
  </div>
</template>

<script>
import { useRoute, useRouter} from 'vue-router'
import getData from '../composables/getData'

export default {
  name: 'ProjectDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const goBack = () => router.go(-1)
    
    // fetching data
    const url = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}`
    const contentUrl = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}/contents`
    const languageUrl = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}/languages`
    const assigneeUrl = `https://api.github.com/repos/Im-Hassan-wd/github-user-profile/assignees`
    const commitUrl = `https://api.github.com/repos/Im-Hassan-wd/${route.params.id}/commits`
    const { projects: project, error, load} = getData(url)
    const { projects: contents, load: loadContent} = getData(contentUrl)
    const { projects: languages, load: loadLanguage} = getData(languageUrl)
    const { projects: assignees, load: loadAssignee} = getData(assigneeUrl)
    const { projects: commits, load: loadCommit} = getData(commitUrl)

    load()
    loadContent()
    loadLanguage()
    loadCommit()

    return { 
      goBack, load, loadContent, loadLanguage, loadAssignee, loadCommit,
      project, error, contents, languages, assignees, commits
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
  font-weight: 500;
  max-width: 450px;
  font-size: 30px;
}
h3 {
  font-size: 25px;
  margin: 24px 0px 8px 0;
}
ul {
  list-style: none;
}
th {
  text-align: left;
  font-weight: normal;
}
.pill {
  margin: 0 8px 8px 0;
}
img.owner{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
}
.code {
  border: 1px solid var(--gray);
  border-radius: 10px;
}
.code ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid var(--gray);
  transition: all 0.5s ease;
}
.code ul li:hover {
  background: #fff;
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
  background: var(--white);
}
.fold {
  display: flex;
  align-items: center;

}
.fold img {
  margin-right: 8px;
}
</style>