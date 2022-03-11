let number = (x, y) => {
    if (y < x) {
        for (let i = x; i >= y; i--) {
            console.log(i);
        }
    } else if (x <= y) {
        for (let i = x; i <= y; i++) {
            console.log(i);
        }
    }
}
number(-3,8)
number(2,5)