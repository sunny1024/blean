
<template>
  <div class="banner">
    <div class="register">
      <div class="user-login">
        <div class="user-header user-font">
          <ul>
            <li>
              <a
                href="javascript:;"
                :class="{'tab-current': current === 'register'}"
                @click="swich('register')"
              >短信登录/注册</a>
            </li>
            <li>
              <a
                href="javascript:;"
                :class="{'tab-current': current === 'login'}"
                @click="swich('login')"
              >密码登录</a>
            </li>
          </ul>
        </div>
        <component :is="current"></component>
        <div class="user-thrid">
          <span>第三方登录：</span>
          <el-button type="text">微信</el-button>
          <el-button type="text">微博</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from "./login.vue";
import register from "./register.vue";
export default {
  components: { login, register },
  data() {
    return {
      current: "register" // 当前默认显示的栏目：注册
    };
  },
  methods: {
    swich(tabName) {
      this.current = tabName;
    }
  }
};
</script>
<style scoped>
.tab-current {
  font-weight: bold;
  color: black;
  border-bottom: 1px solid black;
}
</style>