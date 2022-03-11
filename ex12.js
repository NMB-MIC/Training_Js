let a = [7, 9, 2, 9, 7, 10, 2, 9, 3, 9]
let num_find = 9
let num_list = []
let number = []

for (let i = 0; i < a.length; i++) {
    if (a[i] == num_find) {
        num_list.push(i)
        console.log(i);
    }
    // if (a[i] == num_find) {
    //     number.push(i+1)
    //     console.log(i + 1);
    // }
}
if (num_list.length !== 0) {
    console.log("number find :" ,num_list );
} else {
    console.log("0");
}
