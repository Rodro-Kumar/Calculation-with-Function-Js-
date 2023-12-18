// todo : Calculation with arrow function & object
//* note : Take two numbers and return all calculation result (add , multi , div , sub , expo , modul)

const add = (a, b) => {
  const addResult = a + b;
  const addReturn = { result: addResult, funName: "add" };
  return addReturn;
};

const multi = (a, b) => {
  const multiResult = a * b;
  const multiReturn = { result: multiResult, funName: "multi" };
  return multiReturn;
};

const div = (a, b) => {
  const divResult = a / b;
  const divReturn = { result: divResult, funName: "div" };
  return divReturn;
};

const sub = (a, b) => {
  const subResult = a - b;
  const subReturn = { result: subResult, funName: "sub" };
  return subReturn;
};

const expo = (a, b) => {
  const expoResult = a ** b;
  const expoReturn = { result: expoResult, funName: "expo" };
  return expoReturn;
};

const modul = (a, b) => {
  const modulResult = a % b;
  const modulReturn = { result: modulResult, funName: "modul" };
  return modulReturn;
};

const allFunction = [add, multi, div, sub, expo, modul];
const inputNumber1 = document.getElementById("value1");
const inputNumber2 = document.getElementById("value2");
const btn = document.getElementById("btn");
const display = document.getElementById("display");

btn.addEventListener("click", () => {
  const firstValue = +inputNumber1.value;
  const secoundValue = +inputNumber2.value;

  for (let i = 0; i < allFunction.length; i++) {
    const finalResult = allFunction[i](firstValue, secoundValue);

    if (finalResult.funName === "add") {
      display.innerHTML += `যোগফল  : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "multi") {
      display.innerHTML += `গুনফল  : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "div") {
      display.innerHTML += `ভাগফল  : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "sub") {
      display.innerHTML += `বিয়োগফল  : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "expo") {
      display.innerHTML += `ব্যাখ্যা : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "modul") {
      display.innerHTML += ` ভাগশেষ: ${finalResult.result} <br>`;
    }
  }
});
