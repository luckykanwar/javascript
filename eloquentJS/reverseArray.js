// Your code here.
function reverseArray(arr){
  len = arr.length
  output = []
  while(len > 0){
  	output.push(arr[len-1])
    len -= 1
  }
  return(output)
}

function reverseArrayInPlace(arr){
  lenStart = 0
  lenEnd = arr.length-1
  while(lenStart <= arr.length/2 && lenEnd >= arr.length/2){
    temp = arr[lenStart]
  	arr[lenStart] = arr[lenEnd]
    arr[lenEnd] = temp
    lenStart += 1
    lenEnd -= 1
  }
  return(arr)
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]