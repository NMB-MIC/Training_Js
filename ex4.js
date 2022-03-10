//internet 3,4 
let hour1 = 50
let hour2 = 100
let A_cost = 15 * hour1
let B_cost = 100 + (A_cost * 0.9) // คิดส่วนลด

let C_cost = 15 * hour2
let D_cost = 100 + (C_cost * 0.9) // คิดส่วนลด 

console.log('50 hr: A ', A_cost);
console.log('50 hr เป็นสมาชิก: B', B_cost);

console.log('100 hr ไม่เป็นสมาชิก = C', C_cost);
console.log('100 hr เป็นสมาชิก = D', D_cost);

if (A_cost > B_cost) {
    console.log("'50 hr ไม่เป็นสมาชิก A จ่ายมากกว่า  :**", A_cost);
} else {
    console.log("50 hr เป็นสมาชิก B จ่ายมากกว่า", B_cost);
}

if (C_cost > D_cost) {
    console.log("100 hr ไม่เป็นสมาชิก C จ่ายมากกว่า:", C_cost);
} else {
    console.log("100 hr เป็นสมาชิก D จ่ายมากกว่า:", D_cost);
}
