<template>
  <div class="project-div">
    <div class="header">
      <h1>Projects</h1>
      <button>
        <!-- icon goes here -->
        <span>New project</span>
      </button>
    </div>
    <div class="filter">
      <span>Last modified</span>
      <span>Search</span>
    </div>
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
.project-div h1 {
  font-size: 24px;
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
}
</style>