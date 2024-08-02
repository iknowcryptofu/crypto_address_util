var WAValidator = require('trezor-address-validator');
//var nativeTokens = WAValidator.nativeTokensSymbols;
//console.log(nativeTokens);
// names.js module
function lastname() { // private function
  return "Doe";
}

function firstname() { // private function
  return "Jane";
}

function firstnameLastname() { // public function
  return `${firstname()} ${lastname()}`;
}

function lastnameFirstname() { // public function
  return `${lastname()}, ${firstname()}`;
}

var nativeTokens = [
  'btc',   'bch',  'nxt',  'xrp',
  'eth',   'ada',  'xmr',  'ardr',
  'steem', 'sys',  'atom', 'ae',
  'icx',   'IOST', 'nano', 'sc',
  'loki',  'trx',  'xem',  'lsk',
  'xlm',   'sol',  'bnb',  'eos',
  'xtz',   'hbar', 'zil'
]

//from formbs5.ejs it was messing up my code and giving error
// <% currencyNamesMatch.forEach(element =>{ %>
//   <div class="p-2"><%=element %></div>
// <% }); %> 

module.exports = { firstnameLastname, lastnameFirstname }; // object to be returned by require()

