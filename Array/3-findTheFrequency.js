// Q3:Find the frequency of elements in an Array?
// Sample input =[1,3,3,4,2,3,6,6,1,0,9]
// Output=>        1= 2times;
// 	               3= 3times;
//                 4= 1 times;
//                 2= 1times;
//                 6 = 2times;
//                 0= 1times;
//                 9= 1times;


function findFrequency(arr){
    let ans = {}
    for(let i = 0;i<arr.length;i++){
    
        if(!Object.keys(ans).includes(arr[i].toString())){
            ans[arr[i]] = 1
        }else{
            ans[arr[i]] += 1
        }
    }
    return ans
}

const result = findFrequency([1,3,3,4,2,3,6,6,1,0,9])

