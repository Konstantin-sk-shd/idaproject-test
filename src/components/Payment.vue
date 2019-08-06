<template>
  <div class="content">
    <div class='label_info'>
      Информация по оплате: 
    </div>
    
    <div class='d-flex mt-3 fl-wrap'>
      <div class='before_input'>Номер счёта</div>
      <input type='text' v-model='number' :class='(errors.number==true) ? "error" : ""' oninput="this.value = this.value.replace(/[^0-9]/g, '')">
    </div>
    <div class='d-flex mt-1 fl-wrap'>
      <span class='before_input'>Сумма платежа</span>
      <input type='text' v-model='summ' :class='(errors.summ==true) ? "error" : ""' oninput="this.value = this.value.replace(/[^0-9]/g, '')">
    </div>

    <div class='h4 c-black'>Данные банковской карты</div>

    <form @submit.prevent="onSubmit">
      <div class='card-container'>
        <div class='card1'>
          <div>Номер карты</div>
          <div class='d-flex card-number'>
            <input @input='onChange1' :class='(errors.number1==true) ? "error" : ""' :maxlength="4" type='text' ref='n1' v-model="number1" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class='col-3 col-lg-2 text-center'>
            <input @input='onChange2' :class='(errors.number2==true) ? "error" : ""' :maxlength="4" type='text' ref='n2' v-model="number2" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class='col-3 col-lg-2 text-center ml-0 ml-lg-2'>
            <input @input='onChange3' :class='(errors.number3==true) ? "error" : ""' :maxlength="4" type='text' ref='n3' v-model="number3" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class='col-3 col-lg-2 text-center ml-0 ml-lg-2'>
            <input :maxlength="4" :class='(errors.number4==true) ? "error" : ""' type='text' ref='n4' v-model="number4" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class='col-3 col-lg-2 text-center ml-0 ml-lg-2'>
          </div>
          <div class='mt-2'>Срок действия</div>
          <div class='d-flex mt-1'>
            <select class="select" v-model="selectedMonth">
              <option v-for='month in months' :value='month' :key='month'>{{month}}</option>
            </select>
            <select class='ml-2 select' v-model="selectedYear">
              <option v-for='year in years' :value='year' :key='year'>{{year}}</option>
            </select>
          </div>

          <input type='text' v-model='fio' :class='(errors.fio==true) ? "error" : ""' class='mt-2 fio-input' placeholder="Держатель карты">
        </div>
        <div class='card-back'>
          <div>
            <div class='text-center'>Код CVV2/CVC2</div>
            <div class='cww-div'>
              <input type='text' v-model="cvv" :maxlength="3" :class='(errors.cvv==true) ? "error" : ""' class=' cww' oninput="this.value = this.value.replace(/[^0-9]/g, '')">
            <div class='cww-abs' data-title='Тут подсказка по cvv' alt='refr'></div>
            </div>
          </div>
        </div>
      </div>
      <input type='submit' class='ok' value='Оплатить'>
    </form>
  </div>
  
</template>

<script>
import Operations from './Store.js';
import Router from 'vue-router';
function isEmpty(obj) {
    for(var key in obj)
    {
        return false;
    }
    return true;
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      selectedYear:1995,
      selectedMonth:1,
      fio:'',
      number: '',
      cvv:'',
      summ: '',
      number1:'',
      number2:'',
      errors:{},
      number3:'',
      number4:'',
      months:[],
      years:[]
    }
  },
  created(){
    for (let i=1;i<13;i++)
      this.months.push(i);   
    for (let i=1916; i<2019;i++)
      this.years.push(i);   
     
  },
  methods: {
    onSubmit(){
      if (this.number.length === 0)
        this.errors = {...this.errors, number:true}
      if (this.summ.length === 0)
        this.errors = {...this.errors, summ:true}
      if (this.number1.length !== 4)
        this.errors = {...this.errors, number1:true}
      if (this.number2.length !== 4)
        this.errors = {...this.errors, number2:true}
      if (this.number3.length !== 4)
        this.errors = {...this.errors, number3:true}
      if (this.number4.length !== 4)
        this.errors = {...this.errors, number4:true}
      if (this.fio.length < 4 || !(new RegExp('^[a-zA-Z ]+$').test(this.fio)))
        this.errors = {...this.errors, fio:true}
      if (this.cvv.length !== 3)
        this.errors = {...this.errors, cvv:true}
      if (isEmpty(this.errors))
        {       
          this.$router.push({path:'/success',name:'Success', params:{name:this.fio, number:this.number, summ:this.summ}})
          Operations.doOperation({number:this.number, summ:this.summ, name:this.fio})
        }
      else setTimeout(() => {
        this.errors = {}; 
      },1000)
    },
    onChange1(){
      if (this.number1.length >= 4)
        this.$refs['n2'].focus()
    },
    onChange2(){
      if (this.number2.length >= 4)
        this.$refs['n3'].focus()
    },
    onChange3(){
      if (this.number3.length >= 4)
        this.$refs['n4'].focus()
    }
  }
}
</script>


