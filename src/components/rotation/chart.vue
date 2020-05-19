<template>
  <div class="show-banner">
    <div class="container">
      <ul class="slide-dots">
        <li>
          <a
            href="javascript:;"
            class="icon"
            :class="{active:this.currentIndex==0}"
            @click="changeColor(0)"
          ></a>
        </li>
        <li>
          <a
            href="javascript:;"
            class="icon"
            :class="{active:this.currentIndex==1}"
            @click="changeColor(1)"
          ></a>
        </li>
        <li>
          <a
            href="javascript:;"
            class="icon"
            :class="{active:this.currentIndex==2}"
            @click="changeColor(2)"
          ></a>
        </li>
        <li>
          <a
            href="javascript:;"
            class="icon"
            :class="{active:this.currentIndex==3}"
            @click="changeColor(3)"
          ></a>
        </li>
      </ul>
      <div class="slide-btns">
        <a href="javascript:;" @click="switchPage(1)"></a>
      </div>
      <ul class="slick-list clearfix" :style="{'left':guter}">
        <li class="slick-slide">
          <a href="javascript:;">
            <img class="show-pic" src="@/assets/image/music/banner/banner1.jpg" alt />
          </a>
        </li>
        <li class="slick-slide">
          <a href="javascript:;">
            <img class="show-pic" src="@/assets/image/music/banner/banner2.jpg" alt />
          </a>
        </li>
        <li class="slick-slide">
          <a href="javascript:;">
            <img class="show-pic" src="@/assets/image/music/banner/banner3.jpg" alt />
          </a>
        </li>
        <li class="slick-slide">
          <a href="javascript:;">
            <img class="show-pic" src="@/assets/image/music/banner/banner4.jpg" alt />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    switchPage(tab) {
      this.currentIndex += tab;
    },
    changeColor(index) {
      this.currentIndex = index;
    }
  },
  computed: {
    guter() {
      if (this.currentIndex > 3) {
        this.currentIndex = 0;
      }
      return `${-this.currentIndex * 675}px`;
    }
  }
};
</script>

<style scoped lang='less'>
.show-banner {
  margin-bottom: 30px;
  .container {
    position: relative;
    overflow: hidden;
    .slide-dots {
      position: absolute;
      bottom: 7px;
      right: 50%;
      margin-right: -25px;
      z-index: 2;
      li {
        display: inline-block;
        .icon {
          display: inline-block;
          width: 5px;
          height: 5px;
          text-align: center;
          color: transparent;
          font: 100 16px Arial;
          line-height: 16px;
          border-radius: 50%;
          margin-left: 10px;
          background-color: #f8f9f9;
          &.active {
            background-color: #139d72;
          }
        }
      }
    }
    .slide-btns {
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 0;
      z-index: 2;
      a {
        display: block;
        background-image: url(~@/assets/image/music/banner/banner_arrow.jpg);
        background-position: 36px 51px;
        width: 36px;
        height: 51px;
        margin-top: -25px;
        &:hover {
          background-position: 36px 0px;
        }
      }
    }
    .slick-list {
      position: relative;
      left: 0px;
      width: 6070px;
      transition: left 0.2s;
      .slick-slide {
        width: 675px;
        float: left;
        a .show-pic {
          width: 100%;
          height: 250px;
        }
      }
    }
  }
}
</style>