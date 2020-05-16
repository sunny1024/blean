<template>
  <div class="sell-well">
    <div class="hd">
      <h2>
        <span>畅销图书榜</span>
      </h2>
    </div>
    <div class="bd">
      <ul class="sell-well-log clearfix">
        <li class="nav-jd">
          <img src="@/assets/image/sell_well/sell-well1.jpg" alt />
          <span>京东</span>
        </li>
        <li class="nav-dd">
          <img src="@/assets/image/sell_well/sell_well2.jpg" alt />
          <span>当当</span>
        </li>
      </ul>
      <ul class="sell-well-col">
        <li
          class="item clearfix"
          v-for="(item,index) in info"
          :key="index"
          @mouseover="active(index)"
          :class="[currentIndex==index?'changecolor':'']"
        >
          <span class="rank-num">{{item.num}}</span>
          <div class="book-info">
            <a href="javascript:;">{{item.content}}</a>
            <div class="author">{{item.author}}</div>
          </div>
          <span class="buy-botton">{{item.buy}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      info: [
        {
          num: "1.",
          content: "奇先生妙小姐：神秘博士科幻冒险故事（全14册）",
          author: "(英) 罗杰·哈格里维斯/(英) 亚当·哈格里维斯",
          buy: "去购买"
        },
        {
          num: "2.",
          content: "你当像鸟飞往你的山",
          author: "[美] 塔拉·韦斯特弗",
          buy: "去购买"
        },
        {
          num: "3.",
          content: "断舍离（2019年新版）",
          author: "[日]山下英子",
          buy: "去购买"
        },
        {
          num: "4.",
          content: "人生海海",
          author: "麦家",
          buy: "去购买"
        },
        {
          num: "5.",
          content: "和爸妈游世界",
          author: "[美] 塔拉·韦斯特弗",
          buy: "去购买"
        },
        {
          num: "6.",
          content: "幼儿十万个为什么",
          author: "刘刚",
          buy: "去购买"
        },
        {
          num: "7.",
          content: "我们的中国",
          author: "",
          buy: "去购买"
        },
        {
          num: "8.",
          content: "和爸妈游中国",
          author: "",
          buy: "去购买"
        },
        {
          num: "9.",
          content: "苏世民：我的经验与教训",
          author: "(美) 苏世民",
          buy: "去购买"
        },
        {
          num: "10.",
          content:
            "思维训练游戏书：头脑风暴+极限挑战+疯狂大脑+逻辑能手+记忆专家+脑力之巅（套装共6册）",
          author: "",
          buy: "去购买"
        }
      ]
    };
  },
  methods: {
    active(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="less" scoped >
.sell-well-col {
  font-size: 14px;
  margin-bottom: 30px;
  .item {
    border-bottom: 1px dashed #ddd;
    padding-top: 5px;
    &.changecolor {
      background-color: #f9f9f6;
      .buy-botton {
        border: 1px solid #9b7c5e;
        color: #9b7c5e;
      }
    }
  }
}

.sell-well {
  margin-top: 30px;
}
h2 {
  font-size: 18px;
  padding-bottom: 3px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
}
.sell-well-log {
  margin-bottom: 15px;
}
.sell-well-log li {
  float: left;
  color: #ccc5bf;
  margin-right: 10px;
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
}
.sell-well-log .nav-jd {
  color: white;
  background: #9b7c5e;
}

.sell-well-log .nav-dd:hover {
  color: white;
  background: #9b7c5e;
}

.sell-well-log img {
  width: 18px;
  height: 18px;
}

.item .rank-num {
  float: left;
  width: 20px;
}
.item .book-info {
  float: left;
  width: 223px;
}
.item .book-info a:hover {
  background-color: #3377aa;
  color: white;
}
.item .author {
  color: #666;
  font-size: 13px;
  min-height: 19px;
}
.buy-botton {
  position: relative;
  float: right;
  right: 5px;
  top: 8px;
  color: #999;
  font-size: 13px;
  line-height: 100%;
  padding: 6px 8px;
  border: 1px solid transparent;
}
</style>
