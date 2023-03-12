<template>
  <ul class="project-list">
    <li class="project-title">
      <h4>Eventful</h4>
      <small>Edited 3 minutes ago</small>
    </li>
    <li class="fork">
      <img src="../assets/fork.svg" alt="fork">
      <small>4</small>
    </li>
    <li class="img">
        <img src="../assets/warwick.webp" alt="">
        <img src="../assets/warwick.webp" alt="">
        <img src="../assets/warwick.webp" alt="">
    </li>
    <li class="star">
        <img src="../assets/star.svg" alt="star">
    </li>
  </ul>
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
    list-style: none;
    margin: 8px 0;
}
.project-list:hover {
    background: #333;
    color: #fff;
}
.project-title {
   margin-right: auto;
}
.project-list small {
    font-size: 12px;
}
.fork, .img, .star {
    display: flex;
    align-content: center;
    margin: 0 64px;
}
.img img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #eee;
    /* margin-left: -8px; */
}
</style>