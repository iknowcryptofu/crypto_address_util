// const names = require('./testSimpleFn'); // require() returns the object assigned to module.exports

// console.log(names.firstnameLastname()); // will print "Jane Doe"
// console.log(names.lastnameFirstname()); // will print "Doe, Jane"

//console.log(names.firstname()); // will produce an error
//console.log(names.lastname()); // will produce an error


var WAValidator = require('../trezor-address-validator');

function showMatchedCurr3(address) {
    
    var allCurrencies = WAValidator.getCurrencies();

    function checkCurrencies(currency) {
        var valid =  WAValidator.validate(address, currency.symbol);
        if (valid)
            return currency;
    };

    var currenciesMatch = allCurrencies.filter(checkCurrencies);
    var currencyNamesMatch = currenciesMatch.map(token => token.name);
    console.log(currencyNamesMatch);

    return currencyNamesMatch;

}


function getAddress(address) {
  return address;   
}

// var validTest = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
// if(valid)
// 	console.log('This is a valid address');
// else
// 	console.log('Address INVALID');

//module.exports = { showMatchedCurr3, testMatched }
module.exports = { getAddress, showMatchedCurr3 }