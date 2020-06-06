<template>
  <div>
    <!-- 搜素部分 -->
    <adnavMusic></adnavMusic>
    <div class="main-content">
      <!-- 左侧内容部分 -->
      <div class="artcile">
        <!-- 轮播图 -->
        <chart></chart>
        <!-- 本周流行音乐人 -->
        <common-card title="本周流行音乐人" fast="上升最快音乐人">
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
        <!-- 新碟榜 -->
        <billboard-card title="新碟榜" hot="最热" type1="华语" type2="欧美" type3="日韩" type4="单曲">
          <div class="artists clearfix">
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum1.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">how I'm feeling now</a>
                </div>
                <p class="music-person">查莉XCX Charli XCX</p>
                <div class="music-mark">
                  <span class="mark-num allstar35"></span>
                  <span class="music-num">7.7</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum2.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">사춘기집Ⅱ 꽃 본 나비</a>
                </div>
                <p class="music-person">脸红的思春期 볼빨간 사춘기</p>
                <div class="music-mark">
                  <span class="mark-num allstar35"></span>
                  <span class="music-num">7.8</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum3.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">The Book of Us : The Demon</a>
                </div>
                <p class="music-person">데이식스,DAY6</p>
                <div class="music-mark">
                  <span class="mark-num allstar40"></span>
                  <span class="music-num">8.6</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum4.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">美丽中国</a>
                </div>
                <p class="music-person">肖战,王丽达,蔡诚俊</p>
                <div class="music-mark">
                  <span class="mark-num allstar35"></span>
                  <span class="music-num">7.4</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum5.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">Set My Heart On Fire Immediately</a>
                </div>
                <p class="music-person">Perfume Genius</p>
                <div class="music-mark">
                  <span class="mark-num allstar40"></span>
                  <span class="music-num">8.5</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum6.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">新世界NEW WORLD</a>
                </div>
                <p class="music-person">华晨宇</p>
                <div class="music-mark">
                  <span class="mark-num allstar35"></span>
                  <span class="music-num">7.6</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum7.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">2020 刘若英陪你 献上录音专辑</a>
                </div>
                <p class="music-person">刘若英</p>
                <div class="music-mark">
                  <span class="mark-num allstar40"></span>
                  <span class="music-num">8.0</span>
                </div>
              </div>
            </div>
            <div class="album-item">
              <div class="inner">
                <a href="javascript:;">
                  <div class="cover">
                    <img src="@/assets/image/music/music_ablum/music_ablum8.jpg" alt />
                  </div>
                </a>
                <div class="music-name">
                  <a href="javascript:;">græ</a>
                </div>
                <p class="music-person">Moses Sumney</p>
                <div class="music-mark">
                  <span class="mark-num allstar40"></span>
                  <span class="music-num">8.7</span>
                </div>
              </div>
            </div>
          </div>
        </billboard-card>
        <!-- 近期热门歌单 -->
        <billboard-card title="近期热门歌单" hot="最热" type1="流行" type2="摇滚" type3="民谣" type4="原声">
          <div class="hot-content">
            <ul class="programme-content clearfix">
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song1.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">【古典钢琴】懒洋洋的午后慢悠悠的钢琴声</a>
                    <span class="desc">(20)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">LinXiaoYue</a>
                    <span>制作 |</span>
                    <span>203</span>
                    <span>收藏</span>
                  </p>
                  <p
                    class="intro"
                  >1.Moderato quasi andante - Molto meno vivo - Allegro molto - Alla marcia - Allegro - Presto from Sonata No. 9 in F Major for Piano, Op. 68 "Black Mass"</p>
                  <p
                    class="intro"
                  >2.50 Russian Folk Songs, TH 176: No. 3, Please, Try to Remember, My Darling</p>
                  <p
                    class="intro"
                  >3.Piano Sonata No. 3 "Hölderlin": I. Sogno. Andante con moto, fantastico</p>
                  <p class="intro">...</p>
                </div>
              </li>
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song2.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">日语｜演歌的美丽与哀愁</a>
                    <span class="desc">(23)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">停云</a>
                    <span>制作 |</span>
                    <span>158</span>
                    <span>收藏</span>
                  </p>
                  <p class="intro">1.修羅の花</p>
                  <p class="intro">2.赤いハンカチ</p>
                  <p class="intro">3.花のワルツ</p>
                  <p class="intro">...</p>
                </div>
              </li>
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song3.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">芬兰：金属音乐丛生的声音密林</a>
                    <span class="desc">(23)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">豆瓣FM官方</a>
                    <span>制作 |</span>
                    <span>124</span>
                    <span>收藏</span>
                  </p>
                  <p class="intro">1.Nothing Else Matters</p>
                  <p class="intro">2.Diamonds In The Sky</p>
                  <p class="intro">3.Close To The Flame</p>
                  <p class="intro">...</p>
                </div>
              </li>
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song4.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">「开心」一记音乐的处方药</a>
                    <span class="desc">(15)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">illchilli</a>
                    <span>制作 |</span>
                    <span>206</span>
                    <span>收藏</span>
                  </p>
                  <p class="intro">1.If We Have Each Other</p>
                  <p class="intro">2.Sweet Little Lies</p>
                  <p class="intro">3.My Heart</p>
                  <p class="intro">...</p>
                </div>
              </li>
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song5.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">爵士乐致敬黑色电影主题</a>
                    <span class="desc">(17)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">KREJERK</a>
                    <span>制作 |</span>
                    <span>139</span>
                    <span>收藏</span>
                  </p>
                  <p class="intro">1.Harlem Nocturn</p>
                  <p class="intro">2.Prowler</p>
                  <p class="intro">3.The Bookhouse Boys</p>
                  <p class="intro">...</p>
                </div>
              </li>
              <li class="programme-item">
                <div class="inner">
                  <a href="javascript:;" class="cover">
                    <img src="@/assets/image/music/hot_song/hot-song6.jpg" alt />
                    <span class="icon">
                      <i class="el-icon-caret-right"></i>
                    </span>
                  </a>
                  <h3>
                    <a href="javascript:;" class="program-title">容易上瘾的播放机</a>
                    <span class="desc">(23)</span>
                  </h3>
                  <p class="desc">
                    <a href="javascript:;">深⽔⽜</a>
                    <span>制作 |</span>
                    <span>73</span>
                    <span>收藏</span>
                  </p>
                  <p class="intro">1.Tell Me</p>
                  <p class="intro">2.2 U</p>
                  <p class="intro">3.Team</p>
                  <p class="intro">...</p>
                </div>
              </li>
            </ul>
          </div>
        </billboard-card>
      </div>
      <!-- 右侧内容部分 -->
      <div class="aside">
        <!-- 我要加入 -->
        <div class="jion">
          <div class="join-block">
            <h2>
              <a href="javascript:;">47297</a>
            </h2>
            <p>音乐人</p>
          </div>
          <div class="join-block">
            <h2>
              <a href="javascript:;">2734</a>
            </h2>
            <p>播客</p>
          </div>
          <div class="join-block last">
            <h2>
              <a href="javascript:;">1241</a>
            </h2>
            <p>厂牌</p>
          </div>
          <div class="clearfix"></div>
          <a href="javascript:;" class="button">我要加入</a>
        </div>
        <!-- 热门音乐分类 -->
        <classify-card title="热门音乐人分类">
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="javascript:;">流行</a>
                </td>
                <td>
                  <a href="javascript:;">轻音乐</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:;">摇滚</a>
                </td>
                <td>
                  <a href="javascript:;">古典</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:;">电子</a>
                </td>
                <td>
                  <a href="javascript:;">世界音乐</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:;">民谣</a>
                </td>
                <td>
                  <a href="javascript:;">说唱</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:;">爵士</a>
                </td>
                <td>
                  <a href="javascript:;">原声</a>
                </td>
              </tr>
            </tbody>
          </table>
        </classify-card>
        <!-- 本周单曲榜 -->
        <div class="side-block">
          <div class="header">
            <h2 class="Billboard clearfix">
              <a href="javascript:;" class="list">本周单曲榜</a>
              <a href="javascript:;" class="play">
                <i class="el-icon-caret-right"></i>播放全部
              </a>
            </h2>
          </div>
          <div class="content">
            <ul class="section-titles">
              <li class="on">
                <a href="javascript:;">最热</a>
              </li>
              <li>
                <a href="javascript:;">摇滚</a>
              </li>
              <li>
                <a href="javascript:;">民谣</a>
              </li>
              <li>
                <a href="javascript:;">流行</a>
              </li>
              <li>
                <a href="javascript:;">电子</a>
              </li>
              <li>
                <a href="javascript:;">说唱</a>
              </li>
            </ul>
            <ul class="hot-artist-songs">
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard1.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>Ride On (Paul MacFarlane + Odding 2017)</h3>
                <p>
                  <span>Paul MacFarlane / Odding</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>494</span>
                  <span>次播放</span>
                </p>
                <span class="rank">1</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard2.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>Jacques de Saint-Luc: Tombeau sur la mort de Mr Francois Ginter (arr. Guan)</h3>
                <p>
                  <span>Alternative for Baroque</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>279</span>
                  <span>次播放</span>
                </p>
                <span class="rank">2</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard3.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>月球背面的酒吧</h3>
                <p>
                  <span>爱科学的孩子 Kiz Love Creepshow</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>196</span>
                  <span>次播放</span>
                </p>
                <span class="rank">3</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard4.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>坝子，暖阳，山河水</h3>
                <p>
                  <span>P苔藓的白水日志</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>1208</span>
                  <span>次播放</span>
                </p>
                <span class="rank">4</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard5.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>喜欢你</h3>
                <p>
                  <span>阿洋鸽鸽</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>872</span>
                  <span>次播放</span>
                </p>
                <span class="rank">5</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard6.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>大裂</h3>
                <p>
                  <span>潜逃乐队</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>147</span>
                  <span>次播放</span>
                </p>
                <span class="rank">6</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard7.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>13（A+V+M）序-1</h3>
                <p>
                  <span>musk</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>649</span>
                  <span>次播放</span>
                </p>
                <span class="rank">7</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard8.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>海无忧</h3>
                <p>
                  <span>黄汉声</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>341</span>
                  <span>次播放</span>
                </p>
                <span class="rank">8</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard9.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>不用借口（伤情流行情歌4000）</h3>
                <p>
                  <span>博友文化音乐工作室</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>92</span>
                  <span>次播放</span>
                </p>
                <span class="rank">9</span>
              </li>
              <li class="artist-song">
                <div class="avatar">
                  <img src="@/assets/image/music/billboard/billboard10.jpg" alt />
                  <span class="icon">
                    <i class="el-icon-caret-right"></i>
                  </span>
                </div>
                <h3>邓赟崽说二百八十一</h3>
                <p>
                  <span>邓赟崽</span>
                  <span>&nbsp;/&nbsp;</span>
                  <span>48</span>
                  <span>次播放</span>
                </p>
                <span class="rank">10</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 豆瓣音乐250 -->
        <classify-card title="豆瓣音乐250" :hasline="true">
          <ul class="music-content">
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music1.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">如果你冷</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music2.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">日光倾城</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music3.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">如果看見地獄，我就不怕魔鬼</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music4.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">Now The Day Is Over</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music5.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">崇拜</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music6.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">黑豹</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music7.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">Wake Me Up When September Ends</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music8.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">(What's The Story) Morning Glory?</a>
              </div>
            </li>
            <li>
              <div class="cover">
                <a href="javascript:;">
                  <img
                    style="max-height: 100px;max-width: 80px;"
                    src="@/assets/image/music/blean_music/blean_music9.jpg"
                    alt
                  />
                </a>
              </div>
              <div class="title">
                <a href="javascript:;">Young For You</a>
              </div>
            </li>
          </ul>
        </classify-card>
        <!-- 豆瓣音乐客户端 -->
        <div class="app-music">
          <a class="entrance-link" href="javascript:;">
            <span class="app-icon blean-fm icon-fm"></span>
            <span class="main-title">豆瓣FM客户端</span>
            <span class="sub-title">让好音乐继续</span>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </div>
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
    .jion {
      margin-bottom: 30px;
      .join-block {
        float: left;
        width: 98px;
        height: 57px;
        background-color: #f5f7f8;
        text-align: center;
        margin-right: 2px;
        h2 {
          margin-top: 9px;
          line-height: 115%;
          border-bottom: none;
          padding: 0;
          margin-bottom: 0;
          a {
            font-size: 17px;
            line-height: 15px;
            color: #138a64;
            font-weight: bold;
            &:hover {
              color: #fff;
              background-color: #138a64;
            }
          }
        }
        p {
          font-size: 15px;
          color: #666;
          line-height: 2;
        }
      }
      .last {
        margin-right: 0px;
      }
      .button {
        display: block;
        height: 38px;
        background-color: #139d72;
        color: #fff;
        border-radius: 3px;
        border: 1px solid #138a64;
        text-align: center;
        line-height: 38px;
        font-size: 17px;
        margin-top: 3px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
.artists {
  vertical-align: top;
  padding: 15px 0 0 30px;
  background: #f5f7f8;
  text-align: center;
  margin-bottom: 40px;
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
  .album-item {
    display: inline-block;
    width: 25%;
    vertical-align: top;
    text-align: left;
    margin-bottom: 15px;
    .inner {
      display: inline-block;
      width: 135px;
      text-align: left;
      .music-name {
        display: inline-block;
        font-size: 15px;
        line-height: 14px;
        overflow: hidden;
        max-width: 100%;
        color: #138a64;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 14px 0 0 0;
        &:hover {
          color: white;
        }
        a {
          color: #138a64;
          &:hover {
            background-color: #138a64;
            color: white;
          }
        }
      }
      .music-person {
        color: #999;
        font-size: 13px;
        margin-bottom: 2px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
      }
      .cover {
        height: 135px;
        width: 135px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .music-mark {
        margin-top: -5px;
        .music-num {
          color: orange;
          font-size: 13px;
        }
      }
    }
  }
}
.hot-content {
  padding: 15px 0 15px 15px;
  background: #f5f7f8;
  text-align: left;
  .programme-content {
    margin-bottom: -15px;
    .programme-item {
      display: inline-block;
      box-sizing: border-box;
      width: 50%;
      padding: 0 15px 15px 0;
      .inner {
        position: relative;
        padding: 16px 13px 16px 63px;
        background: #fff;
        border: 1px solid #eee;
        font-size: 14px;
        color: #666;
        line-height: 19px;
        &:hover {
          .icon {
            background: #333;
            opacity: 0.8;
            .el-icon-caret-right {
              color: #fff;
            }
          }
        }
        .desc {
          font-size: 13px;
          color: #999;
          margin: 13px 0;
          line-height: 13px;
          a {
            font-size: 13px;
            color: #666;
            &:hover {
              background-color: #666;
              color: #fff;
            }
          }
          span {
            margin-left: 5px;
          }
        }
        h3 {
          font-size: 15px;
          line-height: 15px;
          font-weight: normal;
          .program-title {
            display: inline-block;
            color: #138a64;
            max-width: 184px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 15px;
            line-height: 15px;
            &:hover {
              background-color: #138a64;
              color: #fff;
            }
          }
          .desc {
            font-size: 13px;
            color: #999;
            vertical-align: top;
            line-height: 14px;
          }
        }
        .intro {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 200px;
        }
        .cover {
          display: block;
          position: absolute;
          top: 14px;
          left: 14px;
          img {
            width: 41px;
            height: 41px;
          }
        }
        .icon {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 41px;
          height: 41px;
          background-color: transparent;
          text-align: center;
          line-height: 41px;
          .el-icon-caret-right {
            font-size: 20px;
            margin-top: 10px;
            color: transparent;
          }
        }
      }
    }
  }
}
table {
  border-collapse: collapse;
  border: none;
  padding: 0;
  margin: 0;
}
td {
  width: 150px;
  border-top: 1px solid #f8f6f6;
  border-bottom: 1px solid #f8f6f6;
  border-right: 1px solid #f8f6f6;
  padding: 1px;
  a {
    display: block;
    padding-left: 6px;
    height: 36px;
    line-height: 36px;
    color: #138a64;
    font-size: 15px;
    &:hover {
      background-color: #f5f7f8;
    }
  }
}
.side-block {
  margin-top: 30px;
  .header {
    padding-bottom: 4px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e4e2e2;
    h2 {
      font-size: 15px;
      font-weight: normal;
      .list {
        display: inline-blcok;
        color: #222;
      }
      .play {
        display: block;
        float: right;
        background-color: #139d72;
        border: 1px solid #138a64;
        border-radius: 3px;
        font-size: 13px;
        color: #fff;
        line-height: 24px;
        width: 88px;
        height: 23px;
        text-align: center;
        &:hover {
          opacity: 0.8;
        }
        .el-icon-caret-right {
          position: relative;
          font-size: 20px;
          top: 3px;
        }
      }
    }
  }
}
.section-titles li {
  display: inline-block;
  font-size: 13px;
  &::before {
    content: "|";
    color: #222;
    padding: 0 3px;
  }

  a {
    color: #999;
    &:hover {
      background: transparent;
      color: #138a64;
      text-decoration: underline;
    }
  }
}
.section-titles .on {
  font-weight: bold;
  &::before {
    content: "";
    color: #222;
    padding: 0 3px;
  }
  a {
    color: #138a64;
  }
}
.hot-artist-songs {
  margin-bottom: 40px;
  .artist-song {
    position: relative;
    padding-left: 60px;
    height: 60px;
    &:hover {
      background-color: #f5f7f8;
      cursor: pointer;
      .avatar > .icon {
        background-color: #333;
        opacity: 0.8;
        .el-icon-caret-right {
          color: #fff;
        }
      }
    }
    .avatar {
      position: absolute;
      left: 2px;
      top: 6px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      line-height: 48px;
      text-align: center;
      overflow: hidden;
      img {
        width: 48px;
        height: 48px;
      }
      .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 48px;
        .el-icon-caret-right {
          font-size: 20px;
          color: transparent;
          margin-top: 15px;
        }
      }
    }
    h3 {
      font-weight: normal;
      font-size: 15px;
      color: #138a64;
      line-height: 14px;
      max-width: 200px;
      padding-top: 12px;
      padding-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      line-height: 13px;
      color: #999;
    }
    .rank {
      position: absolute;
      right: 10px;
      top: 0;
      height: 100%;
      font-size: 35px;
      line-height: 60px;
      color: #e6e6e6;
    }
  }
}
.music-content {
  width: 330px;
  margin-top: 12px;
  li {
    display: inline-block;
    width: 90px;
    margin-right: 15px;
    margin-bottom: 15px;
    text-align: center;
    vertical-align: top;
    .cover {
      margin-bottom: 8px;
    }
    .title {
      font-size: 13px;
      line-height: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #138a64;
      &:hover {
        color: white;
        a {
          background-color: #138a64;
          color: #fff;
        }
      }
      a {
        color: #138a64;
      }
    }
  }
}
.app-music {
  margin: 20px 0 15px 0;
  .entrance-link {
    display: block;
    position: relative;
    width: 280px;
    height: 50px;
    padding: 10px;
    background-color: #f1f1f1;
    .icon-fm {
      float: left;
      margin-right: 13px;
    }
    .main-title {
      display: block;
      font-weight: bold;
      padding-top: 9px;
      font-size: 16px;
      color: #204d92;
      line-height: 1;
    }
    .sub-title {
      display: block;
      color: #4e4e4e;
      font-size: 13px;
    }
    .el-icon-arrow-right {
      position: absolute;
      right: 5px;
      top: 50%;
      margin-top: -4px;
      color: #ccc;
      font-size: 13px;
      font-weight: bolder;
    }
  }
}
</style>