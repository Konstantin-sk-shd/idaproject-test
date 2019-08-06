<template>
  <div id="app" class="container">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components:{
    Menu
  }
}
</script>
<style lang='scss'>
  body{
    min-height: 100vh;
    background-color:#101114; 
  }
  #app{
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
  }
</style>