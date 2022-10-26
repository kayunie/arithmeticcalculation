const express = require('express'); //import expres package
const app = express(); // create an application based on express
const calculatorz = require('./arithmeticFunctions');
app.use(express.urlencoded({extended: false}));


let inputvals = { operator: 'add', value_1: 2, value_2: 3 };
let result='';

app.get('/calc', function (req, res) {

res.send(inputvals);
result=calculatorz.calculate(inputvals.operator,inputvals.value_1,inputvals.value_2);

console.log(result);


 
});


app.post('/calc', function (req, res) {
    inputvals.push(req.body)
    
     res.redirect('/calc');

});
        
  


app.listen(3000, function () {
    console.log('Server running on port 3000...')
});
