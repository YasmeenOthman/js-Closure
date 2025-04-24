function makeCounter(initial) {
  let counter = initial;
  return {
    increaseCounter: function () {
      return ++counter;
    },
    decreaseCounter: function () {
      return --counter;
    },
  };
}
let c1 = makeCounter(1);
let c2 = makeCounter(10);
let c3 = makeCounter(20);

//   Counter1
let increaseButton1 = document.getElementById("counter1-inc");
let decreaseButton1 = document.getElementById("counter1-dec");
let result1 = document.getElementById("counter1-res");

//   Counter2
let increaseButton2 = document.getElementById("counter2-inc");
let decreaseButton2 = document.getElementById("counter2-dec");
let result2 = document.getElementById("counter2-res");

//   Counter3
let increaseButton3 = document.getElementById("counter3-inc");
let decreaseButton3 = document.getElementById("counter3-dec");
let result3 = document.getElementById("counter3-res");

increaseButton1.addEventListener("click", () => {
  result1.innerHTML = c1.increaseCounter();
});
decreaseButton1.addEventListener("click", () => {
  result1.innerHTML = c1.decreaseCounter();
});

increaseButton2.addEventListener("click", () => {
  result2.innerHTML = c2.increaseCounter();
});
decreaseButton2.addEventListener("click", () => {
  result2.innerHTML = c2.decreaseCounter();
});
increaseButton3.addEventListener("click", () => {
  result3.innerHTML = c3.increaseCounter();
});
decreaseButton3.addEventListener("click", () => {
  result3.innerHTML = c3.decreaseCounter();
});

// __________________ Simplifying the code ___________________

function makeCounter(initial) {
  let counter = initial;
  return {
    increaseCounter: function () {
      return ++counter;
    },
    decreaseCounter: function () {
      return --counter;
    },
  };
}

// Create counters
let counters = [makeCounter(1), makeCounter(10), makeCounter(20)];

// General function to set up buttons and display result
function setupCounter(counter, index) {
  const increaseButton = document.getElementById(`counter${index}-inc`);
  const decreaseButton = document.getElementById(`counter${index}-dec`);
  const result = document.getElementById(`counter${index}-res`);

  increaseButton.addEventListener("click", () => {
    result.innerHTML = counter.increaseCounter();
  });

  decreaseButton.addEventListener("click", () => {
    result.innerHTML = counter.decreaseCounter();
  });
}

// Loop through each counter to set up its buttons and result display
counters.forEach((counter, i) => setupCounter(counter, i + 1));
