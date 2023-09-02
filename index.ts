// 1. Sum of even numbers

const numArray = [1,2,3,4,5,6];

let sumOfEvenNums = 0;

for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 == 0){
        sumOfEvenNums = sumOfEvenNums + numArray[i];
    }
}

console.log(sumOfEvenNums);

