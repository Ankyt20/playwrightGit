console.log('Testworld')


// let lsti =[];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // lsti.push(i);
    // console.log(i);
  }
}
// console.log(lsti);

// with the do while loop
// let i = 1;
// do {
//   if (i % 2 === 0) {
//     // console.log(i);
//   }
//   i++;
// } while (i <= 100);

// table of 2 5 10
// for (let i = 1; i <= 10; i++) {
//   console.log("2 *"+i+ "="+2*i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("5 *"+i+ "="+5*i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(10*i);
// }

// with the do while 2 5 10 table
// let j = 1;
// do {
//   console.log(2*j);
//   j++;
// } while (j <= 10);
//print 1 to 5 skip 4 while printing
// let i = 1;
// while (i <= 5) {
//   if (i == 4) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let obj ={name:"Rs",key:"12"}
// console.log(obj);

// for (let i = 1; i <= 10; i++) {
//   console.log(`2 * ${i} = ${5*i}`);
// }
 
// reversed the words
// let wordReverse = "Ram Syt"; 
// let reversed = wordReverse.split('').reverse().join('');

// console.log("the reverse of "+wordReverse+ " is " +reversed);
// // reversed the Sentenced
// let wordString = "I am Java";
// let reversedString = wordString.split(' ').reverse().join(' ');

// console.log(reversedString);

// //with Loop 
// let newString = "";
// for (let  i = wordReverse.length-1; i >= 0; i--) {
//         newString += wordReverse[i];
//     }
// console.log("the reverse of "+wordReverse+ " is " +newString);

// //Remove duplicate in array using loop
// let numList  = [1, 5, 3, 4, 5, 4, 3, 9];
// let duplicateList = [];

// for (let i in numList) {
//     for (let j in numList) {
//         if (i !== j && numList[i] === numList[j] && !duplicateList.includes(numList[i])) {
//             duplicateList.push(numList[i]);
//         }
//     }
// }

// console.log(duplicateList);

// //Smallest element in Array
// let a = [6, 12, 8, 10, 19];
// let smallNo = a[0];  
// for (let i = 1; i < a.length; i++) {
//     if (a[i] < smallNo) {
//         smallNo = a[i];  
//     }
// }
// console.log(smallNo);

//Function for with return type
// function squareno(num) {
//     return num * num; 
// }
// let square = squareno(5);

// console.log('Square:'+square);
// //Funcrion to subtract numbers
// function subno(num1,num2) {
//     return num1 - num2; 
// }
// let sub = subno(5,2);

// console.log('Subtract:'+sub);

//Swap no
let x = 10, y = 5;

 x = x + y;
 y = x - y;
 x = x - y;

console.log("After Swapping: x = " + x + ", y = " + y);

//palindrome or not
function palindromeCheck(num) {
    let numberTostring = num.toString();
    let result = numberTostring.split('').reverse().join('');
    if(numberTostring === result){
        console.log("it is palindrome");
    }
    else{
         console.log("it is not palindrome");
    }
}
palindromeCheck(66566);
palindromeCheck(129);

//factorial of no:--

function fact(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num *= i;
    }
    return num;
}
console.log(fact(4)); 










