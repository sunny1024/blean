<template>
  <div>
    <div class="global-nav">
      <div class="global-nav-info">
        <ul>
          <li>
            <router-link to="/home">豆瓣</router-link>
          </li>
          <li>
            <router-link to="/about/read">读书</router-link>
          </li>
          <li>
            <a href="javascript:;">电影</a>
          </li>
          <li>
            <router-link to="/about/music">音乐</router-link>
          </li>
          <li>
            <a href="javascript:;">同城</a>
          </li>
          <li>
            <a href="javascript:;">小组</a>
          </li>
          <li>
            <a href="javascript:;">阅读</a>
          </li>
          <li>
            <a href="javascript:;">FM</a>
          </li>
          <li>
            <a href="javascript:;">时间</a>
          </li>
          <li>
            <a href="javascript:;">豆品</a>
          </li>
        </ul>
      </div>
      <div class="global-nav-item">
        <ul>
          <li>
            <a href="javascript:;">下载豆瓣客户端</a>
          </li>
          <li>
            <a href="javascript:;">登录/注册</a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.global-nav {
  display: flex;
  height: 28px;
  line-height: 28px;
  background-color: #545652;
  justify-content: space-between;
  color: #d5d5d5;
}
.global-nav ul::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.global-nav ul li {
  float: left;
  padding: 0 12px;
}
.global-nav li a {
  color: #d5d5d5;
}
.global-nav-item {
  margin-right: 12px;
}
.global-nav-item li:first-child {
  padding: 0 8px;
  margin-right: 5px;
}
</style>