detail.vue<template>
  <div class="index">
    我是谁？
    <div>
      <router-link :to="{path:'/index'}">返回</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
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
