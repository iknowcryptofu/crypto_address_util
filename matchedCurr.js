const { initWasm } = require("@trustwallet/wallet-core");

async function getMatchedCurrencyNames(address) {
    const core = await initWasm();
    const { CoinType, AnyAddress } = core;

    const coinNames = Object.keys(CoinType).filter(k => k !== "values");
    const matchedCurrencies = [];

    for (const coinName of coinNames) {
        const coinValue = CoinType[coinName];
        try {
            const isValid = AnyAddress.isValid(address, coinValue);
            if (isValid) {
                console.log(`✅ Valid for: ${coinName}`);
                matchedCurrencies.push(coinName);
            }
        } catch (e) {
            console.warn(`Error checking ${coinName}:`, e.message);
        }
    }

    return matchedCurrencies;
}

// Function to return a formatted message based on matched currencies
async function showMatchedCurr(address) {
    const currencyNamesMatch = await getMatchedCurrencyNames(address);

    return currencyNamesMatch.length > 0
        ? `The address you gave matches ${currencyNamesMatch.join(', ')}.`
        : `The data you entered either doesn't match a crypto address that is on this website, or is not a valid address.`;
}

// Function to log and return matched currency names directly
async function showMatchedCurr2(address) {
    const currencyNamesMatch = await getMatchedCurrencyNames(address);
    console.log(currencyNamesMatch);
    return currencyNamesMatch;
}

module.exports = { showMatchedCurr, showMatchedCurr2 };