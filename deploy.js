const HDwalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./complie')

const provider = new HDwalletProvider(
    'era talk kitten taste summer actor grant verify hotel elder wrestle avoid',
    'https://rinkeby.infura.io/v3/3c1cacfb1a124f99901b55f98c7e4d27'
);

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from accont', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract to', result.options.address);

};

deploy();