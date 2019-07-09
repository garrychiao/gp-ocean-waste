<template>
  <el-container>
    <el-header height="5em">
      <el-button icon="el-icon-more" @click="isShow = !isShow"></el-button>
      <MainHeader v-if="isShow"></MainHeader>
    </el-header>
    <el-main>
        <SessionOceanWaste></SessionOceanWaste>
        <SessionBigData></SessionBigData>
        <SessionFisheryWaste></SessionFisheryWaste>
        <SessionConclusion></SessionConclusion>
        <SessionInvestigation></SessionInvestigation>
        <SessionTeam></SessionTeam>
        <SessionEastEgg></SessionEastEgg>
    </el-main>
    <el-aside width="10em">
      <MainNavBar></MainNavBar>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data: () => ({
    isShow: true
  })
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #2F3B46;
  color: #FFF;
  height: 100%;
  width: 10em;
  position: fixed;
  right: 0;
  z-index: 9999;
}
.el-main {
  padding: 0px;
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 1 1 100%;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.el-header {
  background-color: #2F3B46;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 5em;
  z-index: 9999;
  display: flex;
  align-items: center;
  .el-button {
    z-index: 9999;
    position: absolute;
    right: 20px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 990px) {
  .el-aside {
    display: none !important;
  }
  .el-main {
    margin-top: 5em;
    height: calc(100vh - 5em);
  }
}
@media only screen and (min-width: 991px) {
  .el-header {
    display: none !important;
  }
  .el-main {
    width: calc(100vw - 10em);
  }
}
</style>
