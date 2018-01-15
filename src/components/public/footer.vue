<template>
  <div class="index">

    <footer>
      <router-link to="http://www.baidu.com/">baidu</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
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
