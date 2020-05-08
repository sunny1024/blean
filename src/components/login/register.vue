<template>
  <div class="user-phone">
    <div class="user-show user-font">
      <span>请仔细阅读</span>
      <a href="javascript:;">豆瓣使用协议、隐私政策</a>
    </div>
    <div class="user-info user-font">
      <div class="user-phoneinfo">
        <el-input placeholder="手机号" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="+86">
            <el-option label="+81" value="1"></el-option>
            <el-option label="+82" value="2"></el-option>
            <el-option label="+65" value="3"></el-option>
          </el-select>
        </el-input>
      </div>
      <div class="user-text">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append">获取验证码</el-button>
        </el-input>
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
      <a href="javascript:;">收不到验证码</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>