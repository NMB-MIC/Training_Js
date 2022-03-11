let fn = (input) => {
    if (input >= 1 && input <= 99) {
        for (let i = 1; i <= 12; i++) {
            console.log(input + "x" + i + "=" + input * i);
        }
    } else {
        console.log("number is out of range");
    }
}
fn(5) 