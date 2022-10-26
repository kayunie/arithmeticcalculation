var exports = module.exports = {};

exports.calculate = function (operator, value_1, value_2) {

    if (operator === "add") {
        return(value_1 + value_2);
    }
    else if (operator ==="sub") {
       return(value_1 - value_2);

    }
    else if (operator === "multiply") {
        return( value_1 * value_2);

    }
    else if (operator === "divide") {
        return(value_1 / value_2);

    }
   
};