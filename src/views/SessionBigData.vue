<template>
  <div class="big-data">
    <el-header height="" class="el-header-section1">
      <div class="header-bg"></div>
      <div class="header-content">
        <h2>大數據分析</h2>
      </div>
    </el-header>
    <el-main>
      <!-- <el-carousel :autoplay="false" arrow="hover" indicator-position="none" height="500px">
        <el-carousel-item v-for="item in biological" :key="item.name">
          <div class="biological">
            <div class="biological__image">
              <el-image
                style="height: inherit"
                :src="item.url"
                fit="cover"></el-image>
            </div>
            <div class="biological__content">
              <span>{{ item.content }}</span>
            </div>
          </div>   
        </el-carousel-item>
      </el-carousel> -->
      <h3>乾淨的海灘 VS 垃圾海灘</h3>
      <div class="image-compare-div">
        <image-compare
          :before="right"
          :after="left"
          :padding="{ left: 50, right: 50 }"
        >
          <template v-slot:icon-left>
            <i class="el-icon-caret-left"></i>
          </template>
          <template v-slot:icon-right>
            <i class="el-icon-caret-right"></i>
          </template>
        </image-compare>
      </div>
    </el-main>
    
  </div>
</template>

<script>
import { biologicalImpact } from '@/utils/biological'
export default {
  data: () =>({
    left: require('@/assets/images/left.jpg'),
    right: require('@/assets/images/right.jpg')
  }),
  computed: {
    biological () {
      return biologicalImpact
    }
  }
}
</script>

<style lang="scss" scoped>
  .big-data {
    height: initial;
    width: 100vw;
    .el-header {
      overflow: hidden;
      position: relative;
      padding: 0;
      .header-bg {
        height: 70vh;
        position: relative;
        padding: 0;
        background-image: url('../assets/images/left.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        /* Add the blur effect */
        filter: blur(3px) grayscale(50%);
        -webkit-filter: blur(3px) grayscale(50%);
      }
      
      .header-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: left;
        z-index: 100;
        color: white;
      }
    }
    .el-main {
      .image-compare-div {
        margin-left: 15%;
        width: 70%;
        border: 2px solid red;
        overflow: hidden;
      }
    }
  }
  /deep/ .image-compare-handle-icon {
    &.left, &.right {
      padding: 0 !important
    }
  }
  .biological {
    width: inherit;
    height: inherit;
    display: flex;
    &__image {
      width: 70%;
      height: inherit;
    }
    &__content {
      width: 30%;
      height: 480px;
      padding: 10px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
      text-align: left;
      font-size: 20px;
      background-color: #2F3B46;
      border-left: 2px solid #e84118;
    }
  }
  
</style>
