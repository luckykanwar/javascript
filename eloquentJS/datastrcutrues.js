// Your code here.
function arrayToList(arr){
  newReversedArray = reverseArray(arr);
  //console.log(newReversedArray)
  let list = null;
  for (num of newReversedArray){
    val = num;
    rest = list;
    //list.push({val, rest})
    list = {val, rest};
    //console.log(list)
  }
  return(list);
}

function listToArray(list){
  arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node['val']);
  }  
  return(arr);
}

function prepend(num, list){
  val = num;
  rest = list;
  list = {val, rest};
  return(list)
}

function nth(list, num){
  arr = listToArray(list)
  return(arr[num])
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Your code here.

var deepEqual = function (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true