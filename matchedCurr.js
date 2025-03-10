const WAValidator = require('trezor-address-validator2');

function showMatchedCurr(address) {
    const allCurrencies = WAValidator.getCurrencies();

    // Filter and map currencies in one step for efficiency
    const currencyNamesMatch = allCurrencies
        .filter(currency => WAValidator.validate(address, currency.symbol))
        .map(currency => currency.name);

    // Ternary operator for concise conditional logic
    return currencyNamesMatch.length > 0
        ? `The address you gave matches ${currencyNamesMatch.join(', ')}.`
        : `The data you entered either doesn't match a crypto address that is on this website, or is not a valid address.`;
}


function showMatchedCurr2(address) {
    const allCurrencies = WAValidator.getCurrencies();

    // Filter and map currencies in one step for efficiency
    const currencyNamesMatch = allCurrencies
        .filter(currency => WAValidator.validate(address, currency.symbol))
        .map(currency => currency.name);

    // Log the matched currency names
    console.log(currencyNamesMatch);

    // Return the matched currency names array directly
    return currencyNamesMatch;
}

module.exports = { showMatchedCurr, showMatchedCurr2 }