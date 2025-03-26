// console.log(Boolean('false'))  //true
// console.log(Boolean(false)) //false
// console.log('3' + 1) //'31'
// console.log('3' - 1) //2
// console.log('3' - ' 02 ') //1 
// console.log('3' * ' 02 ') //'6'
// console.log(Number('1')) //1
// console.log(Number('number')) //nan
// console.log(Number(null)) //0
// console.log(Number(false)) //0



// console.log(0 == false) //true
// console.log('' == false) //true
// console.log([] == false)  //true
// console.log(undefined == false) //false
// console.log(null == false) //false
// console.log('1' == true) //true
// console.log(1n == true) //true
// console.log(' 1     ' == true) //true



// console.log(JSON.stringify([1,2,null,3])) //[1,2,null,3]
// //When undefined appears in an array, it gets converted to null in the JSON string
// console.log(JSON.stringify([1,2,undefined,3])) //[1,2,null,3] 
// console.log(null === undefined) //false
// console.log(null == undefined) //true
// console.log(null == 0)   //false
// console.log(null < 0)   //false
// console.log(null > 0) //false
// console.log(null <= 0) //true
// console.log(null >= 0)  //true
// console.log(undefined == 0) //false
// console.log(undefined < 0) //false
// console.log(undefined > 0) //false
// console.log(undefined <= 0) //false
// console.log(undefined >= 0) //false


// //JavaScript converts arrays to strings by joining elements with commas.
// console.log("first",[] + [])  //"" + "" → "" =""
// console.log([] + 1)   //"" + 1 → "1"
// console.log([[]] + 1) //"" + 1 → "1"
// console.log([[1]] + 1) //"1" + 1 → "11"
// console.log([[[[2]]]] + 1) //'2' + 1 = "21"

// //JavaScript tries to convert arrays/objects to numbers when we use "-" operand
// console.log([] - 1) //0 - 1 = -1
// console.log([[]] - 1) //0 - 1 = -1
// console.log([[1]] - 1) //1 - 1 = 0
// console.log([[[[2]]]] - 1) //2 - 1 = 1
// console.log([] + {}) //"" + [object Object] = "[object Object]"
// console.log({} + {}) //[object Object] + [object Object] = "[object Object][object Object]"
// console.log({} - {}) //NaN


// console.log(0 == 1 == 2) //false
// console.log(2 == 1 == 0) //true
// console.log(0 < 1 < 2) //true
// console.log(1 < 2 < 3) //true
// console.log(2 > 1 > 0) //true
// console.log(3 > 2 > 1) //false

// [1,2,3].reduce((a,b) => {
//     console.log(a,b)
//   }); //1 2 undefined 3
  
//   [1,2,3].reduce((a,b) => {
//     console.log(a,b)
//   }, 0) //0 1 undefined 2 undefined 3 

// function a(){
// }
// const b = function() {
  
// }

// const c = function d() {
//   console.log(typeof d)
//   d = 'e'
//   console.log(typeof d)
// }

// console.log(typeof a) //function
// console.log(typeof b) //function
// console.log(typeof c) //function
// console.log(typeof d) //undefined
// c() //function //function


// const a = [0]
// console.log(a.length) //1
// a[3] = 3
// console.log(a.length) //4
// for (let item of a) {
//   console.log(item) //0 undefined undefined 3
// }
// a.map(item => {console.log(item)}) //0 undefined undefined 3
// a.forEach(item => {console.log(item)}) //0,3 {bcos it skips empty slots in array}
// console.log(Object.keys(a)) //["0", "3"]
// delete a[3]  
// console.log(a.length) //4 (length doesn't change when deleting)
// a[2] = 2
// a.length = 1 //length = 1
// console.log(a[0],a[1],a[2]) //0, undefined , undefined

// console.log(Math.min()) //Infinity
// console.log(Math.max()) //-Infinity
// console.log(Math.min(1)) //1
// console.log(Math.max(1,2)) //2
// console.log(Math.min([1,2,3])) //NaN (Math.min() expects numeric arguments, not an array)

// console.log(0 == '0') //true
// console.log(0 === '0') //false
// console.log(Object.is(0, '0')) //false

// console.log(0 == 0) //true
// console.log(0 === 0) //true
// console.log(Object.is(0, 0)) //true

// console.log(0 == -0) //true
// console.log(0 === -0) //true
// console.log(Object.is(0, -0)) //false

// console.log(NaN == NaN) //false
// console.log(NaN === NaN) //false
// console.log(Object.is(NaN, NaN)) //true

// console.log(0 == false) //true
// console.log(0 === false) //false
// console.log(Object.is(0, false))//false