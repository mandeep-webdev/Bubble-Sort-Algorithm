
const bubbleSort = (arr) => {
  debugger
  // run the steps n-1 times
  let swapped
  for(let i=0 ; i<= arr.length - 1 ; i++) {
    swapped = false
    // Here i is only for counting the no. of rounds
    // for each round, max item will come at the last respective index
    for(let j=1; j<= arr.length - 1 - i; j++){
      // swap if element is smaller then the prev one
      if(arr[j] < arr[j-1]){
        // swap
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        swapped = true
      }
    }
    // if there is no swap for a particular value of i it means array is sorted then just end the prog
    if(!swapped)
    {
      break
    }
  }
  return arr
}

const ans = bubbleSort([45,0,-21,90,-34])
console.log(ans)