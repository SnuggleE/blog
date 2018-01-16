<template>
  <div class="index">
    <header class="header">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409eff"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">博客分类</template>
          <el-menu-item v-for="item in categories" :key="item.index" :index="'2-'+item.index">{{item.name}}</el-menu-item>

        </el-submenu>
        <el-menu-item index="3">我喜欢的</el-menu-item>
        <el-menu-item index="4">关于我啊</el-menu-item>
      </el-menu>
    </header>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  data () {
    return {
      defaultActive:'1',
      categories:[
        {
          name:'前端',
          index:'1'
        },
        {
          name:'GIS',
          index:'2'
        },
        {
          name:'项目管理',
          index:'3'
        },
        {
          name:'区块链',
          index:'4'
        },
      ]
    }
  },
  methods:{
    handleSelect(index){
      // console.log(index);
      if(index[0]==2){
        this.$router.push({
          path:'/category/1'
        })
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  height: 60px;
  background: #409eff;
  /*overflow: hidden;*/
}
header.header{
  width: 1080px;
  margin: 0 auto;
}
</style>
