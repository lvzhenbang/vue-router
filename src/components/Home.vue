<template>
  <div class="home">
    <p class="hello" v-text="msg"></p>
    <div class="link">
      <router-link to="/tab"><img src="../assets/logo.png" alt="logo"></router-link>
    </div>
    <div class="description">
      <p v-text="feature1"></p>
      <p v-text="feature2"></p>
      <p v-text="feature3"></p>
    </div>
  </div>
</template>

<script>
  export default {
      name:'home',
      data (){
          return {
              msg: '渐进式 JavaScript 框架',
            feature1:'易用:已经会了HTML,CSS,JavaScript？即刻阅读指南开始构建应用！',
            feature2:'灵活:简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。',
            feature3:'性能:17kb min+gzip 运行大小,超快虚拟 DOM,最省心的优化',
          }
      }
  }
</script>

<style scoped>
  .home {
    width:100%;
    height:100%;
  }

  .hello {
    width: 100%;
    padding:40px 0;
  }
  .link {
    padding: 20px 0;
  }
  .link img {
    width:150px;
    height:150px;
  }

  .description {
    padding: 20px 0;
  }
  /*.description p{
    width:60%;
    margin: 0 auto;
    text-align: left;
  }*/
</style>
