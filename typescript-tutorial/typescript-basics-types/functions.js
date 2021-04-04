function add(n1, n2) {
    return (n1 + n2);
}
function printResult(n) {
    console.log("Result: ", n);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(1, 2));
addAndHandle(10, 20, function (c) {
    console.log("Result is: " + c);
});
