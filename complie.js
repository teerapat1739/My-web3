const path = require('path')
const fs = require('fs')
const solc = require('solc')

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol')
// console.log(lotteryPath);

const source = fs.readFileSync(lotteryPath, 'utf8')

// console.log(solc.compile(source, 1))s
module.exports = solc.compile(source, 1).contracts[':Lottery']