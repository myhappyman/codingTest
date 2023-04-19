function solution(n, arr1, arr2) {
  const array = [];
  for (let i = 0; i < n; i++) {
    let value = arr1[i].toString(2);
    value = fillString(n, value);

    let value2 = arr2[i].toString(2);
    value2 = fillString(n, value2);

    let newValue = "";
    for (let j = 0; j < n; j++) {
      let v1 = parseInt(value[j]);
      let v2 = parseInt(value2[j]);
      if (v1 + v2 > 0) {
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
