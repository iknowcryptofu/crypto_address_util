//split allCurrencies object of list of crypto currencies according to eth
var WAValidator = require('trezor-address-validator');
var ETHValidator = require('trezor-address-validator/src/ethereum_validator');
var fs = require('fs');
var allCurrencies = WAValidator.getCurrencies();
var excludeEth = allCurrencies.filter(checkForEth);
/*function checkForEth(item){
    return item.validator != ETHValidator;
}

console.log(excludeEth);
fs.writeFile('currenciesne.js', JSON.stringify(excludeEth), function(err) {
    if(err) {
        console.log(err);
    }
});
*/
function checkForEth(item){
    return item.validator == ETHValidator;
}

console.log(excludeEth);
fs.appendFile('currenciesne.js', JSON.stringify(excludeEth), function(err) {
    if(err) {
        console.log(err);
    }
});