<template>
  <div class="hidden-sm-and-up">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="24"><el-button circle icon="el-icon-search" @click="test"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
      <el-col :span="24"><el-button circle icon="el-icon-search"></el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      console.log('aaaa')
    }
  }
}
</script>

<style lang="scss" scoped>
  .hidden-sm-and-up {
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

