// Q1: Find the missing element in the given Array containing distinct element from 0 to n? 
// Arr =[1,2,3,5]

// output: 4

//using prev checking method
function findMissingElement(arr){
    let sum = 0
    if(arr.length == 0){
        return 'empty array'
    }

    let prev = arr[0]
    for(let i = 1;i<arr.length;i++){
        if(prev != arr[i]-1){
            return arr[i]-1
        }else{
            prev = arr[i]
        }
    }
    return 'no missing element'
}

const ans = findMissingElement([1,2,3,5])


//Arethmetic Progression method
function findMissingAPmethod(arr){
    
}
