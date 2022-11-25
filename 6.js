let arr = ['55', 'b', 'c', 'с', 'e', 'f', 'g', 'true'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Элементы одного типа");
} else {
    console.log("Элементы не одного типа");
}