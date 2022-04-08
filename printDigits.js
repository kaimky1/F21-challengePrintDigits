const printDigits = (num) => {
    let digit = '';
    let rev = 0;
    while(num > 0){
        digit = num % 10;
        rev = (rev * 10) + digit;
        num = Math.floor(num/10);

    }
    return rev;
}
console.log(printDigits(5647))

const printRevDigits = (num) => {
    let digit = '';
    while(num > 0){
        digit = num % 10;
        num = Math.floor(num/10);
        console.log(digit);
    }
}

printRevDigits(5647)

