<template>
  <el-container>
    <el-header height="36px" class="hidden-sm-and-up"></el-header>
    <el-main>Main</el-main>
    <el-aside width="10em" class="hidden-sm-and-down">
      <MainNavBar></MainNavBar>
    </el-aside>
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
  display: flex;
  align-items: center;
  justify-content: center;
}
/deep/ .el-header {
  background-color: #2F3B46;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
