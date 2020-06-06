<template>
  <div id="db-book-nav" class="nav">
    <div class="nav-wrap">
      <div class="nav-primary">
        <div class="nav-banner">
          <div class="nav-logo">
            <a href="javascript:;"></a>
          </div>
          <div class="nav-search">
            <el-input placeholder="书名、作者、ISBN" v-model="input3" class="input-with-select">
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
            <a href="javascript:;">购书单</a>
          </li>
          <li>
            <a href="javascript:;">电子图书</a>
          </li>
          <li>
            <a href="javascript:;">豆瓣书店</a>
          </li>
          <li>
            <a href="javascript:;">2019年度榜单</a>
          </li>
          <li>
            <a href="javascript:;">2019书影音报告</a>
          </li>
          <li>
            <i class="el-icon-shopping-cart-2" style="font-size:16px"></i>
            <a href="javascript:;">购物车</a>
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
  color: #614e3c;
}
.nav-items a:hover {
  background: #614e3c;
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
.nav-logo {
  line-height: 1.1;
}
.nav-logo a {
  display: inline-block;
  height: 56px;
  width: 145px;
  margin: 0 13px 0 0;
  background: url("~@/assets/image/read_all/readpg/read_logo.jpg") no-repeat 0
    12px;
  background-image: -webkit-image-set(
    url(~@/assets/image/read_all/readpg/read_logo.jpg) 1x,
    url(~@/assets/image/read_all/readpg/read_logo1.jpg) 2x
  );
}

.nav-search {
  width: 48%;
  margin-top: -12px;
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
  top: 10px;
  margin-left: 320px;
  left: 50%;
  background: url("~@/assets/image/read_all/readpg/read_top.jpg") center/contain
    no-repeat;
}
.el-input__inner {
  height: 35px;
  line-height: 35px;
}
</style>