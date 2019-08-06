let operations = [];
export default {
    doOperation: function(obj) {
        let date=new Date();
        operations.push({...obj, year:date.getFullYear(), month:date.getMonth(), day:date.getDay()})
    },
    getOperations: function() {
        return operations;
    }
}