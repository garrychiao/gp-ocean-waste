<template>
  <div class="fishery-waste">
    <el-header height="" class="el-header-section1">
      <div class="header-bg"></div>
      <div class="header-content">
        <h2>fishery waste</h2>
      </div>
    </el-header>
    <el-main>

    </el-main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .fishery-waste {
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
      
    }
  }
</style>
