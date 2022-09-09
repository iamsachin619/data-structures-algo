// Q2. Given an array, remove the duplicates elements of the array.
// Sample input: [0,1,2,3,3,4,5,6,6,9]
// Output: [0,1,2,3,4,5,6,9]

function removeDuplicates(arr){
    let ans = []
    for(let i = 0;i<arr.length;i++){
        if(!ans.includes(arr[i])){
            ans.push(arr[i])
        }
    }
    return ans
}

let result = removeDuplicates([0,1,2,3,3,4,5,6,6,9])


