
/*
// 1. Write a function which takes an array of numbers, and returns the largest number in that array.
// var testArr = [1,5,2,18]
var testArray = [25,8,100,3,2,1]

function maxValue(arr) {
  return Math.max.apply(null, arr)
}
maxValue(testArray)

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


// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

//empty array
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
checkValues(testArray)


// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.

var testArray = []
testArray.push(1,1,2,3,1,2,3)
console.log('test array: ' + testArray)

var noDuplicates = testArray.filter(function(element, index) {
  return testArray.indexOf(element) == index;
});

console.log(noDuplicates)


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
toPigLatin(splitStr)

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
toEnglish(splitPigStr)


// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false

var array1 = [1, 1, 1]
var array2 = [1, 1, 1, 1]

var compareArrays = function(array1, array2) {
  array1.sort()
  array2.sort()
  for(var i=0 ; i<array1.length ; i++) {
    if(array1.length != array2.length) {
      return false
    } else if(array1[i] === array2[i]) {
      console.log('array 1 and array2 contain the same number of the same values.')
      return true
    } else {
      console.log(`the arrays don't match`)
      return false
    }
  }
}
compareArrays(array1, array2)


// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]

var test = [1,2,3,4,5,6,7,8]
testArray = test.sort()
var newArr = []

var newArray = function(testArray, cutoffValue) {
  for(var i=0 ; i<testArray.length ; i++) {
    console.log(testArray[i])
    if(i < cutoffValue) {
      newArr.push(testArray[i])
    } else {
      newArr.push(cutoffValue)
    }
  }
  console.log(newArr)
}
newArray(testArray, 4)


// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

// returns a number between 1 and 100
var randoNumbo = function() {
  return Math.floor(Math.random() *100) + 1
}

var output = []
var distinctNumberArray = function() {
  for(var i=0 ; i<10 ; i++) {
    if(i !== randoNumbo) {
      output.push(randoNumbo(i))
      console.log(output)
    } else {
      output.push(i)
      console.log(output)
    }
  }
}
distinctNumberArray()


// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
array1 = [-1, 0, 1]
array2 = [-2, 2]
combinedArray = []

var mergeArrays = function(array1, array2) {
  arrLen = array1.length + array2.length
  var outputArr = combinedArray.concat(array1,array2).sort(function(a,b){return a-b})
  console.log(outputArr)
}
mergeArrays(array1, array2)


// 10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value.
// ```javascript
// var numbers = ['four', 'eleven']
// var animals = ['cat', 'bat', 'dolphin']
// arrayTransfer(numbers, animals)
// console.log(numbers) // []
// console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']
//
// ```
array1 = ['four', 'twenty four']
array2 = ['cat', 'bat', 'dolphin']
newArr = []

var checkArrLen = function(arr1, arr2) {
  if(arr1.length === arr2.length) {
    console.log('array 1 length: ' + arr1.length)
    console.log('array 2 length: ' + arr2.length)
    console.log('the arrays are the same length')
  } else {
    if(arr1.length > arr2.length) {
      // console.log('array 1 ' + arr1)
      var concatArr = newArr.concat(arr1, arr2)
      console.log('new array: ' + concatArr)
    } else {
      // console.log('array 2 ' + arr2)
        var concatArr = newArr.concat(arr2, arr1)
      console.log('new array: ' + concatArr)
      return arr2
    }
  }
}
checkArrLen(array1, array2)


// 11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`.
var randoNumbo = function() {
  return Math.random()
}

var replaceNum = function() {
  var n = randoNumbo().toString()
  console.log('original number: ')
  console.log(n)
  console.log('-=-=-=-=-=-=-=-=-=-')
  for(var i=0 ; i<n.length ; i++) {
    if(n.search(3) || n.search(7)) {
      n = n.replace(3, 8)
      n = n.replace(7, 1)
      n = Number(n)
    } else {
      return false
    }
  }
  console.log(n)
  console.log('modified number: ')
}
replaceNum()


// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.
// 'I ate toast for breakfast' -> 'breakfast'
var testString = 'I ate toast for breakfast'

var evalElements = function(string) {
  console.log('original string: ' + testString)
  var splitStr = string.split(' ').sort(function(a,b){return b.length-a.length})
  console.log('longest word in string: ' + splitStr[0])
  return splitStr[0]
}
evalElements(testString)



// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that.
// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'
var testString = 'I ate toast for breakfast'

var capitalizeFirstLetter = function() {
  var splitStr = testString.split(' ')
  for(var i=0 ; i<splitStr.length ; i++) {
    var firstLetter = splitStr[i][0].toUpperCase()
    var restOfWord = splitStr[i].slice(1)
    var newWord = firstLetter + restOfWord
    var newArr = []
    newArr.push(newWord)
    newStr = newArr.toString(' ')
    console.log(newStr)
  }
}
capitalizeFirstLetter()


// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366
var inpDate1 = '1998/01/24'
var inpDate2 = '1999/01/25'

var compareDates = function(d1, d2) {
  var d1 = new Date(inpDate1)
  var d2 = new Date(inpDate2)
  var day = 1000*60*60*24

  d1 = d1.getTime()
  d2 = d2.getTime()
  var diff_ms = d2-d1

  if(d1 === d2) {
    console.log(inpDate1 + ' is equal to ' + inpDate2)
    console.log('0 days between them.')
  } else if (d1 < d2) {
    console.log(Math.round(diff_ms/day) + ' days between ' + inpDate1 + ' and ' + inpDate2)
    return Math.round(diff_ms/day)
  } else {
    console.log(Math.round(diff_ms/day) + ' days between ' + inpDate1 + ' and ' + inpDate2)
    return Math.round(diff_ms/day)
  }
}
compareDates(inpDate1, inpDate2)


// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:
//
// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```
var add = function(x,y) {
  return x + y
}

var addInp = function(add) {
  add(x, y)
}

var seven = add(5,2)
console.log(seven)

// *** i couldn't get this one to work after hours and hours of trying.



// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false.
var testNum = -24

var checkInt = function(num) {
  if(num < 0) {
    console.log('false')
    return false
  } else if(Number.isInteger(num)) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}
checkInt(testNum)


// 17. Write a function which returns a random integer from 1 to 10.

var randoNumbo = function() {
  return Math.floor(Math.random() * 11)
}
randoNumbo()

*/
