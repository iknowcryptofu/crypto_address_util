const WAValidator = require('trezor-address-validator2');

// Common function to get matched currency names for a given address
function getMatchedCurrencyNames(address) {
    const allCurrencies = WAValidator.getCurrencies();
    return allCurrencies
        .filter(currency => WAValidator.validate(address, currency.symbol))
        .map(currency => currency.name);
}

// Function to return a formatted message based on matched currencies
function showMatchedCurr(address) {
    const currencyNamesMatch = getMatchedCurrencyNames(address);

    return currencyNamesMatch.length > 0
        ? `The address you gave matches ${currencyNamesMatch.join(', ')}.`
        : `The data you entered either doesn't match a crypto address that is on this website, or is not a valid address.`;
}

// Function to log and return matched currency names directly
function showMatchedCurr2(address) {
    const currencyNamesMatch = getMatchedCurrencyNames(address);
    console.log(currencyNamesMatch);
    return currencyNamesMatch;
}

module.exports = { showMatchedCurr, showMatchedCurr2 };