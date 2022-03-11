//loop 1 

// let count = (num) => {
//     for (let i = 0; i <= 19 ; i++) {
//       console.log(i);

//     }
// }
// count(19) 

// for (let i = 0; i <= 19 ; i++) {
//     console.log(i);    
//   } 


//loop 2 

// let count = (number) => {
//     if (number > 0) {
//         for (let i = 1; i <= number; i++) {
//             console.log(i);
//         }
//     } else {
//         console.log("Invalid input");
//     }
// }
// count(10)
// count(-4)
// count(1)

let count1 = (num) => {
    if (num > 0) {
        let i = 1
        let j = 4
        while (i <= num) {
            console.log("ค่า i",i);
            console.log("ค่า i+j",i + j);
            i++;
        }
    } else {
        console.log("Invalid input");
    }
}
// count1(0)
count1(10)
// count1(-5)
