template>
  <div class="TaskList">
    TaskList
  </div>
</template>

<script>
// import api from 'api/index'
export default {
  name: "TaskList",
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {er
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
  },
  mounted() {

  },
  watch: {

  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>

</style>
