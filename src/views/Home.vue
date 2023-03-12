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
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </div>
</template>

<script>
import Project from "../components/Project.vue"
export default {
  components: { Project }
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
</style>