//How can you order roll numbers of students in your class sequentially?

const rolls = ["12","14","1","50","30","40"]
console.log(rolls.sort(function(a,b){
      return a - b;
}))
