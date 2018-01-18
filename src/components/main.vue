<template>
  <div id="app">
    <page-header></page-header>
    <transition name="fade">
      <router-view/>
    </transition>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import pageHeader from './public/header'
  import pageFooter from './public/footer'
export default {
  name: 'pageMain',
  components:{
    'page-header':pageHeader,
    'page-footer':pageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
