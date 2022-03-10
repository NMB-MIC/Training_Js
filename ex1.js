let can = (fish, tomato) => {
    can_fish = parseInt(fish / 3)
    can_tomato = parseInt(tomato / 2)
    if (can_fish > can_tomato) {
        return can_tomato
    } else {
        return can_fish
    }
}
console.log(can(300,200));
console.log(can(600,200));
console.log(can(520,333));
console.log(can(700,500));
console.log(can(900,100));
