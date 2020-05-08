<template>
  <div id="main">
    <div class="anony-nav">
      <div class="anony-nav-left">
        <span>
          <img style="width:110px" src="@/image/logo/image1.jpg" />
        </span>
        <div class="anony-nav-srh">
          <el-input placeholder="书籍、电影、音乐" v-model="input1">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="anony-nav-list">
        <ul>
          <li>
            <router-link to="/about/read" target="_blank">读书</router-link>
          </li>
          <li>
            <router-link to="/about/music" target="_blank">音乐</router-link>
          </li>
          <li>
            <router-link to="/about/film" target="_blank">电影</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: ""
    };
  }
};
</script>

<style >
</style>