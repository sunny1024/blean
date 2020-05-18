<template>
  <div>
    <adnavMusic></adnavMusic>
    <div class="main-content">
      <div class="artcile">
        <chart></chart>
        <common-card title="本周流行音乐人" fast="dsdsd">
          <div class="artists clearfix">
            <div
              class="artist-item"
              v-for="(item,index) in items"
              :key="index"
              @mouseover="change(index)"
            >
              <div class="cover">
                <a href="javascript:;" class="artist-photo" :class="item.bgClass"></a>
                <div class="over-out">
                  <div class="content">
                    <p>{{item.title1}}</p>
                    <p>{{item.title2}}</p>
                    <p>{{item.title3}}</p>
                    <p>{{item.title4}}</p>
                  </div>
                </div>
                <div class="paly-bottom">
                  <div class="triangle"></div>
                </div>
              </div>
              <div class="music-name">
                <a href="javascript:;">{{item.song}}</a>
              </div>
              <p class="music-type">{{item.type}}</p>
            </div>
          </div>
        </common-card>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
import adnavMusic from "@/components/adnav/adnav_music.vue";
import chart from "@/components/rotation/chart.vue";
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          song: "Odding",
          type: "民谣 Folk",
          title1: "在四月的湖上",
          title2: "今夜我又这样唱起歌",
          title3: "摇篮曲",
          title4: "11.假若明天来临（特别版）",
          bgClass: "bgPic1"
        },
        {
          song: "musk",
          type: "民谣 Folk",
          title1: "13（A+V+M）序-1",
          title2: "in may live 2018.5.20.MP",
          title3: "嵐（Acoustic+）",
          title4: "july（Acoustic）",
          bgClass: "bgPic2"
        },
        {
          song: "苔藓的白水日志",
          type: "原声 Soundtrack",
          title1: "坝子，暖阳，山河水",
          title2: "Intro-在黄桷垭写生",
          title3: "光中浮尘",
          title4: "Page#3-追日人的赞歌",
          bgClass: "bgPic3"
        },
        {
          song: "Alternative for Baroque",
          type: "轻音乐 Easy Listening",
          title1: "Jacques de Saint-Luc: ",
          title2:
            "「就非常的切利了」（B-C: Récit pour l'Élévation en E#） || 請不要分享到豆瓣以外謝謝 ",
          title3: "Bootleg10Apr_BWV12_Sinfonia_arr_Gwan",
          title4:
            "(Tephropolis, 2013) Bach: Liebster Jesu, wir sind hier BWV731",
          bgClass: "bgPic4"
        },
        {
          song: "Cottonseed",
          type: "流行 Pop",
          title1: "听",
          title2: "Silent all these years cover",
          title3: "Across the Ocean (Acoustic)",
          title4: "Orchestral Rondo（120113）",
          bgClass: "bgPic5"
        },
        {
          song: "陆元操",
          type: "民谣 Folk",
          title1: "兩個我-怡如君（EL）",
          title2: "我爱过的都老了",
          title3: "假如我和你背对背",
          title4: "两个我",
          bgClass: "bgPic6"
        },
        {
          song: "plant cell",
          type: "摇滚 Rock",
          title1: "Snow and Luculia (Long Version)",
          title2: "Spirit who dwells on or in a mountain and forest",
          title3: "PINOT NOIR（黑比诺）",
          title4: "Magenta",
          bgClass: "bgPic7"
        },
        {
          song: "B.B.Queen",
          type: "轻音乐 Easy Listening",
          title1: "Finally We Can Go Out (with GarageBand)",
          title2: "出口",
          title3: "也许",
          title4: "Durham Flyway (with GarageBand)",
          bgClass: "bgPic8"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.currentIndex = index;
    }
  },
  components: {
    adnavMusic,
    chart
  }
};
</script>

<style scoped lang='less'>
.main-content {
  width: 1040px;
  margin: 0 auto;
  .artcile {
    display: inline-block;
    width: 675px;
    padding-right: 40px;
  }
  .aside {
    float: right;
    width: 300px;
  }
}
.artists {
  vertical-align: top;
  padding: 15px 0 0 30px;
  background: #f5f7f8;
  text-align: center;
  .artist-item {
    float: left;
    width: 130px;
    margin-right: 30px;
    .cover {
      width: 125px;
      height: 125px;
      position: relative;
      border: 5px solid #fff;
      box-shadow: 0 0 0 1px #dfdcdc;
      margin-bottom: 10px;

      &:hover {
        .over-out {
          display: block;
        }
        .paly-bottom {
          background-color: #fff;
          .triangle {
            border-color: transparent transparent transparent #333;
          }
        }
      }

      .over-out {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background: black;
        opacity: 0.7;
        color: white;
        // &.hover {
        //   display: block;
        // }
        .content {
          padding: 14px;
          p {
            display: block;
            text-align: left;
            font-size: 13px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .paly-bottom {
        position: relative;
        left: 96px;
        bottom: 40px;
        width: 20px;
        height: 20px;
        background-color: #333;
        opacity: 0.85;
        border-radius: 50%;
        // &.hover {
        //   background-color: #fff;
        //   .triangle {
        //     border-color: transparent transparent transparent #333;
        //   }
        // }
        .triangle {
          position: absolute;
          top: 50%;
          left: 70%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          border: 6px solid;
          border-color: transparent transparent transparent #fff;
        }
      }
      .artist-photo {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center top;
        &.bgPic1 {
          background-image: url(~@/assets/image/music/music_popular/music_popular1.jpg);
        }
        &.bgPic2 {
          background-image: url(~@/assets/image/music/music_popular/music_popular2.jpg);
        }
        &.bgPic3 {
          background-image: url(~@/assets/image/music/music_popular/music_popular3.jpg);
        }
        &.bgPic4 {
          background-image: url(~@/assets/image/music/music_popular/music_popular4.jpg);
        }
        &.bgPic5 {
          background-image: url(~@/assets/image/music/music_popular/music_popular5.jpg);
        }
        &.bgPic6 {
          background-image: url(~@/assets/image/music/music_popular/music_popular6.jpg);
        }
        &.bgPic7 {
          background-image: url(~@/assets/image/music/music_popular/music_popular7.jpg);
        }
        &.bgPic8 {
          background-image: url(~@/assets/image/music/music_popular/music_popular8.jpg);
        }
      }
    }
    .music-name {
      font-size: 15px;
      margin-top: 5px;
      line-height: 150%;
      a {
        color: #138a64;
      }
    }
    .music-type {
      font-size: 13px;
      color: #999;
      margin-bottom: 18px;
    }
  }
}
</style>