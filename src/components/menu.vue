<template>
  <el-menu :default-openeds="defaultOpeneds">
    <el-submenu :index="''+index+''" v-for="(item,index) in menuList" :key="index"> 
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item :index="index+'-'+listIndex" v-for="(listItem,listIndex) in item.children" :key="listIndex" @click="goPath(item,listItem)">
        {{listItem.name}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "LayMenu",
  props: {},
  data() {
    return {
      defaultOpeneds:['1'],
      menuList:[
        {
          name:"统计报表",
          icon:"el-icon-pie-chart",
          children:[
            {
              name:"内容管理分析表",
              path:"/ContentList"
            },
            {
              name:"活动管理分析表",
              path:"/ActivityList"
            },
            {
              name:"任务管理分析表",
              path:"/TaskList"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  watch: {},
  methods: {
    goPath(parent,param){
      console.log(param)
      if(param.path){
        // 修改标题
        this.$store.commit('setBreadcrumb', [parent.name,param.name])
        this.$store.commit('setPageInfoTitle', param.name)
        this.$router.push({
          path:param.path
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  font-family: PingFang-SC-Medium;
  font-size: 30px;
  color: #333333;
  letter-spacing: 0.61px;
  text-align: right;
  span {
    color: #ff6d44;
  }
}
.color {
  color: #ff6d44;
}
</style>
