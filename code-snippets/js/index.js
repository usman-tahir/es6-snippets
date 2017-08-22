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
}())
