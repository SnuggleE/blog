<template>
  <div class="index">
    <page-header></page-header>
    <section>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus dolorem error itaque magni non nostrum placeat possimus praesentium vero! Accusamus aut blanditiis eos modi obcaecati suscipit vero voluptas voluptate.
    </section>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import pageHeader from './public/header.vue';
  import pageFooter from './public/footer.vue'
export default {
  name: 'index',
  components:{
    'page-header':pageHeader,
    'page-footer':pageFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 20px;
  background: #2c3e50;
}
section{
  width: 1080px;
  margin: 0 auto;
  text-align: left;
  border: 1px solid #e4393c;
}
</style>
