<template>
  <div class="register">
    <div class="user-login">
      <div class="user-header user-font">
        <ul>
          <li>
            <a href="javascript:;" :class="useCurrent" @click="content=true">短信登录/注册</a>
          </li>
          <li>
            <a href="javascript:;" @click="content=false">密码登录</a>
          </li>
        </ul>
      </div>
      <div class="user-phone" v-if="content">
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
      <div class="user-password" v-if="!content">
        <div class="user-show found-pass user-font">
          <a href="javascript:;">找回密码</a>
        </div>
        <div class="user-info user-font">
          <div class="user-phoneinfo">
            <el-input v-model="input" placeholder="手机/邮箱"></el-input>
          </div>
          <div class="user-text">
            <el-input placeholder="密码" v-model="input" show-password></el-input>
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
      <div class="user-thrid">
        <span>第三方登录：</span>
        <a href="javascript:;">微信</a>
        <a href="javascript:;">微博</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input3: "",
      select: "",
      content: "true",
      useCurrent: "user-current"
    };
  }
};
</script>
<style src='@/css/index.css'></style>
<style src='@/css/index.css'></style>
<style>
</style>