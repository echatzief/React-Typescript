console.log("Time to get started....");

function add(n1:number,n2:number,showResult:boolean){
  if(showResult){
    return "Result: "+(n1 + n2);
  } else {
    return "We hide the result";
  }
}

const num1:number = 5;
const num2:number = 10;
const showResult = false;
console.log(add(num1,num2,showResult))
