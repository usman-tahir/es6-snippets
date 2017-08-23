(function () {
  'use strict';

  // Constants
  const PI = 3.141593
  console.log(PI > 3.0) // true

  // Scope (block-scoped variables/constants without hoisting)
  let callbacks = [];
  for (let i = 0; i <= 2; i += 1) {
    callbacks[i] = function() { return i * 2 }
  }

  // Check the values
  console.log(callbacks[0]() === 0)
  console.log(callbacks[1]() === 2)
  console.log(callbacks[2] === 4)

  // Scope (block-scoped function definitions)
  {
    function foo() { return 1 }
    console.log(foo() === 1) // true

    {
      function foo() { return 2 }
      console.log(foo() === 2) // true
    }

    console.log(foo() === 1) // true
    console.log(foo() === 2) // false
  }

  // Arrow functions/Expression bodies
  let evens = [2, 4, 6, 8, 10]

  let odds = evens.map(v => v + 1)
  console.log(odds) // [3, 5, 7, 9, 11]

  let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
  console.log(pairs)
  /*
    [
      { even: 2, odd: 3 },
      { even: 4, odd: 5 },
      { even: 6, odd: 7 },
      { even: 8, odd: 9 },
      { even: 10, odd: 11}
    ]
  */

  let nums = evens.map((v, i) => v + 1)
  console.log(nums) // [3, 5, 7, 9, 11]

  // Statement bodies
  let fives = []
  nums.forEach(v => {
    if (v % 5 === 0) {
      fives.push(v)
    }
  })
  console.log(fives) // [5]

  // lexical 'this'
  // let threes = []
  // this.nums.forEach((v) => {
  //   if (v % 3 === 0) {
  //     threes.push(v)
  //   }
  // })
  // console.log(threes) // [3, 9]

  // Default parameter values
  function f(x, y = 7, z = 42) {
    return x + y + z;
  }
  console.log(f(1) === 50) // true

  // 'Rest' parameter
  function f(x, y, ...a) {
    return (x + y) * a.length
  }
  console.log(f(1, 2, 'hello', true, 7) === 9) // true

  // Spread operator (spreading of elements of a iterable collection) into both
  // literal elements and individual function elements
  let params = ['hello', true, 7]
  let other = [1, 2, ...params] // [1, 2, 'hello', true, 7]

  function f(x, y, ...a) {
    return (x + y) * a.length
  }

  // String interpolation
  let customer = { name: 'Foo' }
  let card = { amount: 7, product: 'Bar', unitPrice: 42 }
  let message = `
    Hello, ${customer.name}, do you want to buy ${card.amount} ${card.product}
    for a total of $${card.amount * card.unitPrice}?
  `
  console.log(message)

  // Extended literals
  console.log(0b111110111 === 503)
  console.log(0o767 === 503)
}())
