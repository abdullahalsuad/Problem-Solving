// How would you determine the number of vowels in a sentence?

const vowels =["a","e","i","o","u","A","E","I","O","U"]

function countVowel(sen){
  let count = 0;
  const letters =Array.from(sen)

  letters.forEach(function(value){
    if(vowels.includes(value)){
      count++
    }

  })
  return count
}

console.log(countVowel("I love you"))
