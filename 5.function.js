
// function Hello(name) {
//     return "Hello" + name ;
// }
// console.log(Hello("Nut"));

// function fn_one(x) {
//     return x + 1
// }
// console.log(fn_one(5));

// function fn_two(a,b) {
//     let fn_two = a+b ;
//     console.log(fn_two);
// }
// fn_two(10,20)

// let fn_two = (a, b) => {
//     let fn_two = a + b;
//     return fn_two
// }
// console.log(fn_two(10, 20));

// let area = (W, h) => {
//         let area = W * h ;
//         return area
//     }
//     console.log(area(10,20));


// let area_2 = (r) => {
//     let cir = 2 * Math.PI * r
//     let area = Math.PI * r * r
//     return area_2 = {
//         เส้นรอบวง: cir,
//         พื้นที่: area
//     }
// }
// console.log(area_2(7));


let temp = (f) => {
    let tempC = (f-32)*5/9
    return tempC
}
console.log(temp(50) + " C"); 
////////////////////////////////////////////
let BMI = (weight, height)  => {
    let findBMI = weight / (height*height)
    return findBMI
}
console.log(BMI(60,1.70));
