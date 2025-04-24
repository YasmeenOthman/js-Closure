// _____________ Approach1 ___________________

// function size12() {
//   document.body.style.fontSize = "12px";
// }
// function size14() {
//   document.body.style.fontSize = "14px";
// }
// function size16() {
//   document.body.style.fontSize = "16px";
// }
// function size18() {
//   document.body.style.fontSize = "18px";
// }

// document.getElementById("size-12").addEventListener("click", size12);
// document.getElementById("size-14").addEventListener("click", size14);
// document.getElementById("size-16").addEventListener("click", size16);
// document.getElementById("size-18").addEventListener("click", size18);

// _____________ Approach2 : passing parameter (without closure)___________________

// function setSize(size) {
//   document.body.style.fontSize = size;
// }

// document
//   .getElementById("size-12")
//   .addEventListener("click", () => setSize("12px"));
// document
//   .getElementById("size-14")
//   .addEventListener("click", () => setSize("14px"));
// document
//   .getElementById("size-16")
//   .addEventListener("click", () => setSize("16px"));
// document
//   .getElementById("size-18")
//   .addEventListener("click", () => setSize("18px"));

//  ____________________________ Approach3 : Closure_______________________________

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);
let size18 = makeSizer(18);

document.getElementById("size-12").addEventListener("click", size12);
document.getElementById("size-14").addEventListener("click", size14);
document.getElementById("size-16").addEventListener("click", size16);
document.getElementById("size-18").addEventListener("click", size18);
