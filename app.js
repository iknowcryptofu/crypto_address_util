// load the things we need
var WAValidator = require('trezor-address-validator');
var matchedAddress = require('./matchedCurr');
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
//added for form input value to remain after refresh. see res.redirect()
//app.use(express.static('pages')); 

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use('/js', express.static(__dirname + '/views/js'));

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

const btc_address = '1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck';
const ada_address = 'addr1wysmmrpwphe0h6fpxlmcmw46frmzxz89yvpsf8cdv29kcnqsw3vw6';
const eth_address = '0x42AE0B92E4985AD0Cde45e9c1Aa72e7f5A130B9E';

const names = require('./testSimpleFn'); // require() returns the object assigned to module.exports

console.log(names.firstnameLastname()); // will print "Jane Doe"
console.log(names.lastnameFirstname()); // will print "Doe, Jane"
//19aug2024 the problem is that something is blocking the refresh of the index webpage. everytime i refresh the main index page
//is that Return Message code is being called. it looks like that it's not the locals in formbs5.ejs. i removed both but the index
//page still outputs data on refresh.
// use res.render to load up an ejs view file
//21aug2024 solved it. it was the currencyNamesMatchMsg variable.  watched youtube video about to-do list that showed an example.
let cryptoAddress2 = "";
let currencyNamesMatchMsg = "";
app.post("/", (req, res) => {
    cryptoAddress2 = req.body.cryptoAddress;
    console.log("Crypto Address: " + cryptoAddress2);
    //where the f*ck does sayhi() come from?!
    //console.log(WAValidator.sayhi());
    currencyNamesMatchMsg = matchedAddress.showMatchedCurr(cryptoAddress2);
    //res.send("Data received");
    //to stay on same page
    //res.status(204).send();
    res.redirect('/');
   
  });

// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {
        cryptoAddress: cryptoAddress2,
        currencyNamesMatch: currencyNamesMatchMsg
        });
    console.log("Return Messsage: " + currencyNamesMatchMsg)
});

// chains page
app.get('/chains', function(req, res) {
    res.render('pages/chains');
});

// chains2 test page
app.get('/chains2', function(req, res) {
  res.render('pages/chains2');
});


// help page
app.get('/help', function(req, res) {
  res.render('pages/help');
});

app.use('/api/:address', function(req, res){
    res.send(req.params.address);
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
