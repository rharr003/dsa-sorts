function merge(sortedArray1, sortedArray2) {
  let result = [];
  let a = 0;
  let b = 0;
  let count = 0;
  while (a < sortedArray1.length && b < sortedArray2.length) {
    if (sortedArray1[a] < sortedArray2[b]) {
      result.push(sortedArray1[a]);
      a++;
    } else if (sortedArray1[a] > sortedArray2[b]) {
      result.push(sortedArray2[b]);
      b++;
    } else {
      result.push(sortedArray1[a]);
      result.push(sortedArray2[b]);
      a++;
      b++;
    }
    count++;
  }
  const arr1remaining = sortedArray1.slice(a);
  const arr2remaining = sortedArray2.slice(b);
  console.log(count);
  return [...result, ...arr1remaining, ...arr2remaining];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
