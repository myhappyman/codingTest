function solution(n, arr1, arr2) {
  const array = [];
  for (let i = 0; i < n; i++) {
    let value = fillString(n, arr1[i].toString(2));
    let value2 = fillString(n, arr2[i].toString(2));

    let newValue = "";
    for (let j = 0; j < n; j++) {
      if (parseInt(value[j]) + parseInt(value2[j]) > 0) {
        newValue += "#";
      } else {
        newValue += " ";
      }
    }
    array.push(newValue);
  }
  return array;
}

function fillString(n, str) {
  while (str.length < n) {
    str = "0" + str;
  }
  return str;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
