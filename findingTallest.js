

// Problem : 1 
//  Who is the tallest? Find the max number in an array
//An array of element how can i find the Largest nUmber..

// function maxNumber(number){
    
//     let LargestNumber = 0;

//     for(let i = 0; i < number.length; i++){
//         let index = i;
//         let element = number[index];
//         console.log(element);
//         if (element > LargestNumber) {
//             LargestNumber = element;
//         }
        
//     }
//     return LargestNumber;
// }

// const myNumber = [167, 190, 120, 165,137,4545];
// const tallestNumber = maxNumber(myNumber);
// console.log("Tallest Number is = ", tallestNumber);
function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

const myNumber = [34,343,23,65,45];
const sendNumber = secondLargest(myNumber);
console.log(sendNumber);