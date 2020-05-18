<template>
  <div class="follow-about">
    <div class="hd">
      <h2>
        <span>关注我们</span>
      </h2>
    </div>
    <div class="bd">
      <ul class="embassy-list">
        <li>
          <a href="javascript:;" class="embassy-site pic1"></a>
          <a href="javascript:;">豆瓣小站</a>
        </li>
        <li>
          <a href="javascript:;" class="embassy-site pic2"></a>
          <a href="javascript:;">微博</a>
        </li>
        <li>
          <a href="javascript:;" class="embassy-site pic3"></a>
          <a href="javascript:;">微信</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 14px;
  padding-bottom: 3px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}
.follow-about h2:hover {
  color: #fff;
  background-color: #666;
}
.follow-about a:hover {
  background-color: #3377aa;
  color: white;
}
.bd {
  font-size: 12px;
  margin-bottom: 30px;
}

.embassy-list {
  display: flex;
}
.embassy-list li {
  text-align: center;
}
.embassy-site {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 10px 5px 10px;
}
.embassy-list .pic1 {
  background-image: -webkit-image-set(
    url(~@/assets/image/read_all/home_site/home_site.jpg) 1x,
    url(~@/assets/image/read_all/home_site/home_site@2x.jpg) 2x
  );
}
.embassy-list .pic2 {
  background-image: -webkit-image-set(
    url(~@/assets/image/read_all/home_site/home_weibo.jpg) 1x,
    url(~@/assets/image/read_all/home_site/home_weibo@2x.jpg) 2x
  );
}
.embassy-list .pic3 {
  background-image: -webkit-image-set(
    url(~@/assets/image/read_all/home_site/home_weixin.jpg) 1x,
    url(~@/assets/image/read_all/home_site/home_weixin@2x.jpg) 2x
  );
}
</style>