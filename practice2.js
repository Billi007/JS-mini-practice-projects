// console.log(1 / 0) //Infinity
// console.log(-1 / 0) //-Infinity
// console.log(0 / 0) //NaN
// console.log(0 === -0) //true
// console.log(Object.is(0, -0)) //false
// console.log(Object.is(0, Math.round(-0.5))) //false
// console.log(Object.is(0, Math.round(0.5))) //false
// console.log(0 * Infinity) //NaN
// console.log(Infinity / Infinity) //NaN
// console.log(Object.is(0, Math.sign(0))) //true
// console.log(Object.is(0, Math.sign(-0))) //false
// console.log(1 / -0) //-Infinity
// console.log(1 / 0) //Infinity
// console.log(1n / 0n) //RangeError: Division by zero 

// console.log([1] == 1)// "1" == 1 → true
// console.log([1] == '1') // "1" == "1" → true
// console.log(['1'] == '1') // "1" == "1" → true
// console.log(['1'] == 1)  // "1 == 1 → true
// console.log([1] == ['1']) //false → Both arrays are objects, and objects are compared by reference, not value.
// console.log(new Boolean(true) == 1) //true
// console.log(new Boolean(true) == new Boolean(true))
// console.log(Boolean(true) == '1') //true
// console.log(Boolean(false) == [0]) //true
// console.log(new Boolean(true) == '1')
// console.log(new Boolean(false) == [0])
// console.log(null == undefined) // true

//35