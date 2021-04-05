const button = document.querySelector("button")!;
console.log(button)
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(message: string) {
  let username = "test";
  console.log(message);
}

// a comment that you write
button?.addEventListener("click", () => {
  let user = "test";
  console.log("Clicked!");
})