<template>
  <div id="main">
    <div class="anony-nav">
      <div class="anony-nav-left">
        <span>
          <img style="width:110px" src="./image/image1.jpg" />
        </span>
        <span class="anony-nav-srh">
          <input name="b" type="text" placeholder="书籍、电影、音乐" />
          <input type="sumbit" placeholder="搜索" />
        </span>
      </div>
      <div class="anony-nav-list">
        <ul>
          <li>
            <a href="#/read" target="_blank">读书</a>
          </li>
          <li>
            <a href="#/film" target="_blank">电影</a>
          </li>
          <li>
            <a href="#/music" target="_blank">音乐</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="register">
      <div class="info-abount"></div>
      <div class="user-login">
        <div class="user-header user-font">
          <a href="javascript:;" class="user-current">短信登录/注册</a>
          <a href="javascript:;">密码登录</a>
        </div>
        <div class="user-show user-font">
          <span>请仔细阅读</span>
          <a href="javascript:;">豆瓣使用协议、隐私政策</a>
        </div>
        <div class="user-info user-font">
          <div class="user-phone">
            <a href="javascript:;">+86</a>
            <input type="text" placeholder="手机号" />
          </div>
          <div class="user-text">
            <input type="text" placeholder="验证码" />
            <a href="javascript:;">获取验证码</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src='./css/reset.css'></style>
<style src='./css/index.css'></style>
<style scoped>
</style>
