Array.prototype.customFilter = function(callback) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i) === true);
      result.push(arr[i]);
  }
  return result;
};

const arr = [1,2,3,4,5];
let result = arr.customFilter((ele) => {
  return (ele%2 === 0);
})

console.log(result);
