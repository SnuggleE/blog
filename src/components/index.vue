<template>
  <div class="index">
    <page-header></page-header>
    <div class="body">
      <section class="title-des">
        欢迎你来到这里，我们都是独一无二的。
      </section>
      <section class="asy-des">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus dolor dolore enim hic ipsa nostrum nulla veritatis. Ad, aliquam atque corporis cumque id labore quos saepe temporibus veritatis voluptatum.
      </section>
      <section>
        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                align="left"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                align="left"
                label="地址">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </section>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import pageHeader from './public/header.vue';
  import pageFooter from './public/footer.vue'

  export default {
    name: 'index',
    components: {
      'page-header': pageHeader,
      'page-footer': pageFooter
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    height: 20px;
    background: #2c3e50;
  }

  section.title-des {
    text-align: left;
    font-size: 32px;
    padding: 30px;
    font-family: Verdana;
    color: #3a8ee6;;
  }
  section.asy-des {
    text-align: left;
    font-size: 18px;
    padding: 18px;
    font-family: Verdana;
    color: #3a8ee6;;
  }

  div.body {
    width: 1080px;
    margin: 0 auto;
  }
</style>
