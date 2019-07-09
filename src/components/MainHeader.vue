<template>
  <div class="head-bar">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.ocean-waste, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.big-data, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.fishery-waste, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.conclusion, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.investigation-method, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.screen-team, 80'"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search" v-scroll-to="'.east-egg, 80'"></el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .head-bar {
    padding-top: 5em;
    height: 10em;
    background-color: #2F3B46;
    position: fixed;
    width: inherit;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;
  }
</style>

