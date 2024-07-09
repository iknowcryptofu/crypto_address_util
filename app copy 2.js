// load the things we need

var WAValidator = require('trezor-address-validator');
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

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

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
