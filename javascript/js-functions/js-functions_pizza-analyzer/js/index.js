Math.Pi;
console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {});
pizzaSize1 = pizzaInput1.value;

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  area1 = 0.25 * Math.PI * diameter1 ** 2;
  area2 = 0.25 * Math.PI * diameter2 ** 2;
  pizzaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain);
}
calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
