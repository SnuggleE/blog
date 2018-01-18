<template>
  <div class="index">
    <div class="body">
      categoryId:{{categoryId}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'category',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      categoryId:''
    }
  },
  created(){
    this.categoryId=this.$route.params.categoryId
    console.log(this.$route.params.categoryId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
