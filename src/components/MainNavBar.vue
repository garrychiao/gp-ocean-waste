<template>
  <div class="nav-bar">
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24">NavMenu</el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.ocean-waste'"><font-awesome-icon icon="water" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.big-data'"><font-awesome-icon icon="chart-pie" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.fishery-waste'"><font-awesome-icon icon="fish" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.conclusion'"><font-awesome-icon icon="lightbulb" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.investigation-method'"><font-awesome-icon icon="search" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.screen-team'"><font-awesome-icon icon="users" /></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle v-scroll-to="'.east-egg'"><font-awesome-icon icon="info" /></el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: vm => ({})
}
</script>


<style lang="scss" scoped>
  @media (min-width: 991px) {
    .el-button {
      width: 65px;
      height: 65px;
    }
  }
  .nav-bar {
    width: inherit;
  }
  .el-row {
    margin: 10px 0;
  }
</style>

