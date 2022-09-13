function findFirstDuplicate(arr) {
  // type your code here
  // console.log(arr)
  // for(let i =0; i < arr.length; i ++){
  //   for(let j = i+1; j<arr.length-1; j++){
  //     if(arr[i]===arr[j]){
  //       return arr[i]
  //     }return -1
  //   }
  // }

  const newSet = new Set() 
  //console.log(newSet)

  for(let val of arr){
    if(newSet.has(val))return val
    newSet.add(val)
  }

  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
