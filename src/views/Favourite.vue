<template>
  <div class="project-div">
    <h1>Favourite Projects</h1>
    <div id="cards">
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="">
          <img src="../assets/logo.png" alt="desc">
          <h3>Eventful</h3>
          <p>This is a bucket, not a bucket of water but a bucket that store your evemtful moments.</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

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
    margin: 24px 0;
}
.card p {
    font-size: 16px;
    box-lines: 20px;
}
.card .content {
  padding: 16px; 
}
</style>