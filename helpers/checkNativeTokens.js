const WAValidator = require('../../trezor-address-validator');
const { showMatchedCurr } = require('../app');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// var returnCurr = showMatchedCurr('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck');
// var returnCurr2 = showMatchedCurr('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4');
// console.log(returnCurr2);


