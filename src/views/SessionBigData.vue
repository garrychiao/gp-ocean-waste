<template>
  <div class="big-data">
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
</template>

<script>
export default {
    data: () =>({
    left: require('../assets/left.jpg'),
    right: require('../assets/right.jpg')
  })
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
</style>
