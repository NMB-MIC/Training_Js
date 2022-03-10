// Tax 
const Tax = (income) => {
    let tax = 0
    if (income >= 200000 && income < 500000) {
        tax = income * 7 / 100
    } else if (income >= 500000 && income < 1000000) {
        tax = income * 20 / 100
    } else if (income >= 1000000){
        tax = income * 30 / 100
    }else {
        tax = "ไม่เสียภาษี"
    }
    return ({ income, tax })
}
console.log(Tax(250000));
console.log(Tax(190000));