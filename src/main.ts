/// <reference lib="dom" />
const n1 = document.querySelector("#n1")! as HTMLInputElement;
const n2 = document.querySelector("#n2")! as HTMLInputElement;
const n3 = document.querySelector("#n3")! as HTMLInputElement;
const n4 = document.querySelector("#n4")! as HTMLInputElement;

n1.onchange = calc;
n2.onchange = calc;
n3.onchange = calc;

function calc() {
  if (!n1.value || !n2.value || !n3.value) return;
  n4.value = ((Number.parseFloat(n2.value) / Number.parseFloat(n1.value)) *
    Number.parseFloat(n3.value)).toString();
}
