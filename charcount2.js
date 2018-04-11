function countLetters(sentence) {
// loop through letters and if it is unique print it
  var uniqueArray = Array.from(new Set(sentence))
  uniqueArray = uniqueArray.filter(function(str) {
    return /\S/.test(str);
});
  console.log(uniqueArray)

//loop through the sentence. If it has

console.log((sentence.match(/e/g) || []).length); //logs 3


var emptyArray = []

for(i = 0; i < uniqueArray.length; i++) {
  var matchSentence = ((sentence.match(new RegExp(uniqueArray[i], 'g')) || []).length);
  emptyArray.push(matchSentence)
}
console.log(emptyArray)

}
countLetters("lighthouse in the house")

// var obj = {
//   a: 1
// }

// obj.b = 2;
// obj['c'] = 3;

// var key = 'd';

// obj[key] = 5;

// {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 5
// }