let star1 = (r, c) => {
    let star = ""
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            star = star + "*";
            //console.log(j);
        }
        star = star + '\n';
        //console.log(i);
        //console.log(star);
    }
    console.log(star);
}
star1(3, 4)