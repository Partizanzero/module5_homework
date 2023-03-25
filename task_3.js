/* Метод 1: встроенный метод REVERSE */
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr("Hello"));


/* Метод 2: цикл FOR */
function reverseStr(str) {

    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseStr("Hello"));


/* Метод 3: цикл WHILE */
function reverseString(str) {

    const arr = [...str];
    let reverse = "";

    while (arr.length) {
        reverse = reverse + arr.pop();
    }

    return reverse;
}
console.log(reverseString('Hello'));


