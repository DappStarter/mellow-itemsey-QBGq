require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index regret spice pumpkin inflict cloth equal gather'; 
let testAccounts = [
"0xf844d6762e333bcfd8058ddd2b8eec6afcb95ec8c6ddc3e62f98ef77ca0fc2e0",
"0xf4fc2dd132c1c519fd1b627a545beb268f1fad48961ae1879cf9b8b1f8675186",
"0xb163b56b1873467a4d833a5660449d4904b746ab2a33e535822b743524a51c43",
"0xa330ef0a59605f8757a13678e755f902034db4507d5797bfe42ae831b304cfff",
"0x167a5dd19a675913170cca15b0eb2ebadcecf05d0bebf00f96335b29161bdd2e",
"0x1973821c9f258f9c43541cc9053276fbf2919fe7240e13501da6e0fb25b4722b",
"0xf1f77e2cbe15ff58e5e99e5450d4e5e7d530e38026d764a43788a12b0604075c",
"0x288cba45f3377706258ce0ed954dcbb08f9eca50aa36d054a7d2bccf761d66d0",
"0x89f74bbfd22a17a8d542bbb88eb5d9bebc396dd9e57ba71b2886d9cc3e6cfca2",
"0x0ab0b42a635e8c2e02289d7d744ad3bfd8230e6c2b3c963e03318047b14afd8b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

