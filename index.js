// checking if the given year is leap year or not...

let year = 1996


const checkLeapYear = (y) => {
  if((y % 4 ===0 && y%100 !== 0)||(y % 400 ===0)){
    return "Its a Leap Year!!!"
  } else{
    return "Its 'Not' a Leap Year"
  }
}

console.log(checkLeapYear(year))

// FizzBuzz Number Check

let num = 2

// using if-else conditional statement

function FizzBuzz(n){
  let con1 = n%3===0
  let con2 = n%5===0
  if (con1 && con2){
    return "FizzBuzz"
  } else if (con1) {
    return "Fizz"
  } else if(con2){
    return "Buzz"
  } else{
    return "Not a FizzBuzz Number"
  }
}

console.log(FizzBuzz(num))


// Checking the type of number

let number = 0

const checkNumber = (n)=>{
  let type
  if (n<0) type = "n";
  else if (n>0) type = "p";
  else type = "z";
  
  switch (type){
    case "n":
      return "Negative"
    case "p":
      return "Positive"
    case "z":
      return "Zero"
  }
  
}

console.log(checkNumber(number))



let x = 4
const spellNumber = (x) => {
  switch (x){
    case 0:
      return "Zero"
    case 1:
      return "One"
    case 2:
      return "Two"
    case 3:
      return "Three"
    case 4:
      return "Four"
    case 5:
      return "Five"
    case 6:
      return "Six"
    case 7:
      return "Seven"
    case 8:
      return "Eight"
    case 9:
      return "Nine"
    default:
      return "Provide a Number between 0-9"
  }
}



console.log(spellNumber(x))

// Time based greeting

let time = 26


const greeting = function(t){
  if (t>=1 && t<=11) return "Good Morning";
  else if(t>=12 && t<=16) return "Good Afternoon";
  else if(t>=17 && t<=21) return "Good Evening";
  else if(t>=22 && t<=24) return "Good Night";
  else return "Enter a valid time!!"
}

console.log(greeting(time))


// Electricity bill calculator 

let units = 150

const calSurcharges = (t) =>{
  return t+= (t/5)
}

function calculateBill(u){
  let total = 0;
  if (u<=50) total+= u*0.5;
  else if(u<=150) total+= u*0.75;
  else if(u<=250) total+= u*1.2;
  else total+= u*1.5;

  console.log(calSurcharges(total))
} 

calculateBill(units)


































