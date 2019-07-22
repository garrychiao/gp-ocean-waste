<template>
  <el-container class="ocean-waste">
    <el-header height="" class="el-header-section1">
      <div class="header-bg"></div>
      <div class="header-content">
        主故事——字襯海邊圖: <br><br>
        小時候，每到夏天我要去海邊<br>
        堆沙堡、找貝殻，看看寄居蟹 躲在哪裡<br><br>
        現在到了海灘，小孩還是很高興 只是...他們用寶特瓶堆城堡，在海廢堆裡找螃蟹，<br>
        還有小鳥在塑膠垃圾上 產卵<br>
        孩子想脫鞋奔跑，我們卻擔心針頭、金屬碎片扎傷<br><br>
        臺灣還找得到祕境海灘嗎?<br><br>
        為了讓孩子享受我以前童年記憶裡的乾淨海灘<br>
        我決定繞臺灣一圈，找出最乾淨的海灘<br>
        跟我一起出發吧!
        <h2>海廢垃圾</h2>
      </div>
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card>
            陸地-河川/大排
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            遊客亂丟
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            海洋
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            掩埋場
          </el-card>
        </el-col>
      </el-row>
      <el-row class="biological-carousel">
        <el-col :span="22" :offset="1">
          <el-carousel :autoplay="false" arrow="hover" indicator-position="none" height="500px">
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
          </el-carousel>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
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
  .ocean-waste {
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
        text-align: left;
        z-index: 100;
        color: white;
      }
    }
    .el-main {
      .biological-carousel {
        padding: 40px 0;
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
