Array.prototype.customMap = function(callback) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const val = callback(arr[i], i); //pass 'i' variable for index
    result.push(val);
  }
  return result;
};

const arr = [1,2,3,4,5];
console.log(arr.customMap((ele, index) => {
  //console.log(index);
  return ele*2;
}))
