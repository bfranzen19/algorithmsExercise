/*
// 2. Write a function which, given a year as a number, returns whether that number is a leap year.
// check if leap year for: 2000 (true), 1900 (false), 2016 (true)

var years = []    // creates an empty array called 'years'
years.push(2000)  // expected value: true
years.push(1900)  // expected value: false
years.push(2016)  // expected value: true

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

var success = 'leap year: true'
var failure = 'leap year: false'

var isLeapYear = function(years){
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
*/


// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1
