var WAValidator = require('trezor-address-validator');

function showMatchedCurr(address) {
    
    var allCurrencies = WAValidator.getCurrencies();
    var currAddrMatchMsg = "";
    var noAddrFoundMsg = "";
    var currencyNamesMatch2 = "";
    function checkCurrencies(currency) {
        var valid =  WAValidator.validate(address, currency.symbol);
        if (valid)
            return currency;
    };

    var currenciesMatch = allCurrencies.filter(checkCurrencies);
    var currencyNamesMatch = currenciesMatch.map(token => token.name);
    
    console.log(currencyNamesMatch);
        
    
    if(currencyNamesMatch.length !== 0) {
        var currAddrMatchMsg = `The address you gave matches ${currencyNamesMatch.toString()}.`;
        console.log(currAddrMatchMsg);
        //currencyNamesMatch2 = currAddrMatchMsg;
    } else {
        var noAddrFoundMsg = `The data you entered either doesn't match a crypto
    address that is on this website, or is not a valid address.`;
        console.log(noAddrFoundMsg);
        //currencyNamesMatch2 = noAddrFoundMsg;
    }
    return currencyNamesMatch;

}

module.exports = { showMatchedCurr }