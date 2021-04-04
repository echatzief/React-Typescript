function add(n1:number, n2:number):number{
  return (n1 + n2);
}

function printResult(n: number){
  console.log("Result: ",n);
}

function addAndHandle(n1: number, n2: number, cb:(num:number)=> void) {
  const result = n1 + n2;
  cb(result);
}
printResult(add(5,12));

let combineValues: (a:number,b:number) => number;
combineValues = add;
console.log(combineValues(1, 2))
addAndHandle(10, 20, (c) => {
  console.log("Result is: "+c)
})