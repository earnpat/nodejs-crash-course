const { calVat, sayHello } = require('./utils')

sayHello()

const vat = calVat(100, 7)
console.log(vat);

console.log(__filename);
console.log(__dirname);

// Path
const path = require('path')
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, 'utils.js'));

// File
const fs = require('fs')
// fs.writeFileSync(path.join(__dirname, 'data.txt'), 'Hello') // small file
// fs.writeFile(path.join(__dirname, 'data.txt'), 'Hello', () => console.log('Finished writing file.')) // async
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8'));

// OS
const os = require('os')
console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());

// Events
const events = require('events')
const EventEmitter = events.EventEmitter
const connect = new EventEmitter()

connect.on('online', () => {
  console.log('A new user has connected.');
})

connect.emit('online')