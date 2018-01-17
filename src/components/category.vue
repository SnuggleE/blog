<template>
  <div class="index">
    <page-header></page-header>
    <div class="body">
      category
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import pageHeader from './public/header'
  import pageFooter from './public/footer'
export default {
  name: 'category',
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


</style>
