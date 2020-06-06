<template>
  <div class="section books-express">
    <div class="hd">
      <h2>
        <span>新书速递</span>
        <span class="link-more">
          <a href="javascript:;">更多››</a>
        </span>
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
      <div class="carousel">
        <div class="slide-list" :style="{'left':guter}">
          <ul class="slide-item list-col">
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">大月亮及其他</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">陆源</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express1.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">大月亮及其他</a>
                </div>
                <div class="author">陆源</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">印画术</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日] 盐田明彦</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express2.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">映画术</a>
                </div>
                <div class="author">[日] 盐田明彦</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">假面的告白</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日] 三岛由纪夫</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express3.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">假面的告白</a>
                </div>
                <div class="author">[日] 三岛由纪夫</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">核心社会学思想家（第3版）</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] 罗布·斯通斯(Rob Stones)</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express4.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">核心社会学思想家（第3版）</a>
                </div>
                <div class="author">[英] 罗布·斯通斯(Rob Stones) 主编</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">两兄弟</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[巴西] 米尔顿·哈通</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express5.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">两兄弟</a>
                </div>
                <div class="author">[巴西] 米尔顿·哈通</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">大山里的小诗人</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">“是光”的孩子们</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express6.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">大山里的小诗人</a>
                </div>
                <div class="author">“是光”的孩子们</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">聋哑时代</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">双雪涛</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express7.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">聋哑时代</a>
                </div>
                <div class="author">双雪涛</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">意大利的冬天</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[法]儒勒·米什莱</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express8.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">意大利的冬天</a>
                </div>
                <div class="author">[法]儒勒·米什莱</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">银河系边缘的小失常</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[以色列] 埃特加·凯雷特</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express9.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">银河系边缘的小失常</a>
                </div>
                <div class="author">[以色列] 埃特加·凯雷特</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">非凡抄本寻访录</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英]克里斯托弗·德·哈梅尔</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express10.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">非凡抄本寻访录</a>
                </div>
                <div class="author">[英]克里斯托弗·德·哈梅尔</div>
              </div>
            </li>
          </ul>
          <ul class="slide-item list-col">
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">天路历程</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] 约翰·班扬</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express11.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">天路历程</a>
                </div>
                <div class="author">[英] 约翰·班扬</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">宫廷社会</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[德] 诺贝特·埃利亚斯</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express12.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">宫廷社会</a>
                </div>
                <div class="author">[德] 诺贝特·埃利亚斯</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">紫与黑</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] K.J.帕克</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express13.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">紫与黑</a>
                </div>
                <div class="author">[英] K.J.帕克</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">演化之旅</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[美] 罗伯特·克拉克 / 大卫·奎曼 / 约瑟夫·华莱士</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express14.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">演化之旅</a>
                </div>
                <div class="author">[美] 罗伯特·克拉克 / 大卫·奎曼 / 约瑟夫·华莱士</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">老鼠洞的大姐猫</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] 安东尼娅·巴伯 著 / [英] 妮科拉·贝利 绘</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express15.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">老鼠洞的大姐猫</a>
                </div>
                <div class="author">[英] 安东尼娅·巴伯 著 / [英] 妮科拉·贝利 绘</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">当代历史哲学和史学理论</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">王晴佳 / 张旭鹏</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express16.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">当代历史哲学和史学理论</a>
                </div>
                <div class="author">王晴佳 / 张旭鹏</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">战斗妖精·雪风 〈改〉</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日] 神林长平</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express17.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">战斗妖精·雪风 〈改〉</a>
                </div>
                <div class="author">[日] 神林长平</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">此时怀抱向谁开</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">袁一丹</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express18.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">此时怀抱向谁开</a>
                </div>
                <div class="author">袁一丹</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">烧纸</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[韩]李沧东</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express19.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">烧纸</a>
                </div>
                <div class="author">[韩]李沧东</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">阅读的故事</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">唐诺</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express20.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">阅读的故事</a>
                </div>
                <div class="author">唐诺</div>
              </div>
            </li>
          </ul>
          <ul class="slide-item list-col">
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">绝对不在场证明</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日] 大山诚一郎</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express21.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">绝对不在场证明</a>
                </div>
                <div class="author">[日] 大山诚一郎</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">现代拉丁美洲文学</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[美] 罗伯托·冈萨雷斯·埃切维里亚</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express22.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">现代拉丁美洲文学</a>
                </div>
                <div class="author">[美] 罗伯托·冈萨雷斯·埃切维里亚</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">时间龙</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">林燿德</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express23.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">时间龙</a>
                </div>
                <div class="author">林燿德</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">鲁迅的都市漫游</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日] 藤井省三</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express24.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">鲁迅的都市漫游</a>
                </div>
                <div class="author">[日] 藤井省三</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">东京二十三区女子</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">长江俊和</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express25.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">东京二十三区女子</a>
                </div>
                <div class="author">长江俊和</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">从那霸到上海</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">孙歌</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express26.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">从那霸到上海</a>
                </div>
                <div class="author">孙歌</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">寻欢作乐</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] W.萨默塞特·毛姆</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express27.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">寻欢作乐</a>
                </div>
                <div class="author">[英] W.萨默塞特·毛姆</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">史诗之城</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[美]库沙那瓦•乔杜里（Kushanava Choudhury）</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express28.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">史诗之城</a>
                </div>
                <div class="author">[美]库沙那瓦•乔杜里（Kushanava Choudhury）</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">隐痛</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[法]伊内丝·巴亚尔</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express29.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">隐痛</a>
                </div>
                <div class="author">[法]伊内丝·巴亚尔</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">DK世界家具大百科</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] 朱迪思·米勒</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express30.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">DK世界家具大百科</a>
                </div>
                <div class="author">[英] 朱迪思·米勒</div>
              </div>
            </li>
          </ul>
          <ul class="slide-item list-col">
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">暗室手册</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[美] 耶日·科辛斯基 (Jerzy Kosinski)</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express31.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">暗室手册</a>
                </div>
                <div class="author">[美] 耶日·科辛斯基 (Jerzy Kosinski)</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">岛屿传说</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[英] 马拉奇·泰莱克 / [英] 凯蒂·斯科特</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express32.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">岛屿传说</a>
                </div>
                <div class="author">[英] 马拉奇·泰莱克 / [英] 凯蒂·斯科特</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">民王</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[日]池井户润</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express33.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">民王</a>
                </div>
                <div class="author">[日]池井户润</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">混沌互渗</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[法]菲利克斯·加塔利</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express34.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">混沌互渗</a>
                </div>
                <div class="author">[法]菲利克斯·加塔利</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">鞋带</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[意] 多梅尼科·斯塔尔诺内</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express35.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">鞋带</a>
                </div>
                <div class="author">[意] 多梅尼科·斯塔尔诺内</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">文明、现代化、价值投资与中国</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">李录</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express36.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">文明、现代化、价值投资与中国</a>
                </div>
                <div class="author">李录</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">盲人之歌</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[墨西哥] 卡洛斯·富恩特斯</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express37.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">盲人之歌</a>
                </div>
                <div class="author">[墨西哥] 卡洛斯·富恩特斯</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">不要和你妈争辩</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[瑞典] 弗雷德里克·巴克曼</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express38.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">不要和你妈争辩</a>
                </div>
                <div class="author">[瑞典] 弗雷德里克·巴克曼</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">刑警罗宋</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">空城</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express39.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">刑警罗宋</a>
                </div>
                <div class="author">空城</div>
              </div>
            </li>
            <li>
              <div class="cover">
                <el-tooltip placement="right">
                  <div slot="content">
                    <h4 class="title" style="font-size: 14px;margin-bottom: 10px;">伽达默尔传：理解的善良意志</h4>
                    <p class="info" style="margin-bottom:6px">
                      <span class="author" style="font-size:13px">[加]让·格朗丹</span>
                      <span class="year">
                        &nbsp;&nbsp;&nbsp;/
                        2020-5
                        &nbsp;/&nbsp;
                      </span>
                      <span class="publisher">&nbsp;低音 • 北京联合出版公司</span>
                    </p>
                    <p class="abstract">
                      ★★★
                      普利策文学奖女作家安 • 泰勒巅峰之作。
                      关乎婚姻、家庭、自我，走出生活赋予的壳，女人再也不要“被定义”。
                      《纽约时报》畅销书，《今日美国》年度好书，《奥普拉》年度最佳书籍，巴诺书店季度选书。
                      ……………………
                      ◎ 编辑推荐
                      ★ 作者安 • 泰勒是曾获普利策文学奖的知名作家，在世界范围内有一大批忠实读者，本书是她古稀之年的巅峰之作；
                      ★ 本书关乎婚姻、家...
                    </p>
                  </div>
                  <a href="javascript:;">
                    <img src="@/assets/image/read_all/read_express/express40.jpg" alt />
                  </a>
                </el-tooltip>
              </div>
              <div class="info">
                <div class="titel">
                  <a href="javascript:;">伽达默尔传：理解的善良意志</a>
                </div>
                <div class="author">[加]让·格朗丹</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import prompt from "@/components/layout/prompt.vue";
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
      return `${-this.currentIndex * 725}px`;
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

<style >
/* 新书速递 */
.books-express .bd a:hover {
  background-color: #3377aa;
  color: white;
}
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
.slide-dots {
  display: inline-block;
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
h2 .link-more a:hover {
  background-color: #3377aa;
  color: white;
}
.slide-list {
  position: relative;
  width: 4050px;
  left: 0px;
  transition: left 0.2s;
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
  max-width: 115px;
  max-height: 172px;
}
.books-express .carousel {
  height: 489px;
}
.carousel {
  overflow: hidden;
  position: relative;
}
.list-col .info .titel {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.books-express .list-col .author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
}
.carousel .author {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.el-tooltip__popper.is-dark {
  width: 300px;
  padding: 15px;
  line-height: 1.62;
  background: #f1f1f1;
  color: #666;
}
</style>