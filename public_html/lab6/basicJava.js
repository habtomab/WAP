/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

//console.log("Expected----- output of max(20,10) is 20 and  " + myFunctionTest(20, function(){return 20;} ));


/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));



function isVowel(alphabet){
    if(alphabet.length !== 1)
        return false;
    if(alphabet==='a' || alphabet==='e' || alphabet==='i' || alphabet==='o' || alphabet==='u')
        return true;
    else
        return false;
}
console.log("Expected output of isVowel is True  " + myFunctionTest(true, isVowel("u")));
console.log("Expected output of isVowel is False  " + myFunctionTest(true, isVowel("z")));


   // sum of the element
   function sum(arr){
    return arr.reduce(function(sum,elem){
        return sum+elem;
});}


console.log("Expected output of sum is 20  " + myFunctionTest(20, sum([10,2,4,4])));


  // multipling of th e element
  function multiply(arr){
  return arr.reduce(function(multi,elem){
   return multi*elem;
});}
console.log("Expected output of multiply is 240  " + myFunctionTest(240, multiply([10,4,3,2])));


// reversing element
function reverse(arr){
  

return arr.split("").reverse().join("");
}


function findLongestWord(wordList) {

    var maxLength = wordList[0].length;

    for(var i=1; i< wordList.length; i++) {
        if(maxLength<wordList[i].length ) {
            maxLength=wordList[i].length;
        }
    }
    return maxLength;
}


console.log("Expected output of findLongestWord is 9  " + myFunctionTest(9, findLongestWord(["hello","world","this","is","wonderful"])));

function testArray(expected, found) {
    if(expected.length !== found.length)
        return "TEST FAILED.  Expected length " + expected.length + " found length" + found.length;
    for(var i = 0;i<expected.length;i++) {
        if(expected[i] !== found[i])
            return "TEST FAILED.  Expected " + expected[i] + " found " + found[i];
    }
    return "TEST SUCCEEDED";
}
 // filtering the long word
    function filterLongWords(a,x) {
     
        return a.filter(function(elem,i,array){
              return elem.length>x;
        });}

console.log("Expected output of filterLongWords is 'really', 'wonderful'  " + testArray(["really","wonderful"], filterLongWords(["this","is","really","very","wonderful"],4)));



const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
});


console.log("Expected output after multiplying by 10 [10,30,50,30,30]  " + testArray([10,30,50,30,30], b));


const e = a.reduce(function(prevVal,elem, i, array) {
    return prevVal * elem;
})
console.log("Result of multiplication of each element is 135  " + myFunctionTest(135, e));


const a1 = [3,3,3,3];
const c = a1.filter (function( elem , i , array){
    return elem === 3;
});
if(c.length== a1.length)
    console.log("Array with all elements equal to 3 is [3,3,3,3]  " + testArray([3,3,3,3], c));