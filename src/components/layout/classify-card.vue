<template>
  <div class="classify">
    <div class="popular-top">
      <h1 class="popular-title" :class="{ hasLine:hasline }">
        <a href="javascript:;">
          <div class="popular-week">{{title}}</div>
        </a>
        <a href="javascript:;">
          <span class="more">更多</span>
        </a>
      </h1>
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
    hasline: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='less'  scoped >
.popular-title {
  position: relative;
  font-weight: normal;
  font-size: 15px;
  &.hasLine {
    border-bottom: 1px solid #e4e2e2;
  }
  a {
    color: #222;
  }
  .popular-week {
    display: inline-block;
    margin-right: 3px;
  }
  .more {
    position: absolute;
    right: 0;
    bottom: 3px;
    font-size: 13px;
    color: #999;
    &:hover {
      color: #fff;
      background-color: #999;
    }
  }
}
</style>