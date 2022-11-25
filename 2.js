let x;

x = ;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("Тип x - число");
} else if (typeof(x) == 'string') {
    console.log("Тип x - строка");
} else if (typeof(x) == 'boolean') {
    console.log("Тип x - логический тип");
} else {
    console.log("Тип x не определён");
}