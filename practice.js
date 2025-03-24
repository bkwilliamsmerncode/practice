///////////////////////////////////////////////////////////////////// EDIBITS ////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////// Less Than Or Equal To Zero /////////////////////////////////////////////////////////////////////////

// function lessThanOrEqualToZero(num) {
// 	if(num <= 0) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// console.log(lessThanOrEqualToZero(5))

// console.log(lessThanOrEqualToZero(0))

// console.log(lessThanOrEqualToZero(-2))

////////////////////////////////////// Return the First Element in an Array//////////////////////////////////////

// function getFirstValue(arr) {
// 	let result = arr.shift();
//     return result
// }

// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// console.log(getFirstValue([1, 2, 3]))

// console.log(getFirstValue([80, 5, 100]))

// console.log(getFirstValue([-500, 0, 50]))

////////////////////////////////////// Return Something to Me! //////////////////////////////////////////////////////

// function giveMeSomething(a) {
// 	return "something" + " " + a;
// }

// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

// console.log(giveMeSomething("is better than nothing")) 

// console.log(giveMeSomething("Bob Jane")) 

// console.log(giveMeSomething("something")) 

////////////////////////////////////////////////////////////////////////// Basketball Points ///////////////////////////////////////////////////////////////////////

// function points(twoPointers, threePointers) {
// 	return twoPointers * 2 + threePointers * 3;
// }

// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

// console.log(points(1, 1))

// console.log(points(7, 5))

// console.log(points(38, 8))

////////////////////////////////////////////////////////////////// Less Than 100? //////////////////////////////////////////////////////////////////////////

// function lessThan100(a, b) {
// 	if( a + b < 100) {
//         return true 
//     } else {
//         return false
//     }
// }

//lessThan100(22, 15) ➞ true 
// 22 + 15 = 37

//lessThan100(83, 34) ➞ false
// 83 + 34 = 117

//lessThan100(3, 77) ➞ true

// console.log(lessThan100(22, 15))

// console.log(lessThan100(83, 34))

// console.log(lessThan100(3, 77))

/////////////////////////////////////////////////////////////////// The Farm Problem //////////////////////////////////////////////////////////////////

// function animals(chickens, cows, pigs) {
// 	return chickens * 2 + cows * 4 + pigs * 4;
// }

// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// console.log(animals(2, 3, 5))

// console.log(animals(1, 2, 3))

// console.log(animals(5, 2, 8))

///////////////////////////////////////////////////////////////// Using the "&&" Operator ////////////////////////////////////////////////////////////

// function and(a, b) {
// 	if( a == true && b == true) {
//         return true
//     } else {
//         return false
//     }
// }

// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

// console.log(and(true, false))

// console.log(and(true, true))

// console.log(and(false, true))

// console.log(and(false, false))

//////////////////////////////////////////////////////////// Are the Numbers Equal? ///////////////////////////////////////////////////////////////////////

// function isSameNum(num1, num2) {
// 	if(num1 === num2) {
//         return true
//     } else {
//         return false
//     }
// }

// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

// console.log(isSameNum(4, 8))

// console.log(isSameNum(2, 2))

// console.log(isSameNum(2, "2"))

////////////////////////////////////////////////////////// Football Points ///////////////////////////////////////////////////////////////////

// function footballPoints(wins, draws, losses) {
// 	return wins * 3 + draws * 1;
// }

// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

// console.log(footballPoints(3, 4, 2))

// console.log(footballPoints(5, 0, 2))

// console.log(footballPoints(0, 0, 1))

/////////////////////////////////////////////// Convert Hours and Minutes into Seconds ////////////////////////////////////////////////////////////

// function convert(hours, minutes) {
// 	return hours * 60 * 60 + minutes * 60;
// }

// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0

// console.log(convert(1, 3))

// console.log(convert(2, 0))

// console.log(convert(0, 0))

///////////////////////////////////////////////////// Fix The Expression /////////////////////////////////////////////////////////////////////////

// function isSeven(x) {
// 	return x === 7 ? true : false;
// }

// isSeven(4) ➞ false

// isSeven(9) ➞ false

// isSeven(7) ➞ true

// console.log(isSeven(4))

// console.log(isSeven(9))

// console.log(isSeven(7))

///////////////////////////////////////////////////// Equality Check ////////////////////////////////////////////////////////////////////////////

// function checkEquality(a, b) {
//   return a === b;
// }

//checkEquality(1, true) ➞ false
// A number and a boolean: the value and type are different.

//checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

//checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.

// console.log(checkEquality(1, true))

// console.log(checkEquality(0, "0"))

// console.log(checkEquality(1, 1))

//////////////////////////////////////////////////////// Profitable Gamble ////////////////////////////////////////////////////////////////////////

// function profitableGamble(prob, prize, pay) {
// 	return prob * prize > pay;
// }

// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true

// console.log(profitableGamble(0.2, 50, 9))

// console.log(profitableGamble(0.9, 1, 2))

// console.log(profitableGamble(0.9, 3, 2))

///////////////////////////////////////////////////////// Boolean to String Conversion /////////////////////////////////////////////////////////////

// function boolToString(flag) {
// 	return flag.toString()
// }

// boolToString(true) ➞ "true"

// boolToString(false) ➞ "false"

// console.log(boolToString(true))

// console.log(boolToString(false))

/////////////////////////////////////////////////////// Using Arrow Functions /////////////////////////////////////////////////////////////////////

// const arrowFunc = (result) => result

// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

// console.log(arrowFunc(3))

// console.log(arrowFunc("3"))

// console.log(arrowFunc(true))

///////////////////////////////////////////////////////// Frames Per Second /////////////////////////////////////////////////////////////////////

// function frames(minutes, fps) {
// 	return minutes * fps * 60;
// }

// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

// console.log(frames(1, 1))

// console.log(frames(10, 1))

// console.log(frames(10, 25))

/////////////////////////////////////////////////////// Miserable Parody of a Calculator /////////////////////////////////////////////////////////

// function calculator(str) {
// 	return eval(str);
// }

// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11

// console.log(calculator("23+4"))

// console.log(calculator("45-15"))

// console.log(calculator("13+2-5*2"))

// console.log(calculator("49/7*2-3"))

/////////////////////////////////////////////////// Buggy Code (Part 4) //////////////////////////////////////////////////////////////////////////

// function greeting(name) {
   
//     if(name == "Mubashir") {
//       return "Hello, my Love!";
//     } else {
//         return "Hello," + " " + name + "!" 
//     }
//   }

// greeting("Matt") ➞ "Hello, Matt!"

// greeting("Helen") ➞ "Hello, Helen!"

// greeting("Mubashir") ➞ "Hello, my Love!"

// console.log(greeting("Matt"))

// console.log(greeting("Helen"))

// console.log(greeting("Mubashir"))

/////////////////////////////////////////////////////// Two Makes Ten /////////////////////////////////////////////////////////////////////////////

// function makesTen(a, b) {
// 	if( a + b === 10 && a || b === 10 ) {
//         return true
//     } else {
//         return false
//     }
// }

// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// console.log(makesTen(9, 10))

// console.log(makesTen(9, 9))

// console.log(makesTen(1, 9))