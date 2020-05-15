<template>
  <div class="section market-books">
    <div class="hd">
      <h2>
        <span>豆瓣书店</span>
        <span class="link-more">
          <a href="javascript:;">查看全部››</a>
        </span>
      </h2>
    </div>
    <div class="bd">
      <div class="top">
        <div class="cover">
          <a href="javascript:;">
            <div class="pic"></div>
          </a>
        </div>
        <div class="book_head_info">
          <p class="title">
            我会在六月六十日回来
            <span class="price">￥149.00</span>
            <span class="free_delivery">／包邮</span>
          </p>
          <p class="book_desc">埃梅近百个怪诞故事，法语大家李玉民译作</p>
        </div>
      </div>
      <ul class="slide-item list-col">
        <li>
          <div class="cover">
            <a href="javascript:;">
              <img src="@/assets/image/blean_book/blean_book1.jpg" alt />
            </a>
          </div>
          <div class="info">
            <div class="titel">
              <a href="javascript:;">《银河系边缘的小失常》《想成为神的巴士司机》</a>
            </div>
            <div class="price">￥68.00</div>
          </div>
        </li>
        <li>
          <div class="cover">
            <a href="javascript:;">
              <img src="@/assets/image/blean_book/blean_book2.jpg" alt />
            </a>
          </div>
          <div class="info">
            <div class="titel">
              <a href="javascript:;">烧纸</a>
            </div>
            <div class="price">￥52.00</div>
          </div>
        </li>
        <li>
          <div class="cover">
            <a href="javascript:;">
              <img src="@/assets/image/blean_book/blean_book3.jpg" alt />
            </a>
          </div>
          <div class="info">
            <div class="titel">
              <a href="javascript:;">万有引力之虹</a>
            </div>
            <div class="price">￥108.00</div>
          </div>
        </li>
        <li>
          <div class="cover">
            <a href="javascript:;">
              <img src="@/assets/image/blean_book/blean_book4.jpg" alt />
            </a>
          </div>
          <div class="info">
            <div class="titel">
              <a href="javascript:;">六个道德故事</a>
            </div>
            <div class="price">￥45.00</div>
          </div>
        </li>
        <li>
          <div class="cover">
            <a href="javascript:;">
              <img src="@/assets/image/blean_book/blean_book5.jpg" alt />
            </a>
          </div>
          <div class="info">
            <div class="titel">
              <a href="javascript:;">美与暴烈：三岛由纪夫传</a>
            </div>
            <div class="price">￥44.00</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  margin-bottom: 50px;
}
.market-books .hd h2 {
  margin-top: 20px;
}
.hd h2 span:first-child {
  margin-right: 15px;
}
h2 {
  font-size: 18px;
  padding-bottom: 3px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}
h2 .link-more {
  font: 13px Arial, Helvetica, sans-serif;
}

.slide-item {
  width: 700px;
  display: inline-block;
  vertical-align: top;
}
.list-col {
  margin: 0 25px 0 0;
}
.slide-item li {
  display: inline-block;
  margin: 0 25px 15px 0;
}
.list-col li {
  width: 115px;
}
.slide-item li img {
  display: block;
  width: 102px;
  height: 140px;
}
.books-express .carousel {
  height: 489px;
}
.carousel {
  overflow: hidden;
  position: relative;
}
.list-col .info .titel {
  font-size: 13px;
  overflow: hidden;
  line-height: 1.1;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-col .info .price {
  color: #4b4b4b;
  font-size: 13px;
  vertical-align: baseline;
}
.market-books .top {
  display: flex;
  margin-bottom: 30px;
  vertical-align: top;
}
.cover .pic {
  background-image: url("~@/assets/image/blean_book/blean_book.jpg");
  width: 130px;
  height: 172px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cover {
  display: inline-block;
  margin-right: 20px;
}
.book_head_info {
  display: inline-block;
}
.book_head_info .title {
  font-size: 23px;
  margin: 23px 0 6px 0;
  line-height: 23px;
}
.book_head_info .title .price {
  font-size: 17px;
  color: #e76648;
  margin-left: 17px;
}
.book_head_info .title .free_delivery {
  font-size: 14px;
  color: #e76648;
  margin-left: 10px;
  position: relative;
  top: -1px;
}
.book_head_info .book_desc {
  color: #9b9b9b;
  font-size: 14px;
  line-height: 25px;
}
</style>