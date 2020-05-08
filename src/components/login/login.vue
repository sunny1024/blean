<template>
  <div class="user-password">
    <div class="user-show found-pass user-font">
      <a href="javascript:;">找回密码</a>
    </div>
    <div class="user-info user-font">
      <div class="user-phoneinfo">
        <el-input placeholder="手机/邮箱"></el-input>
      </div>
      <div class="user-text">
        <el-input placeholder="密码" show-password></el-input>
      </div>
      <div class="user-register">
        <el-button type="success">登录豆瓣</el-button>
      </div>
    </div>
    <div class="user-about">
      <div class="user-auto">
        <input type="checkbox" />
        <span>下次自动登录</span>
      </div>
      <a href="javascript:;">海外手机登录</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
