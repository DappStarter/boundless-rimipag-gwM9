require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purity harvest hero foster secret'; 
let testAccounts = [
"0xa895c85cdceea514bd8f9c9f85d173bb8573809d77f204941b9afef950ad8e8e",
"0xc40ed60260243efe58e3c68ba66c09531f420d441b731b1d284d6a50dd37bec4",
"0xdf15c4159be8c95d406698af90eb7b7e8b4a03bcb8db2c5d0757e4761e49242a",
"0xc8adefa8c8601d46e51328ca5efbba49b708f4171d3628959d7c5af06859c2c9",
"0x1bb6943bb771c6505bd57eef101f95bedf5a0aa05d706421b18fdb9b869f42ef",
"0xfa64d6ba52d304c804d15fe0b5787065ef7bdb94d1fb184e2d89b889f3ed8bba",
"0xd5cabd5dfc8f5c00fd2f89ae0c2d330eddbbc9b348166b5a8ad70dbc314f6845",
"0x71ae7aeb322817bfb369420f3912673949261a3c70ad1f8de2bd037f6c5bcf53",
"0x88f243c289a6b30e155c488c170dee048924bcf0154e7d9373375530e3f517b7",
"0x3b4296b459ee87f02817039cf0b9289145bc0ad6dbc6aa0c30236dd1364ffa05"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

