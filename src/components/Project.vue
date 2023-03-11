<template>
  <div class="project-list">
    <div class="project-title">
      <h4>Eventful</h4>
      <small>Edited 3 minutes ago</small>
    </div>
    <p>
      <img src="../assets/fork.svg" alt="fork">
      <small>4</small>
    </p>
    <div></div>
    <img src="../assets/star.svg" alt="star">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.project-list {
    background: #fff;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.project-list small {
    font-size: 12px;
}
</style>