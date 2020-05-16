<template>
  <div class="hot-tag">
    <h2>
      <span>热门标签</span>
      <span class="like-more">
        <a href="javascript">所有热门标签》</a>
      </span>
    </h2>
    <ul class="hot-tags-col">
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">文学</li>
          <li>
            <a href="javascript:;" class="tag">小说</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">随笔</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">日本文学</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">散文</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">诗歌</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">童话</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">名著</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">港台</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">流行</li>
          <li>
            <a href="javascript:;" class="tag">漫画</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">推理</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">绘本</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">青春</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">科幻</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">言情</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">奇幻</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">武侠</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">文化</li>
          <li>
            <a href="javascript:;" class="tag">历史</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">哲学</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">传记</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">设计</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">建筑</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">电影</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">回忆录</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">音乐</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">生活</li>
          <li>
            <a href="javascript:;" class="tag">旅行</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">励志</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">教育</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">职场</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">美食</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">灵修</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">健康</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">家居</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">经管</li>
          <li>
            <a href="javascript:;" class="tag">经济学</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">管理</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">商业</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">金融</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">营销</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">理财</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">股票</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">企业史</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
      <li class="hot-classify">
        <ul class="clearfix">
          <li class="title">科技</li>
          <li>
            <a href="javascript:;" class="tag">科普</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">互联网</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">编程</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">交互设计</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">算法</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">通信</a>
          </li>
          <li>
            <a href="javascript:;" class="tag">神经网络</a>
          </li>
          <li class="last">
            <a href="javascript:;" class="tag" style="color:#aaa">更多»</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot-tag {
  margin-top: 30px;
}
h2 {
  font-size: 18px;
  padding-bottom: 3px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}
h2 a:hover {
  background-color: #3377aa;
  color: white;
}
h2 .like-more {
  font: 13px Arial, Helvetica, sans-serif;
}
.hot-tag h2 span:first-child {
  margin-right: 15px;
}

.hot-tags-col .hot-classify {
  margin-bottom: 15px;
  border-bottom: 1px dashed #ddd;
}
.hot-tags-col ul {
  width: 290px;
}
.hot-tags-col ul .title {
  display: block;
  float: none;
  margin-bottom: 0;
}
.hot-tags-col ul li {
  float: left;
  font-size: 13px;
  margin-bottom: 5px;
}
.hot-tags-col ul .tag {
  background: #f5f5f5;
  margin-right: 3px;
  padding: 2px 10px 0;
  display: inline-block;
}
.hot-tags-col ul .tag:hover {
  background-color: #e8e8e8;
  color: #37a;
}
.hot-tags-col .last .tag {
  color: #f5f5f5;
}
</style>