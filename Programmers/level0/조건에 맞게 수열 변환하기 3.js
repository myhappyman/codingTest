const solution = (arr, k) =>
    k % 2 === 0 ? arr.map((x) => x + k) : arr.map((x) => x * k);
