<template>
  <div class="popular-person">
    <div class="popular-top">
      <h2 class="popular-title">
        <a href="javascript:;">
          <div class="popular-week">{{title}}</div>
        </a>
        <span class="placeholder">|</span>
        <a href="javascript:;">
          <span class="fast">{{fast}}</span>
        </a>
      </h2>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题"
    },
    fast: {
      type: String,
      default: "默认标签"
    }
  }
};
</script>

<style lang='less'  scoped >
.popular-title {
  font-weight: normal;
  font-size: 17px;
  border-bottom: 2px solid #02a682;
  margin-right: 3px;
  a {
    color: #222;
  }
  .popular-week {
    display: inline-block;
    margin-right: 3px;
  }
  span {
    font-size: 14px;
  }
  .placeholder {
    margin-right: 3px;
  }
  .fast {
    color: #999;
  }
}
</style>