Array.prototype.customReduce = function (callback, initialValue = 0) {
  const arr = this;
  let result = initialValue;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
let result = arr.customReduce((res, arr) => {
  return res + arr;
}, 3);

console.log(result);
