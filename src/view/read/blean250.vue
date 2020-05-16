<template>
  <div class="book250">
    <h2>
      <span>豆瓣图书250</span>
      <span class="like-more">
        <a href="javascript">更多》</a>
      </span>
    </h2>
    <ul class="book-content clearfix">
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_1.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">历史深处的忧虑</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_2.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">不能承受的生命之轻</a>
        </div>
      </li>
      <li>
        <div class="book-pic">
          <a href="javascript:;">
            <img src="@/assets/image/book250/book250_3.jpg" alt />
          </a>
        </div>
        <div class="book-info">
          <a href="javascript:;">温柔的夜</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_4.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">解忧杂货店</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_5.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">西方哲学史（上卷）</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_6.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">沉默的大多数</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_7.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">骆驼祥子</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_8.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">射雕英雄传（全四册）</a>
        </div>
      </li>
      <li>
        <div class="book-pic"></div>
        <a href="javascript:;">
          <img src="@/assets/image/book250/book250_9.jpg" alt />
        </a>
        <div class="book-info">
          <a href="javascript:;">边城</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 18px;
  padding-bottom: 3px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}
h2 .like-more {
  font: 13px Arial, Helvetica, sans-serif;
}
h2 span:first-child {
  margin-right: 15px;
}

.book-content li {
  float: left;
  width: 85px;
  margin-right: 21.5px;
  margin-bottom: 10px;
  text-align: center;
}
.book-content li:nth-child(3n) {
  margin-right: 0;
}
.book-content li img {
  height: 127px;
  width: 85px;
}
.book-content .book-info {
  font-size: 13px;
  padding-top: 5px;
}
.book250 a:hover {
  color: white;
  background-color: #3377aa;
}
</style>