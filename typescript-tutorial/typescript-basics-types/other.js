function add(n1, n2) {
    return (n1 + n2);
}
function printResult(n) {
    console.log("Result: ", n);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(1, 2));
