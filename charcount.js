function countLetters(input) {
  var output = {}
  for(i = 0; i < input.length; i += 1) {
    var char = input[i]
    if(output[char] === undefined && char !== " ") {
      output[char] = 1
    }
    else if(output[char] !== undefined) {
      output[char] += 1
    }
  }
  return output
}

console.log(countLetters("lighthouse in the house"))


