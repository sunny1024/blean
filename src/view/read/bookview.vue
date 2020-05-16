<template>
  <div class="section book_view">
    <div class="hd">
      <h2>
        <span>最受欢迎的书评</span>
        <span class="link-more">
          <a href="javascript:;">虚构类››</a>
          <a href="javascript:;">非虚构类››</a>
        </span>
      </h2>
    </div>
    <div class="bd">
      <div class="review">
        <div class="review-hd">
          <a href="javascript:;">
            <img src="@/assets/image/bookview/bookview1.jpg" alt />
          </a>
        </div>
        <div class="review-bd">
          <h3>
            <a href="javascript:;">建 政 圈 现 状</a>
          </h3>
          <div class="review-meta">
            <a href="javascript:;">早见堇</a>
            评论
            <a href="javascript:;">《群魔》</a>
            <span class="mark-num allstar50"></span>
          </div>
          <div class="review-content">
            陀敏锐的觉察到启蒙思想的流弊，这些高谈阔论的激进分子(无论左翼还是右翼)对于广大同胞可以说是丝毫不关心，将其视为虫蟲，这些人唯一的价值就是被他们强制自由，灌输“正确”的意识形态后，这种思潮背后蕴藏的...
            <a
              href="javascript:;"
            >(全文)</a>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="review-hd">
          <a href="javascript:;">
            <img src="@/assets/image/bookview/bookview2.jpg" alt />
          </a>
        </div>
        <div class="review-bd">
          <h3>
            <a href="javascript:;">个别译文勘误</a>
          </h3>
          <div class="review-meta">
            <a href="javascript:;">玄嘗譯</a>
            评论
            <a href="javascript:;">《形而上学》</a>
            <span class="mark-num allstar50"></span>
          </div>
          <div class="review-content">
            Α卷（第一卷） 982a下 脚注中theoreti kai当为一个单词。 Β卷（第三卷） 996b25 人们认为对这些原因中第一种的思辨属于不同的科学（ὥστ’ ἄλλης ἂν δόξειεν ἐπιστήμη...
            <a
              href="javascript:;"
            >(全文)</a>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="review-hd">
          <a href="javascript:;">
            <img src="@/assets/image/bookview/bookview3.jpg" alt />
          </a>
        </div>
        <div class="review-bd">
          <h3>
            <a href="javascript:;">【推迷会鉴书团】东野圭吾的雪国之“结”</a>
          </h3>
          <div class="review-meta">
            <a href="javascript:;">展颜</a>
            评论
            <a href="javascript:;">《雪国之劫》</a>
            <span class="mark-num allstar40"></span>
          </div>
          <div class="review-content">
            东野圭吾痴迷滑雪运动已经是众人皆知，而这个爱好也被他拿来融入自己的创作之中，而这本《雪国之劫》（此前另有《白银杰克》、《劫持白银》等译名）则是他“滑雪运动系列”的开山之作，虽然没有“加贺恭一郎”或...
            <a
              href="javascript:;"
            >(全文)</a>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="review-hd">
          <a href="javascript:;">
            <img src="@/assets/image/bookview/bookview4.jpg" alt />
          </a>
        </div>
        <div class="review-bd">
          <h3>
            <a href="javascript:;">01 处理三明治和烟熏鸭肉，包括和欲望有关的一切</a>
          </h3>
          <div class="review-meta">
            <a href="javascript:;">fushia</a>
            评论
            <a href="javascript:;">《一个知识女性的思考系列》</a>
            <span class="mark-num allstar50"></span>
          </div>
          <div class="review-content">
            “某一天他坐在办公室里，正在机械地咀嚼附近商店里买来的处理奶酪三明治，突然想到自己其实可以吃更好的东西。”随后他开始对烹调产生兴趣，喜欢并热衷于研究精美的食物，比如在花园中种下少见的药草和小众的蔬...
            <a
              href="javascript:;"
            >(全文)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.book_view a:hover {
  background: #3377aa;
  color: white;
}
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
}
h2 .link-more {
  font: 13px Arial, Helvetica, sans-serif;
}
h2 span a:first-child {
  margin-right: 15px;
}
.review {
  display: flex;
  margin-top: 15px;
  padding-bottom: 25px;
  margin-bottom: 24px;
  vertical-align: top;
  border-bottom: 1px solid #eaeaea;
}
.review .review-hd img {
  width: 75px;
}
.review-hd {
  display: inline-block;
  margin-right: 19px;
}
.review-bd h3 {
  font-size: 15px;
  color: #3377aa;
  font-weight: normal;
}
.review-bd .review-meta {
  padding: 5px 0;
  color: #666;
  font-size: 13px;
}
.review-meta a {
  color: #666;
}
.review-bd .review-content {
  font-size: 13px;
  line-height: 20px;
}
.review-meta .mark-num {
  margin-left: 5px;
}
</style>