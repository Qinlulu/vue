<template>
  <div class="ContentList">
    <h2>ContentList</h2>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker
          v-model="value1"
          type="year"
          placeholder="选择年"
          :disabled="!!value2 || !!value3 || !!value4 "
        ></el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
          :disabled="!!value1 || !!value3 || !!value4 "
        ></el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value3"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
          :disabled="!!value1 || !!value2 || !!value4 "
          @change="change"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">日</span>
        <el-date-picker
          v-model="value4"
          type="date"
          placeholder="选择日"
          :disabled="!!value1 || !!value2 || !!value3 "
        ></el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import api from "api/index";
import Moment from "moment";
export default {
  name: "ContentList",
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    };
  },
  async mounted() {
    console.log(api.home.getHomeInfo);
    // 接口请求
    let Res = await this.$get(api.home.getHomeInfo, {});
    console.log(Res);

    // setInterval(()=>{
    //   console.log(this.value1,this.value2,this.value3,this.value4,)
    // },1000)
  },
  watch: {},
  methods: {
    change(time) {
      if(!time){
        return 
      }

      let val=new Date(time)

      // 正常算法
      let firstDay = new Date(val.getFullYear(), 0, 1); // 2020-01-01
      let dayOfWeek = firstDay.getDay(); // 2020-01-01是周三  dayOfWeek==3
      let spendDay = 1;
      if (dayOfWeek != 0) {
        spendDay = 7 - dayOfWeek + 1; // 5 离下周一还有5天
      }
      firstDay = new Date(val.getFullYear(), 0, 1 + spendDay); // 2020-01-06是2020年第一个周一，是2020年第二个周
      let d = Math.ceil((val.valueOf() - firstDay.valueOf()) / 86400000); // 当前时间距离2020-01-06有几天
      let result = Math.ceil(d / 7); // 换算成周为单位 2020-01-06result是0,但其实是第二个周，所以默认加2
      let year = val.getFullYear();
      let week = result + 2; //如果使用的是默认为加2（如果将自然周设置为周一到周日则是加1）

      // moment
      let WW = Moment(this.value3)
        .utcOffset(480)
        .format("WW");
      let yy = Moment(this.value3)
        .utcOffset(480)
        .format("yy");
      let yymm = Moment(this.value3)
        .utcOffset(480)
        .format("yy-WW");

      let yw = "";
      if (week == WW) {
        yw = yymm;
      } else {
        if (week < 7) {
          yw = yy + "-" + WW;
        } else {
          if (WW < 7) {
            yw = year * 1 + 1 + "-" + WW;
          } else {
            yw = yy + "-" + WW;
          }
        }
      }
      console.log(yw);
      console.log(time + "第一天")
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
