let arr = [null, 'word', 1, 2, 3, 4, 5, 6, 7, true];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Количество чётных " + countEven);
console.log("Количество нечётных " + countOdd);
console.log("Количество остальных " + countOther);