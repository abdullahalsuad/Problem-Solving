//4. Write a function that can tell us whether an year is a leap year or not.

function inLepYear(year){
  if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
    console.log(`${year} is a leep year`)
  }else{
    console.log(`${year} is not  a leep year`)
  }
}

inLepYear(2028)