console.log("Time to get started....");
function add(n1, n2, showResult) {
    if (showResult) {
        return "Result: " + (n1 + n2);
    }
    else {
        return "We hide the result";
    }
}
var num1 = 5;
var num2 = 10;
var showResult = false;
console.log(add(num1, num2, showResult));
