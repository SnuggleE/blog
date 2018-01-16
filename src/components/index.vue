<template>
  <div class="index">
    <page-header></page-header>
    <div class="body">
      <section class="title-des">
        欢迎你来到这里，我们都是独一无二的。
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
      return {}
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

  div.body {
    width: 1080px;
    margin: 0 auto;
  }
</style>
