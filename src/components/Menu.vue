<template>
  <div class="menu">
    <router-link :active="isActive" class="menu-item" to='/'>
      Личный кабинет
    </router-link>
    <router-link :active="isActive" class="menu-item" to='/payment'>
      Платежи
    </router-link>
    <router-link :active="isActive" class="menu-item" to='/history'>
      История платежей
    </router-link>
    <router-link :active="isActive" class="menu-item" to='/settings'>
      Настройки
    </router-link>
    <router-link :active="isActive" class="menu-item" to='/exit'>
      Выход
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang='scss'>
  .menu{
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    background-color:#1f2229;
    .menu-item{
      display:block;
      width:100%;
      padding:10px 30px;
      color:white;
      border-bottom: 1px solid #191c24;
      &:hover{
        background:#2a2d37;
      }
    }
    .router-link-exact-active{
      background:#2a2d37;
       color:#808592;
    }
  }
  @media (max-width:800px){
    .menu{
          flex: 0 0 100%;
          max-width: 100%;
    }
  }

</style>