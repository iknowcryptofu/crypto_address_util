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

// use res.render to load up an ejs view file
var cryptoAddress = "abc";
app.post("/", (req, res) => {
    
    cryptoAddress = req.body.cryptoAddress;
    console.log("Crypto Address: " + cryptoAddress);
    console.log(WAValidator.sayhi());
    //res.send("Data received");
    //to stay on same page
    //res.status(204).send();
    res.redirect('/');
    //res.redirect('/').render('/',{cryptoAddress:req.body.cryptoAddress});
    //res.render('pages/index', {cryptoAddress: "xyz"});
  });

// index page 
app.get('/', function(req, res) {
    var currencyNamesMatch = matchedAddress.showMatchedCurr(cryptoAddress)
    
    res.render('pages/index', {
        cryptoAddress: cryptoAddress,
        currencyNamesMatch: currencyNamesMatch
        });
});

app.get("/indexcover3.html", (req, res) => {
    res.sendFile(__dirname + "/views/pages/indexcover3.html");
  });

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
