// completed problems:
// 1. working
// 2. working
// 3. working
// 4. working
// 5. working
// 6.
// 7.
// 8.
// 9.
// 10.
// 11.
// 12.
// 13.
// 14.
// 15.
// 16.
// 17.












/*
// *** this one works
// 1. Write a function which takes an array of numbers, and returns the largest number in that array.
// var testArr = [1,5,2,18]
var testArray = [25,8,100,3,2,1]

function maxValue(arr) {
  return Math.max.apply(null, arr)
}
console.log(maxValue(testArray))

// *** this one works
// 2. Write a function which, given a year as a number, returns whether that number is a leap year.

var years = []    // creates an empty array called 'years'
years.push(2000)
years.push(1900)
years.push(2016)

var divBy4 = function(years) {
  if(years%4 === 0) {
    return true
  } else {
    return false
  }
}

var divBy100 = function(years) {
  if(years%100 === 0) {
    return true
  } else {
    return false
  }
}

var divBy400 = function(years) {
  if(years%400 === 0) {
    return true
  } else {
    return false
  }
}

var isLeapYear = function(years){
  var success = 'leap year: true'
  var failure = 'leap year: false'
  console.log('--- ' + years + ' ---')
    if((divBy4(years) === true) && (divBy100(years) === false) || (divBy400(years) === true)){
      console.log(years + ' ' + success)
    } else {
      console.log(years + ' ' + failure)
    }
  console.log('\n')
}

// iterates over each value in the years array and evaluates if it's a leap year or not.
for(var i=0 ; i<years.length ; i++) {
  isLeapYear(years[i])
}


//*** this is working
// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

//empty arrays
var testArray = []
testArray.push(3,4,5)

// must loop through each element in the array
// must evaluate each element as > or < previous value

var checkValues = function(arr) {
  for(var i=0 ; i<=arr.length ; i++) {
    var check = i+1
    console.log('array value: ' + arr[i])
    console.log('check value: ' + check)
    console.log('-=-=-=-=-=-=-=-=-=-=-=-')
    if(arr[i] != check) {
      console.log('the next value should be ' + check + ' but is ' + arr[i])
      return check
    } else {
      console.log('next')
    }
  }
}
console.log(checkValues(testArray))

// *** this is working
// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.

var testArray = []
testArray.push(1,1,2,3,1,2,3)
console.log('test array: ' + testArray)

var noDuplicates = testArray.filter(function(element, index) {
  return testArray.indexOf(element) == index;
});

console.log(noDuplicates)


//*** this works
// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
var test = 'The quick brown fox'
var splitStr = test.split(' ')

// converts english to pig latin
var toPigLatin = function(splitStr) {
  for(var i=0 ; i<splitStr.length ; i++) {
    var firstLetter = splitStr[i].charAt([0]).toLowerCase()
    var restOfWord = splitStr[i].slice(1)
    var newWord = restOfWord + firstLetter + 'ay'
    var newArr= []
    newArr.push(newWord)
    var newStr = newArr.toString(' ')
    console.log(newStr)
  }
}
console.log(toPigLatin(splitStr))

// converts pig latin to english
var piggyTest = "hetay uickqay rownbay oxfay"
var splitPigStr = piggyTest.split(' ')

var toEnglish = function(splitPigStr) {
  for(var i=0 ; i<splitPigStr.length ; i++) {
    var piggyElem = splitPigStr[i]
    var ay = piggyElem.lastIndexOf('ay')
    var firstLetter = piggyElem.slice(ay-1, ay)
    var restOfWord = piggyElem.slice(0, ay-1)
    var englishWord = firstLetter + restOfWord
    var newArray = []
    newArray.push(englishWord)
    var newStr = newArray.toString(' ')
    console.log(englishWord)
  }
}
console.log(toEnglish(splitPigStr))
*/

/*
// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false





// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]






// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
//
// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)





// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
//
// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]




// 10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value.
//
// ```javascript
// var numbers = ['four', 'eleven']
// var animals = ['cat', 'bat', 'dolphin']
// arrayTransfer(numbers, animals)
// console.log(numbers) // []
// console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']
//
// ```





// 11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`.





// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.
//
// 'I ate toast for breakfast' -> 'breakfast'






// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that.
//
// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'






// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366





// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:
//
// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```





// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false.




// 17. Write a function which returns a random integer from 1 to 10.




*/
