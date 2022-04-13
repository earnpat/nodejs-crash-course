function calVat(money, vat) {
  return money * vat / 100
}

function sayHello() {
  console.log('Hello');
}

module.exports = {
  calVat,
  sayHello,
}