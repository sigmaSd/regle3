/// <reference lib="dom" />
const n1 = document.querySelector("#n1")! as HTMLInputElement;
const n2 = document.querySelector("#n2")! as HTMLInputElement;
const n3 = document.querySelector("#n3")! as HTMLInputElement;
const n4 = document.querySelector("#n4")! as HTMLInputElement;
const rel = document.querySelector("#rel")! as HTMLParagraphElement;

n1.oninput = calc;
n2.oninput = calc;
n3.oninput = calc;

function calc() {
  if (!n1.value || !n2.value) {
    rel.innerText = "";
    n4.value = "";
    return;
  }
  const relVal = Number.parseFloat(n2.value) / Number.parseFloat(n1.value);
  rel.innerText = "x " + relVal.toString();

  if (!n3.value) {
    n4.value = "";
    return;
  }
  n4.value = (relVal * Number.parseFloat(n3.value)).toString();
}
