<template>
  <div class="filter">
    <!-- <select @change="$emit('toggleUrl')" v-model="select">
      <option value="Last modified">Last modified</option>
      <option value="Ascending">Ascending</option>
    </select> -->
    <span class="search" @click="setShowInput">Search <img src="../assets/search.svg" alt="search"></span>
  </div>
  <input v-if="showInput" type="text" v-model="search" placeholder="Find a project...">
  <router-link v-for="project in matchingProjects" :key="project.node_id" class="project-link" :to="{ name: 'ProjectDetails', params: { id: project.name } }">
    <ul class="project-list">
      <li class="project-title">
        <h4 v-if="project.name.includes('_')">{{ project.name.replace(/_/gi, '-') }}</h4>
        <h4 v-else>{{ project.name.replace(/_/gi, '-') }}</h4>
        <small>Updated {{ formatDistance(new Date(project.updated_at.slice(0, 10).replace(/-/gi, ', ')), new Date(year, month, day)) }} ago</small>
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
import { computed, ref, } from 'vue'
import { formatDistance } from 'date-fns'

export default {
  name: 'Project',
  props: ['projects'],
  emits: ['toggleUrl'],
  setup(props, { emit }) {
    // data
    const showInput = ref(false)
    const search = ref('')
    const select = ref('Last modified')
    // functions
    const matchingProjects = computed(() => {
      return props.projects.filter(project => project.name.toLowerCase().includes(search.value.toLowerCase()))
    })

    const setShowInput = () => {
      showInput.value = !showInput.value
    }

    const toggle = () => {
      emit('toggleUrl')
    }

    // get current date
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    return { search, matchingProjects, select, showInput, setShowInput, toggle, day, month, year, formatDistance };
  }
}
</script>

<style>
.project-link {
  color: var(--black);
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
  background: var(--black);
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
select {
  padding: 7px;
  border: 1px solid var(--gray);
  border-radius: 5px;
}
input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid var(--gray);
  margin: 8px 0;
  border-radius: 10px;
}
.search {
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 8px 16px;
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
  background: var(--gray);
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
.python {
  background-color: #3572A5;
}
.shell {
  background: #89e051;
}
</style>