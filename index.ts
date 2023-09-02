// 1. Sum of even numbers

// const numArray = [1,2,3,4,5,6];
//
// let sumOfEvenNums = 0;
//
// for(let i = 0; i < numArray.length; i++){
//     if(numArray[i] % 2 == 0){
//         sumOfEvenNums = sumOfEvenNums + numArray[i];
//     }
// }
//
// console.log(sumOfEvenNums);

// 2. Print only the even numbers

// const numArray = [1,2,3,4,5,6];
//
//
// for(let i = 0; i < numArray.length; i++){
//     if(numArray[i] % 2 == 0){
//         console.log(numArray[i]);
//     }
// }

// 3. Remove even numbers

const numArray = [1,2,3,4,5,6];

for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 == 0){
        numArray.splice(i,1);
    }
}

// console.log("Odd numbers", numArray);

// 4. Calculate area of a circle

function calcCircleArea(radius: number) {
    return Math.PI * (radius ** 2)
}

console.log('Calculate Area of a circle', calcCircleArea(5));

