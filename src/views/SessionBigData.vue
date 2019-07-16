<template>
  <div class="big-data">
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
    <el-card shadow="never">
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
    </el-card>
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
