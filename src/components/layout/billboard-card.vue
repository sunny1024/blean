<template>
  <div class="popular-person">
    <div class="popular-top">
      <h2 class="popular-title">
        <a href="javascript:;">
          <div class="popular-week">{{title}}</div>
        </a>
        <a href="javascript:;">
          <span class="hot-top">{{hot}}</span>
        </a>
        <span class="placeholder">|</span>
        <a href="javascript:;">
          <span class="fast">{{type1}}</span>
        </a>
        <span class="placeholder">|</span>
        <a href="javascript:;">
          <span class="fast">{{type2}}</span>
        </a>
        <span class="placeholder">|</span>
        <a href="javascript:;">
          <span class="fast">{{type3}}</span>
        </a>
        <span class="placeholder">|</span>
        <a href="javascript:;">
          <span class="fast">{{type4}}</span>
        </a>
        <a href="javascript:;">
          <span class="more">更多</span>
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
    hot: {
      type: String,
      default: "默认标签"
    },
    type1: {
      type: String,
      default: "默认标签"
    },
    type2: {
      type: String,
      default: "默认标签"
    },
    type3: {
      type: String,
      default: "默认标签"
    },
    type4: {
      type: String,
      default: "默认标签"
    }
  }
};
</script>

<style lang='less'  scoped >
.popular-title {
  position: relative;
  font-weight: normal;
  font-size: 17px;
  border-bottom: 2px solid #02a682;
  margin-right: 3px;
  a {
    color: #222;
  }
  .popular-week {
    display: inline-block;
    margin-right: 20px;
  }
  span {
    font-size: 13px;
    color: #999;
  }
  .placeholder {
    margin-right: 3px;
  }
  .hot-top {
    color: #138a64;
    font-weight: bold;
    &:hover {
      color: #138a64;
      text-decoration: underline;
    }
  }
  .fast {
    color: #999;
    &:hover {
      color: #138a64;
      text-decoration: underline;
    }
  }
  .more {
    position: absolute;
    right: 0;
    bottom: 3px;
    &:hover {
      color: #fff;
      background-color: #999;
    }
  }
}
</style>