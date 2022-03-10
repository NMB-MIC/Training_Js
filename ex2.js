//ปลากระป๋อง  7-12 
let pakapong_can = (fish,tomato) => {
    Can_fish = parseInt(fish / 3)
    Can_tomato = parseInt(tomato / 2)
    if (Can_fish > Can_tomato) {
        product_can = Can_tomato
    } else {
        product_can = Can_fish
    }
    return ({
        product_can ,
        balance_fish : fish - (product_can*3) ,
        balance_tomato : tomato - (product_can*2) 
    })
}
console.log(pakapong_can(300,200));
console.log(pakapong_can(600,200));
console.log(pakapong_can(520,333));
console.log(pakapong_can(700,500));
console.log(pakapong_can(900,100));

