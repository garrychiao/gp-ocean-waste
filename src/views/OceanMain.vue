<template>
  <el-container>
      <el-main>Main</el-main>
      <el-aside width="10em">NavBar</el-aside>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/deep/ .el-aside {
  background-color: #2F3B46;
  color: #FFF;
  height: 100%;
  width: 10em;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
}
/deep/ .el-main {
  padding-right: 10em;
  position: relative;
  z-index: 1;
  height: 100vh;
  padding: 0;
}
</style>