<style lang='scss'>
::-webkit-input-placeholder { /* Chrome */
  color: #bec6cf;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #bec6cf;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #bec6cf;
  opacity: 1;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: #bec6cf;
  opacity: 1;
}
input{
  border: 1px solid #e4e9ee !important;
  box-shadow: unset !important;
}
@keyframes error {
  0%{
   transform:translateX(0px)
  }
  25%{
      transform:translateX(3px)
  }
  50%{
      transform:translateX(0px)
  }
  75%{
      transform:translateX(-3px)
  }
  100%{   
     transform:translateX(0px)
  }
}
  .content{
    font-size:13px;
    flex: 0 0 66.66666%;
    max-width: 66.6666666%;
    background-color:#f7f8f8;
    padding:40px 15px;
    color:#8494ab;
     .error{
       transform:translateX(0px);
       border:1px solid red !important;
       animation:error 0.3s linear;
     }
     .ok{
       background-color: #0059bd;
       color:white;
       border-radius: 20px;
       padding:10px 30px;
       font-size:bold;
     }
     .cww{
       width: 100px;
       padding: 7px 0;
       position: relative;
       padding-left:20px;

     }
     .cww-div{
       position: relative;
       .cww-abs{
         position: absolute;
         top:20%;
         right:10px;
         width:20px;
         height: 20px;
         background:url(http://cdn.onlinewebfonts.com/svg/img_309726.png);
         background-size:cover;;
         z-index: 122;
         &:after
          {
            content: attr(data-title);
            display: none;
            position: absolute;
            bottom: 130%;
            left: 0px;
            background-color: #fff;
            color: #3aaeda;
            padding: 5px;
            text-align: center;
            -moz-box-shadow: 0 1px 1px rgba(0,0,0,.16);
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.16);
            box-shadow: 0 1px 1px rgba(0,0,0,.16);font-size: 12px;
          }
/* Добавляем свойство, чтобы при наведении на элемент плашка с подсказкой появилась */
        &:hover:after{display: block;}
       }
     }
     .card-number input{
       padding:7px 0 !important;
     }
     .card-container{
       display: flex;
       align-items: flex-start;
       .select{
         padding:7px 6px;
       }
       .fio-input{
         padding: 7px 6px;
       }
     }
     .c-black{
      color:black;
     }
     .before_input{
       width:150px;
     }
     .card1,.card-back{
       position:relative;
       background-color:#f7f8f8;
       flex: 0 0 60.0%;
       max-width: 60.0%;
       padding:30px 10px;
       height: 250px;
       border:1px solid #e4e9ee;
       border-radius:10px;
     }
     .card1{
       z-index: 3;
     }
     .card-back{
       margin-left:-20%;
       display:flex;
       z-index: 2;
       margin-top:20px;
       justify-content: flex-end;
       align-items: center;
        &:after{
          position: absolute;
          content:'';
          width:100%;
          top:10%;
          height:16%;
          background-color:#e4e9ee;
          left:0;
        }
        
    
     }
  }
  @media (max-width:768px){
    .content{
          flex: 0 0 100%;
          max-width: 100%;
          .card-container{
              display: flex;
              flex-wrap:wrap;
          }
          .card1, .card-back{
                flex: 0 0 100.0%;
                max-width: 100.0%;
          }
          .card-back{
            margin-left:0;
          }
    }
  }
    @media (max-width:576px){
      .fl-wrap{
        flex-wrap: wrap;
      }
    }
</style>