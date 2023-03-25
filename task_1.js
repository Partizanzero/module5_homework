let val = +prompt("Введите значение: ");
let tp = typeof (val);

if (tp === 'number') {
    if (val % 2 == 0) {
        console.log('Число четное: ' + val + ', ' + 'type: ' + tp);
    } else {
        console.log('Число нечетное: ' + val + ', ' + 'type: ' + tp);
    }

} else if (isNaN(tp) == true) {
    console.log('Упс, кажется, вы ошиблись. Тип значения: ' + type);
} else {
    console.log('Упс, кажется, вы ошиблись');
}