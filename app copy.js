var WAValidator = require('../trezor-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.

const btc_address = '1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck';
const ada_address = 'addr1wysmmrpwphe0h6fpxlmcmw46frmzxz89yvpsf8cdv29kcnqsw3vw6';
const eth_address = '0x42AE0B92E4985AD0Cde45e9c1Aa72e7f5A130B9E';
var allCurrencies = WAValidator.getCurrencies();

function checkCurrencies(currency) {
	var valid =  WAValidator.validate(btc_address, currency.symbol);
	if (valid)
		return currency;
};

var currenciesMatch = allCurrencies.filter(checkCurrencies);
//console.log(currenciesMatch);

var currencyNamesMatch = currenciesMatch.map(a => a.name);
console.log(currencyNamesMatch);