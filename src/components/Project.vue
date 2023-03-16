<template>
  <router-link v-for="project in projects" :key="project.node_id" class="project-link" :to="{ name: 'ProjectDetails', params: { id: project.name } }">
    <ul class="project-list">
      <li class="project-title">
        <h4>{{ project.name }}</h4>
        <small>Edited {{ project.updated_at }}</small>
      </li>
      <div>
        <li class="fork">
          <img src="../assets/fork.svg" alt="fork">
          <small>{{ project.stargazers_count }}</small>
        </li>
        <li v-if="project.language" :class=" [project.language ? project.language.toLowerCase() : '', 'pill']">{{ project.language }}</li>
        <li v-else class="pill">...</li>
        <li class="star">
          <img src="../assets/star.svg" alt="star">
        </li>
      </div>
    </ul>
  </router-link>
</template>

<script>
export default {
  name: 'Project',
  props: ['projects']
}
</script>

<style>
.project-link {
  color: #333;
  text-decoration: none;
}
.project-list {
  background: #fff;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 8px 0;
  transition: all 0.5s ease;
}
.project-list:hover {
  background: #333;
  color: #fff;
}
.project-list small {
  font-size: 12px;
}
.project-list div {
  display: flex;
  align-items: center;
  max-width: 500px;
  justify-content: space-between;
}
.pill {
  display: inline-block;
  margin: 0px 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  background: #999;
}
.fork, .img, .star {
  display: flex;
  align-content: center;
}
.img img{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #eee;
}
.javascript{
  background: #f1e05a;
}
.css {
  background: #563d7c;
}
.vue {
  background: #41b883;
}
.html {
  background: #e34c26;
}
.ejs {
  background: #a91e50;
}
.php {
  background-color: #4F5D95;
}
</style>