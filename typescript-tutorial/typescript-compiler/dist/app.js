"use strict";
const button = document.querySelector("button");
console.log(button);
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
function clickHandler(message) {
    let username = "test";
    console.log(message);
}
// a comment that you write
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked!");
});
//# sourceMappingURL=app.js.map