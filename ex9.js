let listNumber = [14, 5, 8, 4, 10, 25, 18, 9]
// max min value
let max = listNumber[0] 
let min = listNumber[0]
for (let i = 0 ; i < listNumber.length; i++) {
   if (listNumber[i] > max) {
       max = listNumber[i] 
   }   
   if (listNumber[i] < min ) {
       min = listNumber[i]
   } 
}
console.log("Max =",max);
console.log("Min =",min);