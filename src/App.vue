<template>
  <div id="app">
    <el-container v-if="IsShow">
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <Lay-Menu></Lay-Menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item) in $store.state.Breadcrumb" :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="title">{{$store.state.PageInfoTitle}}</div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <router-view v-else></router-view>
  </div>
</template>
<script>
import LayMenu from "components/menu.vue";
export default {
  name: "APP",
  components: {
    'Lay-Menu':LayMenu
  },
  data(){
    return{
      IsShow:false
    }
  },
  mounted(){
    if(window.location.href.indexOf("showMenu")>=0){
        let showMenu=window.location.href.split("showMenu=")[1].split('#')[0]
       console.log(showMenu)
        if(showMenu.indexOf("show")>=0){
          this.IsShow=true
        }else{
          this.IsShow=false
        }
    }else{
      this.IsShow=false
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
