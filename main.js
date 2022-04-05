let input = 'ekwqleqwnqwkjeuiqweudnsaduwqu';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let n = 0; n < vowels.length; n++) {
    if (input[i] === vowels[n]) {
      if(input[i] === 'e') {
        resultArray.push(input[i]);
      } else if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
      resultArray.push(input[i]);
      
    }
  }
}

console.log(resultArray.join('').toUpperCase());