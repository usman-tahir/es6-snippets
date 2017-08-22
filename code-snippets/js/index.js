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
}())
