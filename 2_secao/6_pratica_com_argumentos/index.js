const minimist = require('minimist')
//externo
const args = minimist(process.argv.slice(2))


//interno
const soma =require('./soma').soma

soma(20+21)