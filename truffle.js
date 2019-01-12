// Allows us to use ES6 in our migrations and tests.
require('babel-register')
const HDWalletProvider = require("truffle-hdwallet-provider");
// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
    return new HDWalletProvider("buddy enable upgrade virus museum frequent history deer vanish company fruit song", "https://rinkeby.infura.io/v3/f6b3d56706274b56a32307e894577d88")
    },
      network_id: 4, // network id for test networks
      gas: 4700000 // gas limit
  }
  }
}
