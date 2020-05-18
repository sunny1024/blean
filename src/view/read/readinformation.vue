<template>
  <div class="section books-information">
    <div class="hd">
      <h2>
        <span>图书资讯</span>
      </h2>
      <div class="slide-controls">
        <ul class="slide-dots">
          <li>
            <a
              href="javascript:;"
              :class="{'active':this.currentIndex==0}"
              @click="Corresponding(0)"
            ></a>
          </li>
          <li>
            <a
              href="javascript:;"
              :class="{'active':this.currentIndex==1}"
              @click="Corresponding(1)"
            ></a>
          </li>
          <li>
            <a
              href="javascript:;"
              :class="{'active':this.currentIndex==2}"
              @click="Corresponding(2)"
            ></a>
          </li>
          <li>
            <a
              href="javascript:;"
              :class="{'active':this.currentIndex==3}"
              @click="Corresponding(3)"
            ></a>
          </li>
        </ul>
        <div class="slide-btns">
          <a href="javascript:;" @click="switchPage(-1)" style="color:white">‹</a>
          <a href="javascript:;" @click="switchPage(1)" style="color:white">›</a>
        </div>
      </div>
    </div>
    <div class="bd">
      <div class="slide-block">
        <ul class="slide-list col" :style="{'left':guter}">
          <li class="slide-item info-block">
            <a href="javascript:;">
              <div class="cover pct1"></div>
              <div class="content">
                <span class="title">日本人与天皇之间，存在着怎样的纽带和羁绊？</span>
                <span class="meta">浙江人民出版社</span>
                <p
                  class="abstract"
                >[菊花王朝] 文|胡炜权 2019年4月30日与5月1日，注定成为日本现代史上重要的两个日子。 为什么呢？这不仅是因为在位31年的平成天皇打破近代天皇制的“终身在位”原则，成为明治维新以来首位生前退位的天皇，写下历...</p>
              </div>
            </a>
          </li>
          <li class="slide-item info-block">
            <a href="javascript:;">
              <div class="cover pct2"></div>
              <div class="content">
                <span class="title">带着醉意出生，我忘掉所有悲伤</span>
                <span class="meta">读客熊猫君</span>
                <p
                  class="abstract"
                >文/戴文子 每本书都有自己的气质。 如果你热衷旷野、流浪、生锈的铁片、被踩成泥的雪、威士忌的书籍气质，如果你同样深陷在生活的苟且里无法自拔，那么你该读点硬汉派侦探小说，就权当在雨夜，坐在昏暗、肮脏的小...</p>
              </div>
            </a>
          </li>
          <li class="slide-item info-block">
            <a href="javascript:;">
              <div class="cover pct3"></div>
              <div class="content">
                <span class="title">双雪涛完整新版《聋哑时代》：压抑了十几年的故事</span>
                <span class="meta">理想国</span>
                <p
                  class="abstract"
                >最近几天，“青春”又一次成了热搜，老中青，都积极投入了这场讨论：前浪，到底该以什么样的姿态跟后浪相处，说什么样的话、做什么样的事？看不过来的帖子、辨析不清的观点，反而模糊了彼此真实的模样。还是先读...</p>
              </div>
            </a>
          </li>
          <li class="slide-item info-block">
            <a href="javascript:;">
              <div class="cover pct4"></div>
              <div class="content">
                <span class="title">美好故事的结局并非都是婚姻</span>
                <span class="meta">谷立立</span>
                <p
                  class="abstract"
                >by 谷立立 放眼当今西方文坛，大概很难找到像拜厄特这样的女作家了。她的小说常常被评论界贴上“新维多利亚小说”的标签。但如果按照19世纪盛行的女性主义写作标准来评判她的写作，恰恰又是不妥当的。《静物》是......</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    guter() {
      if (this.currentIndex > 3) {
        this.currentIndex = 0;
      }
      if (this.currentIndex < 0) {
        this.currentIndex = 3;
      }
      return `${-this.currentIndex * 675}px`;
    }
  },
  methods: {
    switchPage(tab) {
      this.currentIndex += tab;
    },
    Corresponding(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
/* 图书信息 */
.slide-controls {
  float: right;
  margin-top: -42px;
}
.slide-controls .slide-btns {
  display: inline-block;
}
.slide-controls .slide-btns a {
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  color: #fff;
  font: 100 16px Arial;
  line-height: 16px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: #9b9a8e;
}
.slide-controls .slide-btns a:hover {
  opacity: 0.8;
}

.slide-controls .slide-dots .active {
  background-color: #9b9a8e;
}
.slide-dots li {
  display: inline;
}
.slide-dots li > a {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #dfdfdf;
  margin-right: 8px;
}
.section {
  margin-bottom: 50px;
}

.slide-list {
  position: relative;
  width: 4050px;
  left: 0px;
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

.books-express .carousel {
  height: 489px;
}

.slide-dots {
  display: inline-block;
}

.slide-dots li > a {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #dfdfdf;
  margin-right: 8px;
}
.section {
  margin-bottom: 50px;
}
.hd h2 span:first-child {
  margin-right: 15px;
}
.books-information .hd h2 {
  border: none;
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
.slide-list {
  position: relative;
  width: 4050px;
  left: 0px;
  transition: left 0.2s;
}

/* 图书信息内容主体 */
.slide-block {
  overflow: hidden;
}
.col .content {
  margin-right: 116px;
}
.col .slide-item {
  border: 1px solid #ddd;
  padding: 25px;
  width: 675px;
  box-sizing: border-box;
}
.col .title {
  font-size: 15px;
  color: #37a;
  line-height: 1.38;
}
.col .meta {
  display: block;
  color: #aaa;
  font-size: 13px;
  margin-top: 8px;
  line-height: 1;
}
.col .abstract {
  font-size: 13px;
  color: #494949;
  margin-top: 8px;
  line-height: 1.5;
}
.info-block .cover {
  float: right;
  width: 96px;
  height: 96px;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.info-block .pct1 {
  background-image: url("~@/assets/image/read_all/read_information/read_information1.jpg");
}
.info-block .pct2 {
  background-image: url("~@/assets/image/read_all/read_information/read_information2.jpg");
}
.info-block .pct3 {
  background-image: url("~@/assets/image/read_all/read_information/read_information3.jpg");
}
.info-block .pct4 {
  background-image: url("~@/assets/image/read_all/read_information/read_information4.jpg");
}
</style>