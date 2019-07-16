<template>
  <el-container class="ocean-waste">
    <el-header height="">
      <el-card
      :body-style="{display: 'block', backgroundColor: '#ff7979', color: '#000'}"
      >
        <div style="text-align:left;">
          主故事——字襯海邊圖: <br><br>
          小時候，每到夏天我要去海邊<br>
          堆沙堡、找貝殻，看看寄居蟹 躲在哪裡<br><br>
          現在到了海灘，小孩還是很高興 只是...他們用寶特瓶堆城堡，在海廢堆裡找螃蟹，<br>
          還有小鳥在塑膠垃圾上 產卵<br>
          孩子想脫鞋奔跑，我們卻擔心針頭、金屬碎片扎傷<br><br>
          臺灣還找得到祕境海灘嗎?<br><br>
          為了讓孩子享受我以前童年記憶裡的乾淨海灘<br>
          我決定繞臺灣一圈，找出最乾淨的海灘<br>
          跟我一起出發吧!
        </div>
      </el-card>
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card>
            陸地-河川/大排
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            遊客亂丟
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            海洋
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            掩埋場
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .ocean-waste {
    height: initial;
    width: 100vw;
    .el-header {
      padding: 0;
    }
  }
</style>
