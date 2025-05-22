//import { CHAINS_LIST, CHAINS,CHAINS_ENUM } from '@debank/common';
//import { type Chain } from '@debank/common';
var { CHAINS_LIST, CHAINS,CHAINS_ENUM }= require('./node_modules/@debank/common/dist');

//const { AnyAddress } = require('@trustwallet/wallet-core');
// import initWasm, { WalletCore } from "@trustwallet/wallet-core";

// (async () => {
//   const core = await initWasm(); // This returns the WalletCore bindings
//   const { Mnemonic, HDWallet, CoinType } = core;

//   const mnemonic = Mnemonic.generate(12);
//   const wallet = new HDWallet(mnemonic, '');

//   const address = wallet.getAddressForCoin(CoinType.BITCOIN);
//   console.log("BTC Address:", address);
// })();

// import pkg from '@trustwallet/wallet-core';
// const {WalletCore} = pkg;
// console.log(WalletCore);

// var address = AnyAddress.isValid(
//   "7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q",
//   CoinType.solana
// );
// if(address) {
//   console.log("wallet-core works and Solana address is valid");
// } else {
//   console.log("nope, wallet-core needs work");
// }

