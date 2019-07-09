<template>
  <div class="nav-bar">
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24">NavMenu</el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.ocean-waste'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.big-data'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.fishery-waste'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.conclusion'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.investigation-method'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.screen-team'"></el-button></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.east-egg'"></el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: vm => ({})
}
</script>


<style lang="scss" scoped>
  .nav-bar {
    width: inherit;
  }
</style>

