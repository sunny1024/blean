<template>
  <div class="popular-person">
    <div class="popular-top">
      <h2 class="popular-title">
        <div class="popular-week">{{title}}</div>
        <span class="placeholder">|</span>
        <span class="fast">{{fast}}</span>
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
      default: "上升最快的音乐人"
    }
  }
};
</script>

<style lang='less'  scoped >
.popular-title {
  font-weight: normal;
  font-size: 17px;
  color: #222;
  border-bottom: 2px solid #02a682;
  margin-right: 3px;
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