var WAValidator = require('./trezor-address-validator');

function showMatchedCurr(address) {
    
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

module.exports = { showMatchedCurr }