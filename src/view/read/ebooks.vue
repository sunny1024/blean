<template>
  <div class="section ebook-area">
    <div class="hd">
      <h2>
        <span>电子图书</span>
        <span class="link-more">
          <a href="javascript:;">查看全部››</a>
        </span>
      </h2>
    </div>
    <div class="bd">
      <div class="sub-section">
        <div class="sub-hd">
          <div class="hd">
            <h3>
              <span>热门电子图书</span>
              <span class="link-more">
                <a href="javascript:;">更多››</a>
              </span>
            </h3>
          </div>
        </div>
        <div class="sub-bd">
          <ul class="slide-item list-col">
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook1.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">鹌鹑</a>
                </div>
                <div class="price">15.99元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook2.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">苏世民：我的经验与教训</a>
                </div>
                <div class="price">68.60元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook3.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">天生有罪：特雷弗·诺亚的变色人生</a>
                </div>
                <div class="price">15.99元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook4.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">想见你（影视剧原著小说）</a>
                </div>
                <div class="price">24.90元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook5.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">复眼的映像：我与黑泽明</a>
                </div>
                <div class="price">39.99元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook6.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">小津安二郎剧本集</a>
                </div>
                <div class="price">39.99元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook7.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">新名字的故事</a>
                </div>
                <div class="price">42.00元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook8.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">J</a>
                </div>
                <div class="price">35.00元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook9.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">伦敦人</a>
                </div>
                <div class="price">28.99元</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img src="@/assets/image/ebook/ebook10.jpg" alt />
                </a>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">护士的故事</a>
                </div>
                <div class="price">29.99元</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
/* 电子图书 */
.ebook-area a:hover {
  background-color: #3377aa;
  color: white;
}
.section {
  margin-bottom: 50px;
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
.slide-item .cover {
  margin-bottom: 7px;
}
.slide-list .list-col {
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
  width: 106px;
  height: 158px;
}

.list-col .info .titel {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sub-hd .hd {
  margin-bottom: 10px;
}

h3 .link-more {
  font: 15px Arial, Helvetica, sans-serif;
}
.sub-hd h3 span:first-child {
  font-size: 15px;
  font-weight: normal;
  margin-right: 13px;
}
.slide-item .info .price {
  font-size: 13px;
  color: #4b4b4b;
}
</style>