<template>
  <div class="project-details">
    <button class="back">
      <img src="../assets/back.svg" alt="back" />
    </button>
    <div class="">
      <h1>Create component button web</h1>
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
              <span class="pill">Html</span>
              <span class="pill">Css</span>
              <span class="pill">javascript</span>
              <span class="pill">UI</span>
            </span>
        </li>
      </ul>
      <div class="">
        <h3>Description</h3>
        <p>On the main page there several banners displayed. The latest main product is located at the top. The need for  a call to action must be considered when it is on the top web benner. Don't forget to enter categories too</p>

        <h3>Code</h3>   
        <div class="code">
          <div class="banner">
            <div class="">
              <span><img src="../assets/warwick.webp" alt="john doe"></span>
              <span>John Doe</span>
            </div>
          </div>
          <ul>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
              <span>clean up</span>
              <span>2 months ago</span>
            </li>
            <li>
              <span class="fold">Componets</span>
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
export default {

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