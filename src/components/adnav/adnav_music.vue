<template>
  <div id="db-book-nav" class="nav">
    <div class="nav-wrap">
      <div class="nav-primary">
        <div class="nav-banner">
          <div class="nav-logo">
            <a href="javascript:;"></a>
          </div>
          <div class="nav-search">
            <el-input placeholder="唱片名、表演者、条码、ISRC" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-secondary">
      <div class="nav-items">
        <ul>
          <li>
            <a href="javascript:;">音乐人</a>
          </li>
          <li>
            <a href="javascript:;">潮潮豆瓣音乐周</a>
          </li>
          <li>
            <a href="javascript:;">金羊毛计划</a>
          </li>
          <li>
            <a href="javascript:;">专题</a>
          </li>
          <li>
            <a href="javascript:;">排行榜</a>
          </li>
          <li>
            <a href="javascript:;">分类浏览</a>
          </li>
          <li>
            <a href="javascript:;">乐评</a>
          </li>
          <li>
            <a href="javascript:;">豆瓣FM</a>
          </li>
          <li>
            <a href="javascript:;">歌单</a>
          </li>
          <li>
            <a href="javascript:;">2019年度榜单</a>
          </li>
          <li>
            <a href="javascript:;">阿比鹿音乐奖</a>
          </li>
        </ul>
      </div>
      <a class="nav-list" href="javascript:;"></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: ""
    };
  }
};
</script>
<style >
.nav {
  position: relative;
  background-color: #f6f6f1;
  width: 100%;
  margin-bottom: 40px;
}
.nav a {
  color: #555d53;
}
.nav-items a:hover {
  background: #555d53;
  color: white;
}
.nav-wrap {
  border-bottom: 1px solid #e9e9e2;
}
.nav-primary {
  width: 1040px;
  margin: 0 auto;
}

.nav-banner {
  display: flex;
  align-items: center;
  padding: 10px 0 5px;
}

.nav-logo a {
  display: inline-block;
  height: 56px;
  width: 145px;
  margin: 0 13px 0 0;
  background: url("~@/assets/image/read_all/readpg/read_logo1.jpg")
    center/contain no-repeat;
}

.nav-search {
  width: 48%;
}
.nav-secondary {
  width: 1040px;
  margin: 0 auto;
}
.nav-items {
  font-size: 14px;
}
.nav-items ul {
  padding: 10px 0;
}
.nav-items li {
  float: left;
  margin-right: 29px;
}

.nav-items > ul::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.nav-secondary .nav-list {
  position: absolute;
  width: 186px;
  height: 96px;
  top: 15px;
  margin-left: 400px;
  left: 50%;
  background: url("~@/assets/image/read_all/readpg/read_top.jpg") center/contain
    no-repeat;
}
</style>
