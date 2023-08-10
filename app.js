// -------------------------- ДЗ 16.2-----------------------------

let massive = [1, 2, 3, 4, 5, 6, 7];

function arrSum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  alert(sum);
}
arrSum(massive);
// --------------------------ДЗ 16.3---------------------------------------

function fizzbuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      alert("fizzbuzz");
    } else if (i % 5 == 0) {
      alert("buzz");
    } else if (i % 3 == 0) {
      alert("fizz");
    }
    alert(i);
  }
}

fizzbuzz();
// ------------------------ДЗ 16.4-------------------------------------------------
function rangeNumbers(a, b) {
  if (b > a) {
    for (let i = a; i <= b; i++) {
      if (i % 2 == 0) continue;
      alert(i);
    }
  } else {
    alert("В повинно бути більше А");
  }
}

rangeNumbers(2, 12);
