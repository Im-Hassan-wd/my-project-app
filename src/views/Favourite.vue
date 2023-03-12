<template>
  <div class="project-div">
    <h1>Favourite Projects</h1>
    <div id="cards">
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/theDojo.png" alt="desc">
          <h3>Eventful</h3>
          <p>This is a bucket, not a bucket of water but a bucket that store your evemtful moments.</p>
        </div>
      </div>
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/theDojo.png" alt="desc">
          <h3>Eventful</h3>
          <p>This is a bucket, not a bucket of water but a bucket that store your evemtful moments.</p>
        </div>
      </div>
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/theDojo.png" alt="desc">
          <h3>Eventful</h3>
          <p>This is a bucket, not a bucket of water but a bucket that store your evemtful moments.</p>
        </div>
      </div>
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/theDojo.png" alt="desc">
          <h3>Eventful</h3>
          <p>This is a bucket, not a bucket of water but a bucket that store your evemtful moments.</p>
        </div>
      </div>
      <div class="card">
        <img class="love" src="../assets/fav-b.svg" alt="love">
        <div class="desc">
          <img src="../assets/theDojo.png" alt="desc">
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
  position: relative;
  box-shadow: 1px 2px 10px #d3d3d3;
  transition: all 0.5s ease;
}
.card:hover {
  box-shadow: none;
}
.card p {
  font-size: 16px;
  box-lines: 20px;
}
.card h3, .card p {
  padding: 8px 8px 0px 8px; 
}
.card p {
  padding-bottom: 16px
}
.desc img{
 width: 100%;
}
.love {
  width: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>