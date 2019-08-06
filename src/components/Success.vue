<template>
  <div class="success">
   <span class='success-text'>Деньги успешно отправлены, ищите нас на границе с Мексикой</span>
   <div class='info mt-5'>
       <div class='text-bold'>Имя держателя карты</div>
       <div class='text-info text-bold f-13 pl-2'>{{name}}</div>

       <div class='text-bold'>Номер счёта</div>
       <div class='text-info text-bold f-13 pl-2'>{{number}}</div>

       <div class='text-bold'>Сумма</div>
       <div class='text-info text-bold f-13 pl-2'>{{summ}} руб.</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['number','summ', 'name'],
  created(){
      if (this.summ === undefined || this.number === undefined)
        this.$router.push('/payment')
  }
}
</script>

<style lang='scss'>
    .success{
        flex: 0 0 66.66666%;
        max-width: 66.6666666%;
        background-color:#f7f8f8;
        padding:20px;
        .success-text{
            font-size:25px;
            text-align:center;
            font-weight: bold;
        }
        .text-info{
            color:#d4d8dc !important;
        }
        .info {
            background:#1f2229;
            padding: 20px;
            color:white;
            font-size:20px;
        }
        .f-13{
            font-size:18px;
        }
        .text-bold{
            font-weight: bold;
        }
    }
      @media (max-width:768px){
    .success{
          flex: 0 0 100%;
          max-width: 100%;
    }
  }
</style>