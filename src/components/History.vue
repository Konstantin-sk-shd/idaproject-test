<template>
  <div class="history">
   <table class="table_adaptive">
  <thead>
    <tr>
      <th>ФИО</th>
      <th>Цена</th>
      <th>Номер счёта</th>
      <th>Дата перевода</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='operation in operations' :key='operation.number'>
      <td data-label="ФИО">{{operation.name}}</td>
      <td data-label="Цена">{{operation.summ}} руб.</td>
      <td data-label="Номер счёта">{{operation.number}}</td>
      <td data-label="Дата перевода">{{operation.day}}.{{operation.month}}.{{operation.year}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import Operations from './Store.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      operations:[]
    }
  },
  created(){
      this.operations = Operations.getOperations();
  }
}
</script>

<style lang='scss'>
.history{
    flex: 0 0 66.66666%;
    max-width: 66.6666666%;
    background-color:#f7f8f8;
    padding:20px;
body {
  margin: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

table.table_adaptive {
  display: table;
  width: 100% !important;
  table-layout: fixed !important;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0 !important;
  margin-bottom: 30px;
  line-height: 24px;
}

table.table_adaptive caption {
  caption-side: top;
  color: #5f5f5f;
  text-align: center;
  font-weight: bold;
}

table.table_adaptive tr {
  padding: 5px;
}

table.table_adaptive tr:hover {
  background: #71c2c2;
  color: #fff;
}

table.table_adaptive tr:hover a {
  color: #fff;
  border-bottom: 1px dashed #fff;
}

table.table_adaptive th,
table.table_adaptive td {
  padding: 10px;
  text-align: center;
}

table.table_adaptive th {
  font-size: 14px;
  letter-spacing: 1px;
  color: whitesmoke;
  background-color: #19a5a5;
  font-weight: bold;
  border: 0px !important;
}

table.table_adaptive td {
  border-bottom: 1px solid #ededed !important;
  border-top: 0px !important;
  border-left: 0px !important;
  border-right: 0px !important;
  font-size: 14px;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
}

table.table_adaptive td:first-child {
  text-align: left;
}

table.table_adaptive td.justify_text {
  text-align: justify;
}

table.table_adaptive td.left_text {
  text-align: left;
}

table.table_adaptive td.right_text {
  text-align: right;
}

table.table_adaptive tr.subhead {
  background: #f1f7f7;
  font-weight: bold;
}

table.table_adaptive tr.subhead:hover {
  background: #24c5c5;
  color: #fff;
}

@media screen and (max-width: 800px) {
  table.table_adaptive {
    border: 0 !important;
  }
  table.table_adaptive thead {
    display: none;
  }
  table.table_adaptive tr {
    margin-bottom: 10px;
    display: block;
    border: 1px solid #ededed !important;
  }
  table.table_adaptive td {
    display: block;
    text-align: right;
    font-size: 13px;
    border-bottom: 1px dotted #ededed !important;
  }
  table.table_adaptive td.justify_text {
    text-align: right;
  }
  table.table_adaptive td.left_text {
    text-align: right;
  }
  table.table_adaptive td:first-child {
    text-align: right;
  }
  table.table_adaptive td.right_text {
    text-align: right;
  }
  table.table_adaptive td:last-child {
    border-bottom: 0 !important;
  }
  table.table_adaptive td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
}
    }
  @media (max-width:768px){
    .history{
          flex: 0 0 100%;
          max-width: 100%;
    }
  }
</style>