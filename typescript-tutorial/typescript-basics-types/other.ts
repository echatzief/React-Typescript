function add(n1:number, n2:number):number{
  return (n1 + n2);
}

function printResult(n: number){
  console.log("Result: ",n);
}

printResult(add(5,12));

let combineValues: (a:number,b:number) => number;
combineValues = add;
console.log(combineValues(1,2))