// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// function maxOfTwoNumbers = (a, b){
// return a 
// else 
// return b
// } console.log(maxOfTwoNumbers(a, b))
   

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// maxofThreeNumbers = (a, b, c) => { 
//     return Math.max(a, b, c)
// }
// console.log(maxofThreeNumbers(10, 20, 30))


// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// const isCharacterAVowel = (letter) => {
// if ('aeiou'.includes(letter)){
//     return true

// }else 
//     {return false}
// }
// console.log(isCharacterAVowel('t'))



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
sumArray = array => {
    var sum = 0;
    for (var i=0; i < array.length; i++){
 }
 return sum
};
console.log(sumArray(1,2,3,4,5))

multiplyArray = array =>{
    var sum = 1
    for (var i=0; array.length; i++){
        sum = sum * array[i];
    };
        return sum
    };
    
    console.log(multiplyArray(1,2,3,4,5))

// Write a function that returns the number of arguments passed to the function when called.

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.