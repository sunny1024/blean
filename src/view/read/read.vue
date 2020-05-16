<template>
  <div>
    <!-- 导航栏 -->
    <adnav></adnav>
    <!-- 广告图 -->
    <div class="read-banner">
      <a href="javascript:;">
        <img src="@/assets/image/readpg/banner.jpg" alt />
      </a>
    </div>
    <!-- 主体内容 -->
    <div class="main-content">
      <!-- 左侧内容部分 -->
      <div class="artcile">
        <!-- 新书速递 -->
        <readexpress></readexpress>
        <!-- 广告图占位部分 -->
        <div class="ad-placeholder">
          <a href="javascript:;">
            <img src="@/assets/image/placeholder.jpg" alt />
          </a>
        </div>
        <!-- 图书信息部分 -->
        <readinformation></readinformation>
        <!-- 最受关注图书 -->
        <readconcern></readconcern>
        <!-- 豆瓣书店 -->
        <bleanbook></bleanbook>
        <!-- 电子图书 -->
        <ebooks></ebooks>
        <!-- 书评部分 -->
        <bookview></bookview>
      </div>
      <!-- 右侧内容部分 -->
      <div class="aside">
        <!-- 热门标签 -->
        <hottag></hottag>
        <!-- 畅销图书榜 -->
        <sellwell></sellwell>
        <!-- 图书250 -->
        <blean250></blean250>
        <!-- 联系我们 -->
        <contact></contact>
        <!-- 关注我们 -->
        <follow></follow>
      </div>
    </div>
  </div>
</template>


<script>
import adnav from "./adnav.vue";
import readexpress from "./readexpress.vue";
import readinformation from "./readinformation.vue";
import readconcern from "./readconcern.vue";
import bleanbook from "./bleanbook.vue";
import ebooks from "./ebooks.vue";
import bookview from "./bookview.vue";
import hottag from "./hottag.vue";
import sellwell from "./sellwell.vue";
import blean250 from "./blean250.vue";
import contact from "./contact.vue";
import follow from "./follow.vue";
export default {
  components: {
    adnav,
    readexpress,
    readinformation,
    readconcern,
    bleanbook,
    ebooks,
    bookview,
    hottag,
    sellwell,
    blean250,
    contact,
    follow
  },
  data() {
    return {
      currentIndex: 0
    };
  }
};
</script>

<style>
/* 广告图 */
.read-banner {
  width: 1040px;
  margin: 0 auto;
  margin-top: -18px;
  margin-bottom: 20px;
}

/* 主体部分 左侧边栏 */
.main-content {
  width: 1040px;
  margin: 0 auto;
}
.main-content a {
  color: #3377aa;
}
.main-content .artcile {
  display: inline-block;
  width: 675px;
  padding-right: 40px;
}
/* 广告占位部分 */
.ad-placeholder {
  margin: -30px 0 30px 0;
}
</style>